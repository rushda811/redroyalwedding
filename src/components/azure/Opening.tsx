import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import flowerDesign from "@/assets/c.jpg";



export const TIDE_EVENT = "loom:open";

const OPEN_TIME = 4800;



export function Opening(){

const [open,setOpen] = useState(false);
const [visible,setVisible] = useState(true);



function handleOpen(){

if(open) return;


setOpen(true);


window.dispatchEvent(
new Event("loom:music")
);



setTimeout(()=>{

setVisible(false);
document.body.style.overflow="";

},OPEN_TIME - 250);


}



useEffect(()=>{

document.body.style.overflow="hidden";


return()=>{

document.body.style.overflow="";

}


},[]);




return(

<AnimatePresence>


{

visible &&

<motion.div


className="
fixed
inset-0
z-[9999]
overflow-hidden
cursor-pointer
bg-transparent
"


onClick={handleOpen}



exit={{

opacity:0,

transition:{
duration:.4
}

}}

>




{/* ======================
        LEFT CURTAIN
====================== */}



<motion.div


className="
absolute
left-0
top-0
h-full
w-1/2
z-20
"


style={{

perspective:"1400px"

}}



animate={{


x:open ? "-110%" : "0%",


rotateY:open ? -12 : 0


}}



transition={{

duration:OPEN_TIME/1000,

ease:[0.76,0,0.24,1]

}}


>


<LuxuryCurtain/>


</motion.div>







{/* ======================
        RIGHT CURTAIN
====================== */}



<motion.div


className="
absolute
right-0
top-0
h-full
w-1/2
z-20
"



style={{

perspective:"1400px"

}}



animate={{


x:open ? "110%" : "0%",


rotateY:open ? 12 : 0


}}



transition={{

duration:OPEN_TIME/1000,

ease:[0.76,0,0.24,1]

}}


>


<LuxuryCurtain/>


</motion.div>









{/* ======================
          CENTER TEXT
====================== */}




<AnimatePresence>


{

!open &&


<motion.div


className="
absolute
inset-0
z-40
flex
flex-col
items-center
justify-center
px-6
text-center
text-[#f8e8cf]
"



exit={{

opacity:0,

scale:1.08,

filter:"blur(14px)",

transition:{

duration:1

}

}}

>



<motion.p


initial={{

opacity:0,
y:25

}}


animate={{

opacity:1,
y:0

}}


transition={{

duration:1.2,
delay:.5

}}



className="
tracking-[0.6em]
text-sm
text-[#e7c36a]
"


>

بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيم

</motion.p>








<motion.h1


initial={{

opacity:0,
scale:.9,
filter:"blur(15px)"

}}



animate={{

opacity:1,
scale:1,
filter:"blur(0)"

}}



transition={{

duration:1.8,
delay:1

}}



className="
mt-10
font-serif
text-5xl
md:text-8xl
leading-tight
"



>


Shaheen OP


<br/>


<span className="
text-[#e7c36a]
italic
">

&

</span>


<br/>


Alshida



</motion.h1>









<motion.p


initial={{

opacity:0

}}



animate={{

opacity:1

}}


transition={{

delay:2.4

}}



className="
mt-10
tracking-[0.45em]
text-sm
"


>

08 · 08 · 2026

</motion.p>








<motion.p


animate={{

opacity:[

0.3,
1,
0.3

]

}}



transition={{

duration:2.5,
repeat:Infinity

}}



className="
mt-16
tracking-[0.7em]
text-xs
text-[#e7c36a]
"


>

✦ TOUCH TO OPEN ✦


</motion.p>



</motion.div>


}


</AnimatePresence>





</motion.div>


}


</AnimatePresence>


)

}









function LuxuryCurtain(){


return(


<div


className="
relative
h-full
w-full
overflow-hidden
"



style={{


backgroundImage:`

linear-gradient(

90deg,

rgba(130,0,25,.95),

rgba(210,25,65,.45),

rgba(130,0,25,.95)

),

url(${flowerDesign})

`,



backgroundSize:"cover",

backgroundPosition:"center",



boxShadow:

"inset 0 0 180px rgba(60,0,15,.7)"


}}



>



{/* Velvet folds */}


<div


className="
absolute
inset-0
"


style={{


background:

`
repeating-linear-gradient(

90deg,

rgba(80,0,15,.55),

rgba(255,255,255,.12) 35px,

rgba(90,0,20,.55) 80px,

rgba(255,255,255,.08) 120px

)

`,


opacity:.65


}}



/>






{/* Golden reflection */}


<div


className="
absolute
inset-0
"


style={{


background:

"linear-gradient(90deg,transparent,rgba(240,200,100,.35),transparent)",


filter:"blur(45px)"


}}



/>






{/* Luxury shadow edges */}


<div


className="
absolute
inset-0
"



style={{


background:

"radial-gradient(circle,transparent 35%,rgba(80,0,20,.7))"



}}



/>



</div>



)

}