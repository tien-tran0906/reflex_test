import reflex as rx
from clark_reflex.imports import *
from clark_reflex.navbar_items.tab_components.dashboard_tab import convert_to_list_data


def data_update_notification():
    return rx.text('Your project data is up-to-date')

def filter() -> rx.select:
    return rx.select(['Desc 1', 'Desc 2'],
    placeholder='Filter',
    )

def add_new_data_button() -> rx.dialog:
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

def add_and_filter_buttons() -> rx.flex:
    return rx.flex(
        filter(),
        add_new_data_button(),
        justify='end',
        spacing='3'
    )

def get_data_list(df) -> list:
    data = []
    with open(df, 'r') as f:
        reader = csv.reader(f)
        next(reader)
        for row in reader:
            if row[0] == "True":
                row[0] = True  
            elif row[0] == "False":
                row[0] = False
            data.append(row)  
    return data


class DataEditorSelectOption(rx.State):
    df = './site_csv_files/TEST3.csv'
    clicked_data: str = "" 
    cols = [
        {"title": "Select", "type": "bool", "width": 80},
        {"title": "Description", "type": "str"},
        {"title": "Start Date", "type": "str"},
        {"title": "End Date", "type": "str"},
        {"title": "Quantity", "type": "float"},
        {"title": "Unit", "type": "str"},
        {"title": "tCO2e", "type": "float"},
        {"title": "Month", "type": "str"},
        {"title": "Material Type", "type": "str"},
    ]

    data=get_data_list(df)

    def click_cell(self, pos):
        col, row = pos
        
        if col == 0:
            # Toggle boolean value in column 0
            df = pd.read_csv(self.df)
            value = not df.iloc[row, col]
            df.iloc[row, col] = value
            df.to_csv(self.df, index=False)
            
            self.curr_value = str(value)
            print("Toggled:", value)

        

def data_table() -> rx.data_editor:
    return rx.data_editor(
        columns=DataEditorSelectOption.cols,
        data=DataEditorSelectOption.data,
        on_cell_clicked=DataEditorSelectOption.click_cell,
    )


def files_tab():
    return rx.vstack(
        rx.flex(
            rx.spacer(),
            data_update_notification(),
            add_and_filter_buttons(),
            rx.text(DataEditorSelectOption.clicked_data),
            data_table(),
            spacing='5',
            direction='column',
        ),
        height="100%",
        width='100%',
        align='center',
    )