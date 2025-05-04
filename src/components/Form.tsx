import { TODO } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';
import React, { Dispatch, SetStateAction, useState } from 'react'
import { FiPlus } from 'react-icons/fi';

const Form = ({ setTodos }: { setTodos: Dispatch<SetStateAction<TODO[]>> }) => {
    const [visible, setVisible] = useState(false);
    
    const [time, setTime] = useState(15);
    const [text, setText] = useState("");
    const [unit, setUnit] = useState<"mins" | "hrs">("mins");
    
    const handleSubmit = () => {
        if (!text.length) {
        return;
        }
    
        setTodos((pv) => [
        {
            id: Math.random(),
            text,
            checked: false,
            time: `${time} ${unit}`,
        },
        ...pv,
        ]);
    
        setTime(15);
        setText("");
        setUnit("mins");
    };
      
    return (
        <div className="fixed bottom-6 left-1/2 w-full max-w-xl -translate-x-1/2 px-4">
            <AnimatePresence>
                {visible && (
                <motion.form
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 25 }}
                    onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                    }}
                    className="mb-6 w-full rounded border border-primary/20 bg-amber-50 p-3"
                >
                    <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="What do you need to do?"
                    className="h-24 w-full resize-none rounded bg-black/5 p-3 text-sm text-slate-950 placeholder-slate-500 caret-primary focus:outline-0"
                    />
                    <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                        <input
                        type="number"
                        className="w-24 rounded border border-primary/20 px-1.5 py-1 text-sm text-slate-950 focus:outline-0"
                        value={time}
                        onChange={(e) => setTime(parseInt(e.target.value))}
                        />
                        <button
                        type="button"
                        onClick={() => setUnit("mins")}
                        className={`rounded px-1.5 py-1 text-xs ${unit === "mins" ? "bg-primary/70 text-zinc-800" : "bg-primary/10 text-zinc-950 transition-colors hover:bg-primary/70 hover:text-zinc-800 cursor-pointer"}`}
                        >
                        mins
                        </button>
                        <button
                        type="button"
                        onClick={() => setUnit("hrs")}
                        className={`rounded px-1.5 py-1 text-xs ${unit === "hrs" ? "bg-primary/70 text-zinc-800" : "bg-primary/10 text-zinc-950 transition-colors hover:bg-primary/70 hover:text-zinc-800 cursor-pointer"}`}
                        >
                        hrs
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="rounded bg-primary px-1.5 py-1 text-xs text-white transition-colors hover:bg-primary/90 cursor-pointer"
                    >
                        Submit
                    </button>
                    </div>
                </motion.form>
                )}
            </AnimatePresence>
            <button
                onClick={() => setVisible((pv) => !pv)}
                className="flex items-center justify-center gap-2 w-full place-content-center rounded-full border border-primary/70 bg-primary py-3 text-lg text-white transition-colors hover:bg-primary/90 active:bg-primary cursor-pointer"
            >
                {visible ? "Close" : "Add Task"}<FiPlus
                className={`transition-transform ${visible ? "rotate-45" : "rotate-0"}`}
                />
            </button>
        </div>
    )
}

export default Form