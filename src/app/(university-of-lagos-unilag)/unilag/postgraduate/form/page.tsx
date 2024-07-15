import React from "react";
import Form from "./form";


export default function(){
    return(
        <div>
            <header>

            </header>
            <div className = "grid grid-cols-1 md:grid-cols-4 gap-4 mx-2 md:mx-32">
            <main className = "md:col-span-3 bg-white rounded p-4">
                <Form />

            </main>
            <aside className = "md:col-span-1 p-4">
                <h2>Side Bar</h2>
            </aside>
            </div>
            <footer>

            </footer>

        </div>
    )
}