import React from "react";
import Form from "./form";
import Navbar from "@/components/navbar";
import { NavigationMenuDemo } from "@/components/navigation-bar";
import Image from "next/image";


export default function UNILAGPostgraduateForm(){
    return(
        <div>
            <header className = "grid grid-cols-12 gap-8  mx-2 md:mx-32">
                <div className="col-span-4 bg-white rounded p-2">
                    <Image src = "/vasaskills-logo.png" alt = "Vasaskills Institute Logo" width = {65} height = {65}/>
                </div>
                <div className="col-span-8 p-4 bg-white rounded flex items-center justify-end">
                <NavigationMenuDemo />
                {/*
                <Navbar />
                */}
                </div>
            </header>
            <div className = "grid grid-cols-1 md:grid-cols-12 gap-8 my-8 mx-2 md:mx-32">
            <main className = "md:col-span-8 bg-white rounded p-4">
                <Form />

            </main>
            <aside className = "md:col-span-4 p-4 bg-white rounded">
                <div className = "bg-white rounded p-4">
                    <h2>Recent Posts</h2>

                </div>
                <h2>Side Bar</h2>
            </aside>
            </div>
            <footer>

            </footer>

        </div>
    )
}