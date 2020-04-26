// total
def parseInt (num: String): Option[Int] = 
  Try(num.toInt).toOption

// > parseInt("hello")
// None