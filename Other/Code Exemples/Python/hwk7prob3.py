# hwk7 prob3
# mquadr8 661351305

import csv

firstRun = True
firstLine = []
dataList = []
with open('elements.csv', newline='') as csvfile:
    inputFile = csv.reader(csvfile, delimiter=',')
    for line in inputFile:
        if firstRun:
            firstLine = line
            firstRun = False
        else:
            dataList.append({
            firstLine[0]:line[0],
            firstLine[1]:line[1],
            firstLine[2]:line[2]})

outputFileContent = "[ "
for i in range(len(dataList)):
    outputFileContent += str(dataList[i])+"\n"
outputFileContent =outputFileContent.removesuffix("\n")
outputFileContent += " ]"
#print(outputFileContent)

writeFile = open("elements.json", "w")
writeFile.write(outputFileContent)
writeFile.close()