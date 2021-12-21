# hwk6 prob2
# mquadr8 661351305

import sys

inputFilename = sys.argv[1]
outputFilename = sys.argv[2]
print(sys.argv)


readFile = open(inputFilename, "r")
inputFile = readFile.read()
readFile.close()

original = "NetShareTube"
new = "SynerGrowthTech"
outputFileContent = inputFile.replace(original, new)

writeFile = open(outputFilename, "w")
writeFile.write(outputFileContent)
writeFile.close()