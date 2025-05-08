"use client";

import { useState, useEffect } from "react";
import Todo from "@/app/component/todo";
import "./globals.css";

export default function HomePage() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    } else {
      alert("jangan diisi kosong");
    }
  };

  useEffect(() => {
    console.log("Daftar to-do diupdate:", todos);
  }, [todos]);

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-black">To-Do List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="tambah tugas..."
            className="flex-1 border rounded-l px-4 py-2 outline-none"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          >
            Tambah
          </button>
        </div>
        <div className="space-y-2">
          {todos.map((todo, index) => (
            <Todo key={index} text={todo} />
          ))}
        </div>
      </div>
    </main>
  );
}
