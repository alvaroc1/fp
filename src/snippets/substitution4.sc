// non-total
def calculate (n: Int): Int = 
  if (n == 10) sys.error("Don't like 10") else n

val total = Future(calculate(10) + calculate(10))

// ...
val result = calculate(10)
val total = Future(result + result)
