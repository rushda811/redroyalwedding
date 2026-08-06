import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { StarIcon } from "./LineArt";

const TARGET = new Date("2026-08-08T18:30:00+04:00").getTime();

function parts(ms: number) {
  const seconds = Math.max(0, Math.floor(ms / 1000));

  return [
    { label: "Days", ar: "أيام", value: Math.floor(seconds / 86400) },
    { label: "Hours", ar: "ساعات", value: Math.floor((seconds % 86400) / 3600) },
    { label: "Minutes", ar: "دقائق", value: Math.floor((seconds % 3600) / 60) },
    { label: "Seconds", ar: "ثواني", value: seconds % 60 },
  ];
}


export function Countdown() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const units = parts(TARGET - now);


  return (
    <div className="relative mx-auto max-w-5xl">

      {/* royal title */}
      <div className="mb-12 text-center">

        <p className="arabic text-xl text-gold-soft">
          العدّ التنازلي
        </p>

        <h2 className="mt-4 font-serif text-3xl tracking-[0.3em] text-cream uppercase">
          Until The Royal Celebration
        </h2>

        <p className="mt-4 text-sm tracking-[0.5em] text-gold">
          08 · AUGUST · 2026
        </p>

      </div>



      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">


        {units.map((item,index)=>(
          
          <motion.div
            key={item.label}
            initial={{opacity:0,y:30}}
            animate={{opacity:1,y:0}}
            transition={{
              delay:index*0.15
            }}
            className="
            relative overflow-hidden
            border border-gold/40
            bg-[#3b0712]
            px-6 py-10
            text-center
            shadow-[inset_0_0_40px_rgba(0,0,0,.5)]
            "
          >

            {/* corner engraving */}
            <span className="absolute left-3 top-3 h-5 w-5 border-l border-t border-gold"/>
            <span className="absolute right-3 top-3 h-5 w-5 border-r border-t border-gold"/>
            <span className="absolute bottom-3 left-3 h-5 w-5 border-l border-b border-gold"/>
            <span className="absolute bottom-3 right-3 h-5 w-5 border-r border-b border-gold"/>


            <StarIcon 
              className="mx-auto h-5 w-5 text-gold"
            />


            <motion.div
              key={item.value}
              initial={{scale:1.2,opacity:0}}
              animate={{scale:1,opacity:1}}
              className="
              mt-6
              font-serif
              text-6xl
              text-[#f7e7c6]
              "
            >
              {String(item.value).padStart(2,"0")}
            </motion.div>


            <div className="mx-auto my-5 h-px w-12 bg-gold"/>


            <p className="arabic text-lg text-gold-soft">
              {item.ar}
            </p>


            <p className="
              mt-2
              text-xs
              tracking-[0.45em]
              text-cream/80
              uppercase
            ">
              {item.label}
            </p>


          </motion.div>

        ))}


      </div>


      <p className="mt-12 text-center text-sm tracking-[0.35em] text-gold-soft uppercase">
        ✦ Awaiting the moment of forever ✦
      </p>

    </div>
  );
}