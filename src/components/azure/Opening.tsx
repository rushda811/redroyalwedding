import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";


export const TIDE_EVENT = "loom:open";

const OPEN_TIME = 2600;

export function Opening() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open) return;

    setOpen(true);
    window.dispatchEvent(new Event("loom:open"));

    setTimeout(() => {
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
      {!open && (
        <motion.div
          className="fixed inset-0 z-[999] flex cursor-pointer items-center justify-center overflow-hidden"
          onClick={handleOpen}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Velvet background */}
          <div className="absolute inset-0 bg-[#3b0712]" />

          {/* Golden light behind curtains */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[80vh] w-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
            animate={{
              opacity: [0.25, 0.55, 0.25],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            style={{
              background:
                "radial-gradient(circle, rgba(255,210,120,.45), transparent 70%)",
            }}
          />


          {/* LEFT CURTAIN */}
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2"
            animate={{ x: "-105%" }}
            transition={{
              duration: 2.6,
              ease: [0.77, 0, 0.18, 1],
            }}
          >
            <CurtainSide side="left" />
          </motion.div>


          {/* RIGHT CURTAIN */}
          <motion.div
            className="absolute right-0 top-0 h-full w-1/2"
            animate={{ x: "105%" }}
            transition={{
              duration: 2.6,
              ease: [0.77, 0, 0.18, 1],
            }}
          >
            <CurtainSide side="right" />
          </motion.div>


          {/* Text */}
          <motion.div
            className="relative z-10 text-center text-[#f8ead0]"
            exit={{
              opacity: 0,
              scale: 1.15,
            }}
            transition={{ duration: 1 }}
          >
            <p className="mb-8 text-sm tracking-[0.5em]">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيم
            </p>

            <h1 className="font-serif text-5xl md:text-7xl">
              Shaheen OP
              <br />
              <span className="italic">&</span>
              <br />
              Alshida
            </h1>

            <p className="mt-8 tracking-[0.4em]">
              08 · 08 · 2026
            </p>

            <motion.p
              className="mt-14 text-sm tracking-[0.45em]"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              ✦ TOUCH TO OPEN ✦
            </motion.p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}


function CurtainSide({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`h-full w-full ${
        side === "left"
          ? "origin-right"
          : "origin-left"
      }`}
      style={{
        background: `
          repeating-linear-gradient(
            90deg,
            #24030a 0px,
            #6b1020 35px,
            #3b0712 80px,
            #7d1628 120px,
            #28040b 160px
          )
        `,
        boxShadow:
          side === "left"
            ? "inset -40px 0 80px rgba(0,0,0,.7)"
            : "inset 40px 0 80px rgba(0,0,0,.7)",
      }}
    />
  );
}