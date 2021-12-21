"""Home Work 12 problem 2"""
# hwk12 prob2
# mquadr8 661351305

import sys

try:
    inputFilename = sys.argv[1]
    
    readFile = open(inputFilename, "r")
    inputFile = readFile.read()
    readFile.close()
except:
    print("File not working")

for word in inputFile.split():
    if("74" in word):
        print( word.strip() )