import { useEffect, useRef, useState } from "react";


export function useReveal<T extends HTMLElement = HTMLDivElement>() {

  const ref = useRef<T | null>(null);

  const [visible,setVisible] = useState(false);


  useEffect(()=>{

    const element = ref.current;

    if(!element) return;


    const observer = new IntersectionObserver(

      ([entry])=>{

        if(entry.isIntersecting){

          setVisible(true);

          observer.disconnect();

        }

      },

      {
        threshold:0.15,
        rootMargin:"0px 0px -60px 0px",
      }

    );


    observer.observe(element);


    return()=>observer.disconnect();


  },[]);


  return {
    ref,
    visible
  };

}




export function useParallax(){

  const [offset,setOffset] = useState(0);


  useEffect(()=>{

    let frame:number;


    const handleScroll=()=>{

      cancelAnimationFrame(frame);


      frame=requestAnimationFrame(()=>{

        setOffset(window.scrollY);

      });

    };


    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive:true
      }
    );


    return()=>{

      cancelAnimationFrame(frame);

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  },[]);



  return offset;

}