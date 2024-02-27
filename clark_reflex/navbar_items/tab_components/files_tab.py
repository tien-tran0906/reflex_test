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

def get_data_list() -> list:
    df = 'site_csv_files\TEST3.csv'
    data = []
    with open(df, 'r') as f:
        reader = csv.reader(f) 
        next(reader) # Skip header row
        
        for row in reader:
            row[0] = bool(row[0]) 
            data.append(row)
    return data

class DataEditorSelectOption(rx.State):
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

    data=get_data_list()

    def click_cell(self, pos):
        col, row = pos
        yield self.get_clicked_data(pos)
        

    def get_clicked_data(self, pos) -> str:
        self.clicked_data = pos

# get the pandas dataframe
# get the coordinates if not empty string
# if clicked -> toogle the boolean value
def handle_select(df):
    data_to_edit = pd.read_csv(df)  
    

def data_table() -> rx.data_editor:
    return rx.data_editor(
        columns=DataEditorSelectOption.cols,
        data=DataEditorSelectOption.data,
        on_cell_clicked=DataEditorSelectOption.click_cell,
        # rows=25,
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