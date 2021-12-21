#  hwk 5 prob 2&3
# mquadr8 661351305

import random

def string_stats(s):
    length = len(s)
    words = len( s.split() )
    exclamation_count = s.count("!")
    result = {"length": length , "words" : words , "exclamation_count" : exclamation_count}
    return result

def random_letter():
    letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    num = random.randrange( len(letters) )
    return letters[num]

#print(string_stats("Did you see the new project description?  It's available now!"))
#print(string_stats("wheeee!!!!!!!!!!!!!"))
#print(string_stats("nothing to see here"))
#print(random_letter())
#print(random_letter())