// inpure
def saveData (d: Data): Unit = {
  logger.info("Inserting user")
  db.insert(d)
}