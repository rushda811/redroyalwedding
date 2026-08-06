import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const TIDE_EVENT = "loom:open";

const OPEN_TIME = 4200;

export function Opening() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleOpen = () => {
    if (open) return;

    setOpen(true);

    // start music
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
          className="
          fixed inset-0 z-[999]
          cursor-pointer
          overflow-hidden
          "
          onClick={handleOpen}
          exit={{
            opacity:0,
            transition:{
              duration:1.2
            }
          }}
        >

          {/* LEFT CURTAIN */}
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2"
            animate={{
              x: open ? "-110%" : "0%",
            }}
            transition={{
              duration: OPEN_TIME / 1000,
              ease:[0.76,0,0.24,1],
            }}
          >
            <CurtainSide side="left"/>
          </motion.div>


          {/* RIGHT CURTAIN */}
          <motion.div
            className="absolute right-0 top-0 h-full w-1/2"
            animate={{
              x: open ? "110%" : "0%",
            }}
            transition={{
              duration: OPEN_TIME / 1000,
              ease:[0.76,0,0.24,1],
            }}
          >
            <CurtainSide side="right"/>
          </motion.div>



          {/* CENTER INVITATION TEXT */}

          <AnimatePresence>

            {!open && (

              <motion.div
                className="
                absolute inset-0
                z-20
                flex
                flex-col
                items-center
                justify-center
                text-center
                text-[#f8e8cf]
                "
                
                initial={{
                  opacity:1,
                  scale:1
                }}

                exit={{
                  opacity:0,
                  scale:1.08,
                  filter:"blur(12px)",
                  transition:{
                    duration:1.5,
                    ease:"easeInOut"
                  }
                }}
              >


                {/* BISMILLAH */}

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
                    delay:.4
                  }}

                  className="
                  mb-10
                  text-sm
                  tracking-[0.55em]
                  text-gold
                  "
                >
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيم
                </motion.p>



                {/* NAMES */}

                <motion.h1

                  initial={{
                    opacity:0,
                    y:40,
                    filter:"blur(10px)"
                  }}

                  animate={{
                    opacity:1,
                    y:0,
                    filter:"blur(0px)"
                  }}

                  transition={{
                    duration:1.6,
                    delay:.7,
                    ease:"easeOut"
                  }}

                  className="
                  font-serif
                  text-5xl
                  md:text-7xl
                  leading-tight
                  "
                >

                  Shaheen OP

                  <br/>

                  <motion.span
                    initial={{
                      opacity:0
                    }}
                    animate={{
                      opacity:1
                    }}
                    transition={{
                      delay:1.4,
                      duration:1
                    }}

                    className="italic text-gold"
                  >
                    &
                  </motion.span>


                  <br/>


                  Alshida


                </motion.h1>



                {/* DATE */}

                <motion.p

                  initial={{
                    opacity:0,
                    letterSpacing:"0.8em"
                  }}

                  animate={{
                    opacity:1,
                    letterSpacing:"0.45em"
                  }}

                  transition={{
                    delay:1.7,
                    duration:1.2
                  }}

                  className="
                  mt-10
                  "
                >
                  08 · 08 · 2026
                </motion.p>



                {/* TOUCH */}

                <motion.p

                  className="
                  mt-16
                  text-sm
                  tracking-[0.5em]
                  text-gold
                  "

                  animate={{
                    opacity:[
                      .3,
                      1,
                      .3
                    ],
                  }}

                  transition={{
                    duration:2.5,
                    repeat:Infinity,
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

className="
relative
h-full
w-full
"

style={{

background:`

linear-gradient(
90deg,
var(--crimson),
var(--crimson),
var(--rose-madder),
var(--crimson),
var(--crimson)
)

`,

boxShadow:

side==="left"

?

"inset -90px 0 140px rgba(0,0,0,.85)"

:

"inset 90px 0 140px rgba(0,0,0,.85)"

}}


>


{/* velvet folds */}

<div

className="
absolute
inset-0
"

style={{

background:`

repeating-linear-gradient(
90deg,
rgba(0,0,0,.6) 0px,
rgba(255,255,255,.12) 25px,
rgba(0,0,0,.45) 55px,
rgba(255,255,255,.08) 85px,
rgba(0,0,0,.55) 120px
)

`,

opacity:.55

}}


/>



{/* golden silk reflection */}

<div

className="
absolute
inset-0
"

style={{

background:
"linear-gradient(90deg,transparent,rgba(230,190,90,.3),transparent)",

filter:"blur(45px)"

}}


/>



{/* dark edges */}

<div

className="
absolute
inset-0
"

style={{

background:
"radial-gradient(circle,transparent 25%,rgba(0,0,0,.75))"

}}

/>


</div>


)

}