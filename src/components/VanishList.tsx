'use client'

import React, { useEffect, useState } from "react";
import { TODO } from "@/types";
import Header from "@/components/Header";
import Todos from "@/components/Todos";
import Form from "@/components/Form";
// import { DEFAULT_TASKS } from "@/data";

const VanishList = () => {
  const [todos, setTodos] = useState<TODO[]>([]);
  const [hasChecked, setHasChecked] = useState(false);


  useEffect (() => {
    if (hasChecked) {
      localStorage.setItem("tasks", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");

    setTodos(tasks ? JSON.parse(tasks) : [])

    setHasChecked(true);
  },[])

  const handleCheck = (id: number) => {
    setTodos((pv) =>
      pv.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const removeElement = (id: number) => {
    setTodos((pv) => pv.filter((t) => t.id !== id));
  };

  return (
    <section
      className="relative min-h-screen py-8 md:py-12 w-[595px] bg-white rounded-2xl border border-dashed border-gray-300 justify-center items-center"
    >
      <div className="mx-auto w-full max-w-xl px-4">
        <div className="flex md:hidden max-w-lg md:min-h-screen w-full h-full p-4 md:p-12 mr-12">
            <Header />
        </div>
        <Todos
          removeElement={removeElement}
          todos={todos}
          handleCheck={handleCheck}
        />
      </div>
      <Form setTodos={setTodos} />
    </section>
  );
};

export default VanishList;



