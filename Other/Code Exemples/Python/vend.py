"""Simulate a snack vending machine"""
# MCS 260 Fall 2020 Project 2
# Muhammed Quadri
# Declaration: I, Muhammed Quadri, am the sole author of this code, which
# was developed in accordance with the rules in the course syllabus.


credit = 0.00

#count = 0
#for line in inventoryF.readlines():
#  print(line)
#  option[count] = line.split()
#  count += 1
#print(option)
#inventoryF.close()
#
#maxCredit = 0
#for i in option:
#  if(option[i][0] > maxCredit):
#    maxCredi = option[i][0]

fileName = input("Enter inventory file: ")
#fileName = "sample_inventory.txt"
inventoryF = open(fileName, "r")
option0 = (inventoryF.readline()).split(",")
option1 = (inventoryF.readline()).split(",")
option2 = (inventoryF.readline()).split(",")
option3 = (inventoryF.readline()).split(",")
option4 = (inventoryF.readline()).split(",")
option5 = (inventoryF.readline()).split(",")
inventoryF.close()

def addQuarter():
  global credit
  #quarter - simulates deposit of one quarter ($0.25). If the current credit is less than the most expensive item in the inventory (including any items that may be out of stock), the coin is accepted and credit increases by $0.25. Otherwise, the coin is rejected by printing the line RETURN: quarter to indicate that the quarter just deposited is returned.
  if( (credit+.25) <= 205):
    credit += .25
  else:
    print("RETURN: quarter")

def addDime(): 
  global credit
  #dime - simulates deposit of one dime ($0.10). The logic is the same as the quarter command, except that if the dime is not accepted, the line to be printed is RETURN: dime
  if( (credit+.10) <= 205):
    credit += .10
  else:
    print("RETURN: dime")
    
def addNickel():
  global credit
  #nickel - simulates deposit of one dime ($0.05). The logic is the same as the quarter command, except that if the nickel is not accepted, the line to be printed is RETURN: nickel
  if( (credit+.5) <= 205):
    credit += .5
  else:
    print("RETURN: nickel")

def Inventory():
  #inventory - display the current inventory in the format of 0-based index, followed by name,followed by price, and then a parenthetical statement of the number available, in this format:
    #0 Cheesy dibbles $1.25 (6 available)
    #1 Oat biscuits $1.15 (10 available)
    #2 Sugar rings $0.75 (12 avilable)
    #3 Celery crunchies $1.50 (5 available)
    #4 Astringent persimmon $2.05 (6 available)
    #5 Almond crescents $0.95 (10 available)
  return("0 "+option0[2]+" $"+option0[1]+"("+option0[0]+" available)"+"\n"+"1 "+option1[2]+" $"+option1[1]+"("+option1[0]+" available)"+"\n"+"2 "+option2[2]+" $"+option2[1]+"("+option2[0]+" available)"+"\n"+"3 "+option3[2]+" $"+option3[1]+"("+option3[0]+" available)"+"\n"+"4 "+option4[2]+" $"+option4[1]+"("+option4[0]+" available)"+"\n"+"5 "+option5[2]+" $"+option5[1]+"("+option5[0]+" available)"+"\n")

def restock(snackNum, num):
  global option
  print(snackNum, num)
  #snackNum = 0-based index of a snack
  #num = the number of additional items loaded
  #restock - add to the inventory of one snack. This command never appears on a line by itself, and is always followed by a space and then two integers separated by spaces. The first integer is the 0-based index of a snack, and the second is the number of additional items loaded. The effect of this command is to immediately increase the inventory of that snack. The current credit is not changed. For example, restock 3 18 means that the inventory of snack 3 should be increased by 18.
  if(snackNum == "0"):
    option0[0] = str(int(option0[0]) + int(num))
    #print(option0[0])
  elif(snackNum == "1"):
    option1[0] = str(int(option1[0]) + int(num))
  elif(snackNum == "2"):
    option2[0] = str(int(option2[0]) + int(num))
  elif(snackNum == "3"):
    option3[0] = str(int(option3[0]) + int(num))
  elif(snackNum == "4"):
    option4[0] = str(int(option4[0]) + int(num))
  elif(snackNum == "5"):
    option5[0] = str(int(option5[0]) + int(num))
  #else:
  #  return "Error: no inventory item under that number"

def returnC():
  #return - a request to return all currently-deposited credit. The credit should be returned to the user in the same way that change is returned after a successful purchase (see Section 3.5 for detailed rules).
  return credit


def mainLoop():
  while True:
    print("CREDIT: $"+str(credit))
    userInput = input("> ")
    if(userInput == "exit"):
      #exit the program
      break
    elif(userInput == "quarter"):
      addQuarter()
    elif(userInput == "dime"):
      addDime()
    elif(userInput == "nickel"):
      addNickel()
    elif(userInput == "Inventory"):
      print(Inventory())
    elif(userInput == "return"):
      print(returnC())
    elif("restock" in userInput):
      stockValues = userInput.split(" ")
      restock(stockValues[1], stockValues[2])
      print(option0[0])
    else:
      print("Error: Unrecognised Input")


mainLoop()