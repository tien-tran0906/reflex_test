
import reflex as rx
from clark_reflex.imports import *
from clark_reflex.main_contents.tab_components.dashboard_tab import dashboard_tab


df = 'site_csv_files/Bainbridge Office.csv'



def sites_page() -> rx.tabs:
    return rx.flex(
            rx.chakra.heading('Sites', size='2xl', color='black'),
            rx.tabs.root(
                rx.tabs.list(
                    rx.tabs.trigger(rx.flex(rx.icon('bar-chart-3', size=18), rx.text('Dashboard'), direction='row', spacing='2'), value="dashboard"),
                    rx.tabs.trigger(rx.flex(rx.icon('file', size=18), rx.text('Files'), direction='row', spacing='2'), value="files"),
                    rx.tabs.trigger(rx.flex(rx.icon('pencil', size=18), rx.text('Edit'), direction='row', spacing='2'), value="edit"),
                ),
                rx.tabs.content(
                    dashboard_tab(),
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
                default_value='dashboard',
                size='1',
            ),
            direction='column',
            spacing='4',
            flex_grow='1',
            width='100%',
            justify='between',
        )
    
        