"""Home Work 12 problem 3"""
# hwk12 prob3
# mquadr8 661351305

try:
    #test if dice.py is in the same dir
    import dice
    
    #test if roll_dice(side) works
    try:
        if (dice.roll_die(12) in [1,2,3,4,5,6,7,8,9,10,11,12]):
            print("roll_die(sides=6) is working")
        else:
            print("roll_die(sides=6) is not working")
    except:
        print("roll_die(sides=6) not working and causing an error")
        
    #test if roll_dice(number, side) works
    try:
        diceList = dice.roll_dice(10, 6)
        trueList = []
        for dice in diceList:
            if dice in [1,2,3,4,5,6]:
                trueList.append(True)
            else:
                trueList.append(False)
        if(all(trueList)):
            print("roll_die(number, sides=6) is working")
        else:
            print("roll_die(number,sides=6) is not working")
    except:
        print("roll_die(number,sides=6) is not working and causing an error")
    
    #test if flip_coin() works
    try:
        coin = dice.flip_coin()
        if( (coin == "heads") or (coin == "tails") ):
            print("flip_coin() is working")
        else:
            print("flip_coin() is not working")
    except:
        print("flip_coin() is not working and causing an error")
except:
    print("Did not find test_dice.py")
