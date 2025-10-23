// by Fra-Tera
// ontopof: Wave Color - Strudel Live Coding #1 Starting Out as a Beginner
//  
// 23-10-2025

setcpm(120/2)

$: stack(
  
  // sound("bd").beat("0, 2",8),
  sound("bd").beat("0,2,4,7",8).postgain(1.4),
  sound("sbd").beat("1,3,5,6",8).postgain(1.4),
  
  sound("casio*8").degradeBy(".2 | .5"),
  sound("casio:1").struct("<0 0 0 1>*2"),

  note("<[C4 C4] C3 G#3 [C5 G5, G3 C2]>*2").sound("saw")
    // .lpf(chooseWith(tri.slow(32),["700", "1200", "1800", "2500"]))
    .gain(1.5)
)

// $: sound("<numbers:0>/8")



// From Wave Color:

// $: sound("bd").beat("0,2",4)
// $: sound("hh*8").degradeBy(".2 | .1")
// $: sound("cp").struct("0 0 0 <1 1*2>")

// $: note("C3 <C3 C4 > [C5 c4] <C3 C5>").sound("square")
//   .transpose("<1 0 -1 3>".slow(4))
  
//   .lpf("900 | 1200 | 1500")
//   .room(.3)
//   .gain(1)
//   .scope({scale:.3})
  
