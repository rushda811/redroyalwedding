import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const TIDE_EVENT = "loom:open";
const OPEN_TIME = 3200;

export function Opening() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleOpen = () => {
    if (open) return;

    setOpen(true);

    // Start music
    window.dispatchEvent(new Event("loom:music"));

    setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, OPEN_TIME);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] cursor-pointer overflow-hidden"
          onClick={handleOpen}
          exit={{
            opacity: 0,
            transition: { duration: 1 },
          }}
        >

          {/* LEFT CURTAIN */}
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2"
            animate={{
              x: open ? "-105%" : "0%",
            }}
            transition={{
              duration: OPEN_TIME / 1000,
              ease: [0.65, 0, 0.35, 1],
            }}
          >
            <CurtainSide side="left" />
          </motion.div>


          {/* RIGHT CURTAIN */}
          <motion.div
            className="absolute right-0 top-0 h-full w-1/2"
            animate={{
              x: open ? "105%" : "0%",
            }}
            transition={{
              duration: OPEN_TIME / 1000,
              ease: [0.65, 0, 0.35, 1],
            }}
          >
            <CurtainSide side="right" />
          </motion.div>


          {/* CENTER TEXT */}
          <AnimatePresence>
            {!open && (
              <motion.div
                className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-[#f8e8cf]"
                exit={{
                  opacity: 0,
                  scale: 1.1,
                  transition:{duration:1}
                }}
              >

                <motion.p
                  initial={{opacity:0,y:20}}
                  animate={{opacity:1,y:0}}
                  className="mb-8 text-sm tracking-[0.5em]"
                >
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيم
                </motion.p>


                <motion.h1
                  initial={{opacity:0,y:30}}
                  animate={{opacity:1,y:0}}
                  transition={{delay:.3}}
                  className="font-serif text-5xl md:text-7xl"
                >
                  Shaheen OP
                  <br/>
                  <span className="italic">&</span>
                  <br/>
                  Alshida
                </motion.h1>


                <p className="mt-8 tracking-[0.45em]">
                  08 · 08 · 2026
                </p>


                <motion.p
                  className="mt-16 text-sm tracking-[0.5em]"
                  animate={{
                    opacity:[0.3,1,0.3]
                  }}
                  transition={{
                    duration:2,
                    repeat:Infinity
                  }}
                >
                  ✦ TOUCH TO OPEN ✦
                </motion.p>


              </motion.div>
            )}
          </AnimatePresence>


        </motion.div>
      )}
    </AnimatePresence>
  );
}



function CurtainSide({
  side,
}:{
  side:"left"|"right";
}){

return (
<div
className="relative h-full w-full"
style={{

background:`
linear-gradient(
90deg,
var(--crimson-deep) 0%,
var(--crimson) 20%,
var(--rose-madder) 45%,
var(--crimson) 65%,
var(--crimson-deep) 100%
)
`,

boxShadow:
side==="left"
?
"inset -80px 0 120px rgba(0,0,0,.8)"
:
"inset 80px 0 120px rgba(0,0,0,.8)"

}}
>


{/* Velvet folds */}

<div
className="absolute inset-0"
style={{

background:`
repeating-linear-gradient(
90deg,
rgba(0,0,0,.55) 0px,
rgba(255,255,255,.08) 25px,
rgba(0,0,0,.4) 55px,
rgba(255,255,255,.12) 80px,
rgba(0,0,0,.5) 110px
)
`,

opacity:.55

}}
/>


{/* Fabric shine */}

<div
className="absolute inset-0"
style={{

background:
"linear-gradient(90deg,transparent,rgba(230,190,90,.22),transparent)"

filter:"blur(35px)"

}}
/>


{/* Velvet darkness */}

<div
className="absolute inset-0"
style={{
background:
"radial-gradient(circle,transparent 30%,rgba(0,0,0,.65) 100%)"
}}
/>


</div>
)

}