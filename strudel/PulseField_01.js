// PulseField_01 
// By Fra-Tera
// 20-10-2025

setcpm(120/2)

$boomboom: s("bd").beat("0,2",4).gain(4)._scope({scale: .3})
$claphit: stack(
  s("hh*8")
    .room(1)
    .degradeBy(".2 | .1"),
  
  s("cp").struct("0 0 0 1")
)._scope({scale: .8})

$dunote: note("c3 <c3 c4> [c5 c4] <c3 c5>").s("square")
  .transpose("<0 -1 0 1  2 3>")
  .room(.3)
  .lpf("900 | 1200 | 1500")
  ._scope({scale: .5})
