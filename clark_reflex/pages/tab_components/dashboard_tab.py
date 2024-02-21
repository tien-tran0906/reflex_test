"""Dashboard tabs"""
import reflex as rx
from clark_reflex.imports import *


def convert_to_list_data(df) -> list:
    # convert csv to a list
    with open(df) as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    # convert this to keep only tCO2e and Month
    new_rows = []
    for row in rows:
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
    list_data = []
    for month, quantity in combined_quantities.items():
        list_data.append({'Month': month, 'Quantity': round(quantity, 2)})

    return list_data

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

def delete_site_button() -> rx.dialog:
    return rx.flex(
            rx.dialog.root(
            rx.dialog.trigger(rx.button("Delete A Site", size="2")),
            rx.dialog.content(
                rx.flex(
                    rx.dialog.title("Add New Site"),
                    rx.flex(
                        rx.text(
                            "Site Name",
                            as_="div",
                            size="2",
                            margin_bottom="4px",
                            weight="bold",
                        ),
                        rx.input(
                            placeholder="Enter site name...",
                        ),
                        rx.text(
                            "Category",
                            as_="div",
                            size="2",
                            margin_bottom="4px",
                            weight="bold",
                        ),
                        rx.select(
                            ['Clark Offices', 'Commercial Renovation and Remodeling', 'Infrastructure Construction', 'Institutional Construction', 'Multi-Family Residential Renovation and Remodeling', 'New Commercial', 'New Multi-Family Residential', 'New Single-Family Residential', 'Single-Family Residential Renovation and Remodeling'],
                            placeholder="Select category...",
                            label="Category",
                        ),
                        rx.text(
                            "Address",
                            as_="div",
                            size="2",
                            margin_bottom="4px",
                            weight="bold",
                        ),
                        rx.input(placeholder='123 Main Street'),
                        direction="column",
                        spacing="3",
                    ),
                    rx.text(
                        "Description",
                        as_="div",
                        size="2",
                        margin_bottom="4px",
                        weight="bold",
                    ),
                    rx.text_area(
                        placeholder="The more detail the better...",
                    ),
                    rx.flex(
                        rx.dialog.close(
                            rx.button(
                                "Cancel",
                                color_scheme="gray",
                                variant="soft",
                            ),
                        ),
                        rx.dialog.close(
                            rx.button("Save"),
                        ),
                        spacing="3",
                        margin_top="16px",
                        justify="end",
                    ),
                    direction='column',
                    spacing='3'
                ),    
            ),
        ),
        spacing='3',
        align='end',
        justify='end',
    )

def add_new_site_button() -> rx.dialog:
    return rx.flex(
            rx.dialog.root(
            rx.dialog.trigger(rx.button("Add New Site", size="2")),
            rx.dialog.content(
                rx.flex(
                    rx.dialog.title("Add New Site"),
                    rx.flex(
                        rx.text(
                            "Site Name",
                            as_="div",
                            size="2",
                            margin_bottom="4px",
                            weight="bold",
                        ),
                        rx.input(
                            placeholder="Enter site name...",
                        ),
                        rx.text(
                            "Category",
                            as_="div",
                            size="2",
                            margin_bottom="4px",
                            weight="bold",
                        ),
                        rx.select(
                            ['Clark Offices', 'Commercial Renovation and Remodeling', 'Infrastructure Construction', 'Institutional Construction', 'Multi-Family Residential Renovation and Remodeling', 'New Commercial', 'New Multi-Family Residential', 'New Single-Family Residential', 'Single-Family Residential Renovation and Remodeling'],
                            placeholder="Select category...",
                            label="Category",
                        ),
                        rx.text(
                            "Address",
                            as_="div",
                            size="2",
                            margin_bottom="4px",
                            weight="bold",
                        ),
                        rx.input(placeholder='123 Main Street'),
                        direction="column",
                        spacing="3",
                    ),
                    input_city_state_postalcode(),
                    rx.text(
                        "Description",
                        as_="div",
                        size="2",
                        margin_bottom="4px",
                        weight="bold",
                    ),
                    rx.text_area(
                        placeholder="The more detail the better...",
                    ),
                    rx.flex(
                        rx.dialog.close(
                            rx.button(
                                "Cancel",
                                color_scheme="gray",
                                variant="soft",
                            ),
                        ),
                        rx.dialog.close(
                            rx.button("Save"),
                        ),
                        spacing="3",
                        margin_top="16px",
                        justify="end",
                    ),
                    direction='column',
                    spacing='3'
                ),    
            ),
        ),
        spacing='3',
        align='end',
        justify='end',
    )

def add_and_delete_site_buttons() -> rx.flex:
    return rx.flex(
        add_new_site_button(),
        delete_site_button(),
        justify='end',
        spacing='3'
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


df = 'site_csv_files/Bainbridge Office.csv'


def dashboard_tab() -> rx.Component:
    return rx.flex(
            rx.spacer(),
            metrics(),
            bar_chart_and_filter(convert_to_list_data(df)),
            spacing='5',
            direction='column',
        )