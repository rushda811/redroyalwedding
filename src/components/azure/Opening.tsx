import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import flowerDesign from "@/assets/c.jpg";


export const TIDE_EVENT = "loom:open";

const OPEN_TIME = 4800;


export function Opening(){

const [open,setOpen]=useState(false);
const [visible,setVisible]=useState(true);



function handleOpen(){

if(open)return;

setOpen(true);

window.dispatchEvent(new Event("loom:music"));


setTimeout(()=>{

setVisible(false);
document.body.style.overflow="";

},OPEN_TIME);


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
z-[999]
overflow-hidden
cursor-pointer
bg-[#4a0012]
"

onClick={handleOpen}


exit={{

opacity:0,

transition:{
duration:1.5
}

}}

>



{/* LEFT CURTAIN */}


<motion.div

className="
absolute
left-0
top-0
h-full
w-1/2
origin-left
"

style={{
perspective:"1200px"
}}

animate={{

scaleX:open?0:1,

rotateY:open?-18:0

}}

transition={{

duration:OPEN_TIME/1000,

ease:[0.76,0,0.24,1]

}}

>


<LuxuryCurtain/>

</motion.div>





{/* RIGHT CURTAIN */}


<motion.div

className="
absolute
right-0
top-0
h-full
w-1/2
origin-right
"

style={{
perspective:"1200px"
}}

animate={{

scaleX:open?0:1,

rotateY:open?18:0

}}

transition={{

duration:OPEN_TIME/1000,

ease:[0.76,0,0.24,1]

}}

>


<LuxuryCurtain/>

</motion.div>














{/* CENTER TEXT */}



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
text-center
px-6
text-[#f8e8cf]
"


exit={{

opacity:0,

filter:"blur(15px)",

scale:1.1,

transition:{
duration:1.3
}

}}

>



<motion.p

initial={{
opacity:0,
y:30
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
text-[#d8b36a]
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
mt-12
font-serif
text-5xl
md:text-8xl
leading-tight
"

>


Shaheen OP


<br/>


<span className="text-[#d8b36a] italic">

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
delay:2.5
}}

className="
mt-12
tracking-[0.45em]
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
text-xs
tracking-[0.7em]
text-[#d8b36a]
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
rgba(90,0,20,.9),
rgba(190,20,55,.45),
rgba(90,0,20,.9)
),

url(${flowerDesign})

`,


backgroundSize:"cover",

backgroundPosition:"center",


boxShadow:
"inset 0 0 120px rgba(40,0,10,.8)"


}}

>





{/* Velvet folds */}


<div

className="
absolute
inset-0
"

style={{


background:`

repeating-linear-gradient(

90deg,

rgba(40,0,10,.6) 0px,

rgba(255,255,255,.15) 40px,

rgba(80,0,20,.55) 90px

)

`


}}

/>







{/* Gold fabric glow */}


<div

className="
absolute
inset-0
"

style={{

background:

"linear-gradient(90deg,transparent,rgba(230,190,90,.3),transparent)"

}}

 />






{/* Dark luxury edge */}


<div

className="
absolute
inset-0
"

style={{

background:

"radial-gradient(circle,transparent 35%,rgba(60,0,15,.75))"

}}

/>



</div>


)


}
