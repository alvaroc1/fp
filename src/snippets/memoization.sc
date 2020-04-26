import scalaz.Memo

val isPrime: Int => Boolean = 
  num => (2 to num - 1).forall(i => num % i != 0)

val memoizedIsPrime = Memo.immutableHashMapMemo(isPrime)