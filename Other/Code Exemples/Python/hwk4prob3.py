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

input1 = input("Enter a county name: ")
print("The alphabetically next county is: "+all_illinois_counties[ (all_illinois_counties.index(input1))+1 ])