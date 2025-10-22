// batteria e pulsar
// by Fra-Tera
// 22-10-2025


$batteria: stack(
  s("bd").struct("[1 1]*<1!8 2!8 3!10 4!8>").lpf(500).gain(1),
  s("<bd bd*4>").gain(2),

  s("hh sd hh:4 bd:2"),
  s("hh*8").gain(.4).fast(.5),
  s("bd sd").bank("RolandTR909"),

  "[c2 a1 bb1 -] -"
  .echo(2, 1/16, 1)
  .slow(2)
  .note()
  .s('sawtooth')
  .gain(10)
  .postgain(2)
  .clip(.4)
  .cutoff(500)
  .sustain(1)
).gain(slider(1,0,1))
