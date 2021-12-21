# hwk6 prob2
# mquadr8 661351305

import random =

d1 = [None]*20
d2 = [None]*20
s = [None]*20
sPact = [0]*20
print("D1 D2 S?    SPct")
for i in range(0,20):
    d1[i] = random.randrange(6)
    d2[i] = random.randrange(6)
    if( (d1[i]+d2[i]) == 7 ):
        s[i] = "Y"
        if(i==0):
            sPact[i] = 1.00
        else:
            sPact[i] = (sPact[i-1]+1)/i
    else:
        s[i] = "N"
        if(i==0):
            sPact[i] = 0.00
        else:
            sPact[i] = (sPact[i-1])/i
    print(" "+str(d1[i])+"  "+str(d2[i])+"  "+s[i]+"  "+"{:.2f}".format(sPact[i]*100))