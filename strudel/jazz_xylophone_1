
const a = slider(0,0,12)

stack(

  note("c4 <d4 [f4 f4] eb4 [d4 d4]>".add(a))
   .sound("gm_xylophone")
   .fast("< 1 2 2 4 4 4 4>/4")
   .gain(saw.range(0,3).segment(32)/32)
   .room(saw.range(.1,2.1).segment(32)/32)
   .markcss('text-decoration:underline')
   .spiral({thickness: 20},{size: 90},{ steady: .98 }),

  s("cp hh sd hh").mask("<0 1>/4")
   .markcss('text-decoration:underline')
   ._scope(),
  
  s("jazz").struct("<[1 1] 1 [1 1] 1>*4").mask("<0 1>/8")
   .markcss('text-decoration:underline')
   ._scope(),
  
  note("e a")
   .vib("<0 0 0 0 .5 1 2 4 8!8>:12")
   .mask("<0 1>/16")
   .markcss('text-decoration:underline')
   ._scope()  
)
