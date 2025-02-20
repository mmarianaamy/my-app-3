'use client'

import { useState } from "react";

export default function Home() {

  const [value, setValue] = useState(0);

  const handleSubmit = () => {
    setValue(value + 1);
  }

  const handleSubtract = () => {
    setValue(value - 1);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col justify-items-center text-center gap-8 min align-center">
        
        <p>{value}</p>

        <div>
        <button onClick={handleSubmit} className="p-3 m-5 border border-solid border-gray-600 rounded-md hover:bg-gray-800">Add</button>
        <button onClick={handleSubtract} className="p-3 m-5 border border-solid border-gray-600 rounded-md hover:bg-gray-800">Subtract</button>
        </div>

      </main>
    </div>
  );
}
