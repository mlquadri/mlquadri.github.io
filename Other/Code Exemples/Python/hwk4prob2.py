all_illinois_counties = ['Adams', 'Alexander', 'Bond', 'Boone', 'Brown',
                         'Bureau', 'Calhoun', 'Carroll', 'Cass', 'Champaign',
                         'Christian', 'Clark', 'Clay', 'Clinton', 'Coles',
                         'Cook', 'Crawford', 'Cumberland', 'De', 'DeKalb',
                         'Douglas', 'DuPage', 'Edgar', 'Edwards', 'Effingham',
                         'Fayette', 'Ford', 'Franklin', 'Fulton', 'Gallatin',
                         'Greene', 'Grundy', 'Hamilton', 'Hancock', 'Hardin',
                         'Henderson', 'Henry', 'Iroquois', 'Jackson', 'Jasper',
                         'Jefferson', 'Jersey', 'Jo', 'Johnson', 'Kane',
                         'Kankakee', 'Kendall', 'Knox', 'LaSalle', 'Lake',
                         'Lawrence', 'Lee', 'Livingston', 'Logan', 'Macon',
                         'Macoupin', 'Madison', 'Marion', 'Marshall', 'Mason',
                         'Massac', 'McDonough', 'McHenry', 'McLean', 'Menard',
                         'Mercer', 'Monroe', 'Montgomery', 'Morgan', 'Moultrie',
                         'Ogle', 'Peoria', 'Perry', 'Piatt', 'Pike', 'Pope',
                         'Pulaski', 'Putnam', 'Randolph', 'Richland', 'Rock',
                         'Saline', 'Sangamon', 'Schuyler', 'Scott', 'Shelby',
                         'St. Clair', 'Stark', 'Stephenson', 'Tazewell', 'Union',
                         'Vermilion', 'Wabash', 'Warren', 'Washington', 'Wayne',
                         'White', 'Whiteside', 'Will', 'Williamson', 'Winnebago',
                         'Woodford']

even_len_k_counties = [ counties for counties in all_illinois_counties if (len(counties) % 2 == 0) and ("k" in counties) ]
for name in even_len_k_counties:
    print(name)