// PulseFiled_02 |o||o||o|
// by Fra-Tera
// 15-10-2025

setCps(140/60/4)

$: s("sbd!4")
   .distort("2:4:.3")// sine.range(1,4).seg(10).slow(8)
   .duck("2:3:4").duckattack(.2).duckdepth(.8)  
  ._scope()


$bass: n(irand(20).sub(10).seg(16)).scale("c:minor")
  .s("sawtooth")
  .lpf(200)
  .lpenv(2)
  .lpq(20)
  .orbit(2)
  ._pianoroll()
  
$: s("supersaw")
  .detune(1)
  .rel(1)
  .beat(2,32)//("1, 3, 7, 11, 13",16)
  // .slow(2)
  .orbit(3)
  .fm("2")
  .fmh(2.04)
  .room(1.5)
  .roomsize(6)
  ._scope()

$: s("pulse")
  .orbit(4)
  .seg(16)
  .dec(.1)
  .fm(time)//sine.range(4, 20).slow(20))
  .fmh(time)//sine.range(20, 4).slow(20))
  

