import { TodoProps } from "@/types";
import { useAnimate, usePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { FiClock, FiTrash2 } from "react-icons/fi";
import useSound from "use-sound";


const Todo = ({
    removeElement,
    handleCheck,
    id,
    children,
    checked,
    time,
  }: TodoProps) => {
    const [isPresent, safeToRemove] = usePresence();
    const [scope, animate] = useAnimate();
    const [playCheck] = useSound("/sounds/click.mp3");
    const [playRemove] = useSound("/sounds/delete.mp3");
  
    useEffect(() => {
      if (!isPresent) {
        const exitAnimation = async () => {
          animate(
            "p",
            {
              color: checked ? "#F97316" : "#fca5a5",
            },
            {
              ease: "easeIn",
              duration: 0.125,
            }
          );
          await animate(
            scope.current,
            {
              scale: 1.025,
            },
            {
              ease: "easeIn",
              duration: 0.125,
            }
          );
  
          await animate(
            scope.current,
            {
              opacity: 0,
              x: checked ? 24 : -24,
            },
            {
              delay: 0.75,
            }
          );
          safeToRemove();
        };
  
        exitAnimation();
      }
    }, [isPresent]);
  
    return (
      <motion.div
        ref={scope}
        layout
        className="relative flex w-full items-center gap-3 rounded border border-slate-200 bg-white p-3"
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {
            playCheck()
            handleCheck(id)
          }}
          className="size-4 accent-primary cursor-pointer"
        />
  
        <p
          className={`text-slate-950 transition-colors ${checked && "text-amber-400 line-through"}`}
        >
          {children}
        </p>
        <div className="ml-auto flex gap-1.5">
          <div className="flex items-center gap-1.5 whitespace-nowrap rounded bg-primary/10 px-1.5 py-1 text-xs text-slate-950">
            <FiClock />
            <span>{time}</span>
          </div>
          <button
            onClick={() => {
              playRemove()
              removeElement(id)
            }}
            className="rounded bg-red-300/20 px-1.5 py-1 text-xs text-red-600 transition-colors hover:bg-red-600 hover:text-red-200 cursor-pointer"
          >
            <FiTrash2 />
          </button>
        </div>
      </motion.div>
    );
  };

  export default Todo;