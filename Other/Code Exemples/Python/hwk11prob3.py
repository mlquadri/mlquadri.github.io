"""Home Work 11 problem 3"""
# hwk11 prob3
# mquadr8 661351305

class Pair():
    """
    An object that has two values
    """
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __getitem__(self,k):
        if(k==0):
            return self.x
        elif(k==1):
            return self.y
        else:
            raise IndexError("invalid index")
    def __setitem__(self,k,v):
        if(k==0):
           self.x = v
        elif(k==1):
            self.y = v
        else:
            raise IndexError("invalid index")

test = Pair(5, 8)
print(test.x)
print(test.y)
print(test[0])
print(test[1])
test[0] = 1
test[1] = 2
print(test.x)
print(test.y)
print(test[0])
print(test[1])
test[2]

