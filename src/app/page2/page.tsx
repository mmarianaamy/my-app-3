'use client'

import { useState } from "react"

export default function Page2(){

    const [color, setColor] = useState("gray");

    return(
        <div className="flex flex-col items-center justify-evenly min-h-screen">
            <div className={`bg-${color}-500 w-32 h-32`}></div>
            <div className="grid grid-cols-2 gap-3">
                <button onClick={() => setColor("green")} className="bg-green-500 h-32 w-64"></button>
                <button onClick={() => setColor("blue")} className="bg-blue-500 h-32 w-64"></button>
                <button onClick={() => setColor("red")} className="bg-red-500 h-32 w-64"></button>
                <button onClick={() => setColor("yellow")} className="bg-yellow-500 h-32 w-64"></button>
            </div>
        </div>
    )
}