// total
def parseInt (num: String): Try[Int] = 
  Try(num.toInt)

// > parseInt("hello")
// Failure(NumberFormatException: For input string: "hello")