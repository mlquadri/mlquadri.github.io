"""Detect matching of parentheses and brackets in an expression"""
# hwk7 prob2
# mquadr8 661351305

s = input("Expression: ")

# We'll use a stack to keep track of all the "("/"[" that haven't been matched with "]"")" yet.  Every new "(" we see gets pushed, and every ")" we see closes whatever is at the top of the stack.
currentlyOpenPlace = []
currentlyOpenType = []

# We want both the characters of s and their positions so we use enumerate()
for i,c in enumerate(s):
    # c is character from s
    # i is the position (0-based index) of that character in s
    if( (c=="(") or (c=="[")):
        # New left parentheses/bracket opened; push it
        currentlyOpenPlace.append(i)
        currentlyOpenType.append(c)
    elif( (c==")") or  (c=="]") ):
        # Right parentheses/bracket closes whatever left parentheses/bracket is at the top of the stack.  But we need to make sure the  stack is nonempty before trying to pop.
        try:
            currentlyOpenPlace.pop()
            lastType = currentlyOpenType.pop()
            if(not( (lastType=="(")and(c==")") or (lastType=="[")and(c=="]") )):
                print("Error:")
                print(s)
                print(" "*i + "^ there is a mixup in your prenthases and brackets")
                exit()
        except IndexError:
            # Error because there was no "("/"[" on the stack to match this ")"/"]"
            print("Error:")
            print(s)
            print(" "*i + "^ does not match any preceding ( or ]")
            exit()

# are ?
# Cheching if there any parentheses open, since it means that there is a ( with no match
if len(currentlyOpenPlace) > 0:
    print("Error:")
    print(s)
    print(" "*currentlyOpenPlace.pop() + "^ is not matched by any following ) or ]")
else:
    print("Parentheses matched successfully.")

# Examples of what we expect the error messages to look like:

# (1 + ((2+3) - 5
#      ^  is not matched by any following )

# ( 1 + (3-4))) + 5
#             ^ does not match any preceding (