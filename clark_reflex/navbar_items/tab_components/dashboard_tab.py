"""Dashboard + filter + metrics"""
import reflex as rx
from clark_reflex.imports import *


def convert_to_list_data(df) -> list:
    # convert csv to a list
    with open(df) as f:
        reader = csv.DictReader(f)
        data_as_list = list(reader)

    # convert this to keep only tCO2e and Month
    new_rows = []
    for row in data_as_list:
        new_row = {}
        for key, value in row.items():
            if key in ['tCO2e', 'Month']:
                new_row[key] = value
        new_rows.append(new_row)

    # Calculate the Quanity based on the same 'Month'
    combined_quantities = defaultdict(float)
    for row in new_rows:
        combined_quantities[row['Month']] += round(float(row['tCO2e']), 2)

    # Round the result
    data_as_list_tCO2e_month = []
    for month, quantity in combined_quantities.items():
        data_as_list_tCO2e_month.append({'Month': month, 'Quantity': round(quantity, 2)})

    return data_as_list, data_as_list_tCO2e_month

def input_city_state_postalcode() -> rx.grid:
    return rx.grid(
        rx.input(placeholder='City'),
        rx.input(placeholder='State'),
        rx.input(placeholder='Zip Code'),
        rx.input(placeholder='Utility Provider'),
        rx.input(placeholder='Estimated Duration'),
        rx.input(placeholder='Building Sqft'),

        rows = '2',
        flow='column',
        justify='between',
        spacing='2',
        spacing_y='4',
        width='100%',
    )




def page_tabs() -> rx.tabs:
    return rx.tabs.root(
    rx.tabs.list(
        rx.tabs.trigger("Dashboard", value="dashboard"),
        rx.tabs.trigger("Files", value="files"),
        rx.tabs.trigger("Edit", value="edit"),
    ),
    rx.tabs.content(
        # rx.text("item on tab 1"),
        value="dashboard",
    ),
    rx.tabs.content(
        # rx.text("item on tab 2"),
        value="files",
    ),
    rx.tabs.content(
        # rx.text("item on tab 2"),
        value="edit",
    ),
    default_value='dashboard'
)

def metrics() -> rx.grid:
    return rx.grid(
        rx.card('First metric', size='4'),
        rx.card('Second metric'),
        rx.card('Third metric'),
        columns='3',
        rows='1',
        spacing='4',
        width='100%'
    )

def filter_table() -> rx.flex:
    return rx.flex(
        rx.select(
            ["YTD", "1Y", "3Y", "5Y", "10Y", "All"],
            default_value='YTD',
            color='blue',
            variant='soft',

        ),
        justify='end',
    )

def bar_chart(df) -> rx.box:
    return rx.box( 
            rx.recharts.composed_chart(
            rx.recharts.bar(
                data_key='Quantity', bar_size=40, fill="#413ea0"
            ),
            rx.recharts.x_axis(data_key="Month"),
            rx.recharts.y_axis(),
            rx.recharts.cartesian_grid(stroke_dasharray="3 3"),
            rx.recharts.graphing_tooltip(),
            data=df,
        ),
        width='100%',
        height='50vh'
    )

def bar_chart_and_filter(df) -> rx.box:
    return rx.flex(
        filter_table(),
        bar_chart(df),
        direction='column',
        spacing='2',
    )


df = './site_csv_files/TEST3.csv'


def dashboard_tab() -> rx.Component:
    data_as_list_tCO2e_month = convert_to_list_data(df)[1]
    return rx.box(rx.flex(
            rx.spacer(),
            metrics(),
            bar_chart_and_filter(data_as_list_tCO2e_month),
            spacing='5',
            direction='column',
        ),
        width='100%',
        height='100%',
    )