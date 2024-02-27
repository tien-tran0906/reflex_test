from clark_reflex.navbar_items.tab_components.dashboard_tab import convert_to_list_data
import csv

df = 'site_csv_files\TEST3.csv'
data_list_list = []
with open(df, 'r') as f:
    reader = csv.reader(f) 
    next(reader) # Skip header row
    
    for row in reader:
        row[0] = bool(row[0]) 
        data_list_list.append(row)

print(data_list_list)