import { TodosProps } from '@/types';
import { AnimatePresence } from 'framer-motion';
import React from 'react'
import Todo from './Todo';

const Todos = ({
    todos,
    handleCheck,
    removeElement,
  }: TodosProps) => {
    return (
        <div className="w-full space-y-3">
        <AnimatePresence>
            {todos.map((t) => (
            <Todo
                handleCheck={handleCheck}
                removeElement={removeElement}
                id={t.id}
                key={t.id}
                checked={t.checked}
                time={t.time}
            >
                {t.text}
            </Todo>
            ))}
        </AnimatePresence>
        </div>
    )
}

export default Todos