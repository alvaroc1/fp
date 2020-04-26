// pure - free monad
def saveData (d: Data): Action[Unit] = 
  Save(d)
  
  