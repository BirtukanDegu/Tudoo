import { TodosProps } from '@/types';
import { AnimatePresence } from 'framer-motion';
import React from 'react'
import Todo from './Todo';
import EmptyState from './EmptyState';
import Header from './Header';

const Todos = ({
    todos,
    handleCheck,
    removeElement,
  }: TodosProps) => {
    return (
        <div className="w-full space-y-3">
            <Header/>
            {todos.length !== 0 ? (
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
            ):(
                <EmptyState/>
            )}
        </div>
    )
}

export default Todos