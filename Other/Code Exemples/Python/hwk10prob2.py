# hwk10 prob2
# mquadr8 661351305

class Element:
    """ 
    Creates a object that contains a int(atomic number), str(elemnt name), and str(elment symbol)
    that when printed give the name and symbol and when compared check atomic numbers
    """
    def __init__(self, Z, name, symbol):
        self.Z = Z
        self.name = name
        self.symbol = symbol
    def __str__(self):
        return str(self.name)+" (#"+str(self.Z)+")"
    def __repr__(self):
        return self.__str__()
    def __eq__(self, other):
        if( type(self) == type(other) ):
            return self.Z == int(other.Z)
        else:
            return False

a = Element(Z=47,name="Silver",symbol="Ag")
b = Element(Z=47,name="Silber",symbol="Ag") # German name
c = Element(19,"Potassium","K") # pass arguments positionally instead of using keywords
