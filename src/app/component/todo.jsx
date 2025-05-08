"use client";

export default function TodoItem({ text }) {
  return (
    <div className="bg-white border rounded-md p-3 shadow-sm">
      <p className="text-gray-800">{text}</p>
    </div>
  );
}
