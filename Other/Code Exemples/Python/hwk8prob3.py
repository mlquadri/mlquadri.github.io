# hwk8 prob3
# mquadr8 661351305

import os
import json
import csv

lectureFiles = []
for file in os.listdir():
    if(file[-3]+file[-2]+file[-1] == ".py"):
        readFile = open(file, "r")
        fileData = readFile.read()
        readFile.close()
        if("Lecture" in fileData):
            lectureFiles.append(file)
print(lectureFiles)