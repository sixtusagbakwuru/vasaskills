import React from "react";
import Form from "./form";
import Navbar from "@/components/navbar";
import { NavigationMenuDemo } from "@/components/navigation-bar";


export default function UNILAGPostgraduateForm(){
    return(
        <div>
            <header>
                <NavigationMenuDemo />
                <Navbar />
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