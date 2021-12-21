"""
answers the question: Is d**k ever special when d is a non-special number between 100 and 350 and k is between 2 and 350? If it is true it prints the solutions
"""
# hwk9 prob3
# mquadr8 661351305

import digitprop

for d in range(100, 350):
    for k in range(2, 350):
        if (not(digitprop.has_small_digits(d,2)) and not(digitprop.is_antipalindrome(d))):
            n = d**k
            if( (digitprop.has_small_digits(n,2)) or (digitprop.is_antipalindrome(n)) ):
                print(d,k,n)

#149 2 22201
#303 3 27818127