'use client'
import React from "react";
import { useState } from "react";

export default function EmailSubscriptionForm(){
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          //await firestore.collection('subscriptions').add({ email });
          alert('Subscription successful!');
          setEmail('');
        } catch (error) {
          console.error('Error subscribing:', error);
          alert('Failed to subscribe. Please try again later.');
        }
      };


    return(
        <div>
            
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto my-8 bg-vasaskills-blue rounded p-2">
            <h3 className = "text-center text-2xl text-white">Join Over 7,524 Postgraduate Applicants and Stay Updated With Latest News From UNILAG SPGS</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full px-4 py-2 my-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full px-4 py-2 my-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        required
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-vasaskills-green font-bold rounded hover:bg-blue-600 focus:outline-none"
      >
        Subscribe
      </button>
    </form>
        </div>
    )
}