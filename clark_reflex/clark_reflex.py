""" Entry point for everything """
import reflex as rx
from clark_reflex.imports import *
from clark_reflex.navbar_items.sites import sites_page

class RadioState(rx.State):
    selected = ""
  
    def handle_selection(self, value):
        self.selected = value
    
def on_change(value):
  RadioState.handle_selection(value)
  

def extract_csv_file_names(path) -> list:
    csv_file_name_list = ['All Sites']

    for file in os.listdir(path):
        if file.endswith('.csv'):
            name = os.path.splitext(file)[0]
            csv_file_name_list.append(name)
    csv_file_name_list.sort()
    return csv_file_name_list


def content():
    return rx.box(
        rx.heading("Welcome My App"),
        rx.text("This is the main content of the page."),
    )

def navbar() -> rx.Component:
    return rx.flex(
        rx.hstack(
            rx.flex(
                rx.flex(
                    rx.link('Overview', href='/', color_scheme='gray', weight='medium', high_contrast=True, underline='hover'),
                    rx.link('Sites', href='/sites', color_scheme='gray', weight='medium', high_contrast=True, underline='hover'),
                    rx.link('Fleets', href='/fleets', color_scheme='gray', weight='medium', high_contrast=True, underline='hover'),
                    rx.link('Feedback', href='/feedback', color_scheme='gray', weight='medium', high_contrast=True, underline='hover'),
                    spacing='9',
                    justify='center',
                    align='center',
                ),
                
                rx.button('Sign Out'),
                spacing='9',
                justify='center',
            ),
            justify='center', 
            align='center',
            position="fixed",
            top="0px",
            background_color="#ffffff",
            padding="1em",
            height="4em",
            width="100%",
            border_width='1px',
            z_index = '5',
        )
    )

# def navbar():
#     return rx.hstack(
#         rx.hstack(
#             rx.link('Overview', href='/', color_scheme='gray', weight='medium', high_contrast=True, underline='hover'),
#             rx.link('Sites', href='/sites', color_scheme='gray', weight='medium', high_contrast=True, underline='hover'),
#             rx.link('Fleets', href='/fleets', color_scheme='gray', weight='medium', high_contrast=True, underline='hover'),
#             rx.link('Feedback', href='/feedback', color_scheme='gray', weight='medium', high_contrast=True, underline='hover'),
#             spacing='7',
#         ),
#         rx.spacer(),
#         rx.button('Sign Out'),
#         position="fixed",
#         top="0px",
#         background_color="#ffffff",
#         padding="1em",
#         height="4em",
#         width="100%",
#         border = "2px solid #F4F3F6",
#     )


def sidebar(category: str,list_files: list) -> rx.Component:
    return rx.flex(
        rx.vstack(
            rx.heading(f"{category} Options", margin_bottom="0.5em"),
            rx.divider(),
            rx.scroll_area(rx.flex(rx.radio(list_files, direction='column'), scrollbars='vertical', type='auto', style={'height':'100% !important'})),
            height="100vh",
            left="0px",
            top="0px",
            padding_x="2em",
            padding_y="1em",
            background_color="#ffffff",
            align_items="left",
            width="250px",
            border = "2px solid #F4F3F6"
        ),
        justify='start'
    )

def overview():
    return rx.flex(
        navbar(),
        rx.container(
            content(),
            padding_top="6em",
            max_width="60em",
        ),
    )

def sites():

    return rx.flex(
            navbar(),
            rx.flex(
                sidebar('Site', extract_csv_file_names('site_csv_files')),
                rx.vstack(sites_page(), width='100%', padding_x = '3em', padding_y= '1em'),
                direction='row',
                justify='between',
                width = '100%',
                spacing='5',
            ),
            spacing='9',
            direction='column',

        )
    

def fleets():
    return rx.flex(
        navbar(),
        rx.container(
            rx.text('fleet page'),
            padding_top="6em",
            max_width="60em",
        ),
    )

def feedback():
    return rx.flex(
        navbar(),
        rx.container(
            rx.text('feedback page'),
            padding_top="6em",
            max_width="60em",
        ),
    )


app = rx.App()
app.add_page(overview, route='/')
app.add_page(sites, route='/sites')
app.add_page(fleets, route='/fleets')
app.add_page(feedback, route='/feedback')