val double = (i: Int) => i * 2
val triple = (i: Int) => i * 3.0
val stringify = (i: Double) => i.toString

List(1, 2, 3).map(double).map(triple).map(stringify)

val process = double andThen triple andThen stringify
List(1, 2, 3).map(process)