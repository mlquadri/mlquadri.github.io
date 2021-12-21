# MCS 260 Fall 2021 Project 1
# Muhammed Quadri
# I completed this project alone in line with the syllabus and project discription

#ask user for integer input
n = input("Starting value: ")
n=int(n)
numArry = []


while( not(n in numArry) and not(len(numArry) == 100) ):    
    numArry.append(n)
    print(n)
    n = str(n)
    nList = list(n)
    n=int(n)
    
    #find the largest digit
    largest = max(nList)
    
    #find the length
    length = len(nList)
    
    #( n + (largest digit**length) )//2
    n = ( n +( int(largest) ** int(length) ) )//2
    
    
    
if( len(numArry) == 100 ):
    print("maxiter")
else:
    print(n)
    print("looped")