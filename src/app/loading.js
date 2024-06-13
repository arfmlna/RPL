'use client'
import TypeIt from "typeit-react";

export default function Loading() {
    return (
        <div className="grid grid-cols-1 gap-4 min-h-screen min-w-screen justify-items-center items-center">
            <p className="text-center text-3xl">
                Loading
            <TypeIt
                options={{
                strings: ["..."],
                speed: 50,
                loop: true
                }}
            />
            </p>
        </div>
    )
}