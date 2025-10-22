// fantasia 1 e 2 con pianoforte
// by Fra-Tera
// 21-10-2025
//


// starting point per la polifonia e il ritminio che poi ho espiantato
_$follepiano: stack( 
  note("<G#4 G4 F4 D#4 D4 C4@3 ->*<1 6>").scale("<Db5:mixolydian>/2").sound("sine")
    .room(.5).cutoff(800)
    .gain(slider(0.574,0,1)),
  
  n("<1 2 3 4 5 <4 5 6 ->>*<3!7 6!7 12!4>").scale('a4 minor').sound("square")
    .lpf(1000).lpenv(1).lpq("<0!12 10!10 15!8 20!2>")
    .legato("<1!4 .8!4 .5!4 .3!4>")
    .jux(chooseCycles(press, rev))
    .postgain(slider(1,0,1))
)

// scale lunga
_$superstrangepiano: 
  note("<G#4 G4 <F4 C3@4> D#4 D3 C4@2 <D#4 - C2@10>@2>*<[1 6] <3 4 2 1>@2 [1 5]>")
    .scale('C1 minor').sound("gm_church_organ:<0 1 2 3 4 5>/16")
    .room(.5)
    .legato("<1.01 .99>/4")
    .postgain(slider(0.698,0,2))
    ._pianoroll()


// reverse scale: 
_$superstrangepiano1:  
  note("<<G#4 F4>@2 G4 <C4 F4> D#4 D3@3 C4@3> * <<1 6> [2 4]>")  
    .scale('C1 minor').sound("gm_church_organ:<0 1 2 3 4 5>/32")
    .rev()
    .pan(sine.slow(4))
    .room(1)
    .postgain(1.5)
    .legato("<1.01 1.02>/4")
    ._pianoroll()
