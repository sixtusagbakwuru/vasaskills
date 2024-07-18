import React from "react";
import Form from "./form";
import Navbar from "@/components/navbar";
import { NavigationMenuDemo } from "@/components/navigation-bar";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "UNILAG Postgraduate Form"
}


export default function UNILAGPostgraduateForm(){
    return(
        <div className = "bg-vasaskills-blue">
            <header className = "grid grid-cols-1 sticky top-0 shadow md:grid-cols-12  mx-2 md:mx-32">
                <div className="md:col-span-4 bg-white pe-4 ps-4 flex justify-center md:justify-start">
                    <Image src = "/vasaskills-logo.png" alt = "Vasaskills Institute Logo" width = {65} height = {65} className="max-w-full h-auto"/>
                </div>
                <div className="md:col-span-8 p-4 bg-white flex items-center justify-end">
                <NavigationMenuDemo />
                {/*
                <Navbar />
                */}
                </div>
            </header>
            <div className = "grid grid-cols-1 md:grid-cols-12 gap-8 my-8 mx-2 md:mx-32">
            <main className = "md:col-span-8 bg-white rounded">
                <Form />

            </main>
            <aside className = "md:col-span-4 bg-white rounded">
                <div className = "rounded p-4 w-full">
                    <h2 className = "text-2xl font-bold">Recent Posts</h2>

                </div>
                <h2>Side Bar</h2>
            </aside>
            </div>
            <footer>

            </footer>

        </div>
    )
}