// total
def parseInt (num: String): Either[String,Int] = 
  Try(num.toInt).toEither.left.map(_ => s"Not an int: $num")

// > parseInt("hello")
// Left("Not an int: hello")