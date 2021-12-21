"""Home Work 14 problem 2"""
# hwk14 prob2
# mquadr8 661351305

import tkinter
import tkinter.ttk

class GUI(tkinter.Tk):
    def __init__(self):
        super().__init__()
        self.counter = 0
        self.countVar = tkinter.StringVar()
        self.countVar.set(str(self.counter))
        self.title("MCS 260 HW14")
        self.button = tkinter.ttk.Button( self, text = "Increment", command = self.raiseCounter )
        self.button.grid(row=0, column=0)
        self.label = tkinter.ttk.Label(self, textvariable = self.countVar)
        self.label.grid(row=0, column=1)
    def raiseCounter(self):
        self.counter += 1
        self.countVar.set(str(self.counter))

def main(): 
    app = GUI()
    app.mainloop()

main()