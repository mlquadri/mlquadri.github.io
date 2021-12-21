"""Home Work 11 problem 2"""
# hwk11 prob2
# mquadr8 661351305

def k(n):
    """A recersive class that returns k(n)"""
    if( (n==0) or (n==1) or (n==2) ):
        return n
    elif(k(n-1)%n == 0):
        return k(n-1)+n-1
    else:
        return k(n-1) + k(n-3)

for i in range(26):
    print(i, k(i))