# hwk8 prob2
# mquadr8 661351305
# hwk7 prob3
# mquadr8 661351305

import csv

firstRun = True
firstLine = []
dataList = []
fileName = 'elements.csv'
try:
    with open(fileName, newline='') as csvfile:
        inputFile = csv.reader(csvfile, delimiter=',')
        for line in inputFile:
            if firstRun:
                firstLine = line
                firstRun = False
            else:
                try:
                    dataList.append({
                    firstLine[0]:line[0],
                    firstLine[1]:line[1],
                    firstLine[2]:line[2]})
                    try:
                        int(line[0])
                    except ValueError:
                        print("Error: '",line[2],"' does not give a valid integer")
                        exit()
                except IndexError:
                    print("Error: ' "+fileName+" ' has less than 3 columns")
                    exit()
except FileNotFoundError:
    print("Error: ' "+fileName+" ' not found")
    exit()

outputFileContent = "[ "
for i in range(len(dataList)):
    outputFileContent += str(dataList[i])+"\n"
outputFileContent =outputFileContent.removesuffix("\n")
outputFileContent += " ]"
#print(outputFileContent)

writeFile = open("elements.json", "w")
writeFile.write(outputFileContent)
writeFile.close()