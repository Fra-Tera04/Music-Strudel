// complex Pulse field -v3
// Fra-Tera
// 22-10-2025

// tempo
setcps(0.95)

// Kick (layer)
$: stack(
  s("bd*4").bank("RolandTR909").gain(1).lpf(200).lpq(1),
  n("0*4").s("sine").gain(0.6).lpf(90).lpenv(1).shape(0.1)
).mask("<1 0 0 0>/4")

// Hi-hats
$: stack(
  s("hh*16").bank("RolandTR909").gain(0.28).mask("<1 0 1 0 1 0 1 0>/8"),
  s("oh").bank("RolandTR909").gain(0.18).mask("<0 0 1 0 0 0 1 0>/8")
)

// Snare / clap
$: s("[sd cp]").bank("RolandTR909")
  .gain(0.7)
  .room(0.35)
  .mask("<0 0 1 0 0 0 1 0>/4")

// Bass (filtrato & pulsing)
$: n("<0 0 3 5>").scale("A:minor:pentatonic")
  .s("gm_synth_bass_2")
  .lpf(sine.range(80, 400).slow(8))
  .lpq(2)
  .lpenv(2)
  .gain(0.9)
  .struct("<1 0 1 1>/4")

// Synth stab (hook)
$: note("{c3 d#3 c3 f3}%4")
  .scale("C:minor")
  .s("sawtooth")
  .phaser(4).room(0.6).shape(0.25)
  .clip(0.7).gain(0.75)

// Vocal-ish chops (synth sim)
$: n("<7 7 5 4>").scale("A:minor:pentatonic").s("square")
  .gain(0.7)
  .dist(.4)
  .delay(0.15)
  .mask("<1 0 1 0>/4")

// occasional small fill 
$: s("bd*8").bank("linn").mask("<0 0 0 1>/16").gain(0.6)


