import React, { useEffect, useState } from "react";
import { getDoc, doc, collection, setDoc, getDocs } from "firebase/firestore";
import db from "../firebase";
import { v4 as uuidv4 } from "uuid";


const Input = () => {

    const [input, setInput] = useState({email:"", password:""})

    function handleInput(e){
        const {name,value} = e.target
        setInput({...input, [name]:value})
    }

    async function handleSubmit() {
        
        try {
            const res = await setDoc(doc(db,"User", uuidv4(), input))
            console.log(input)
             const data = await res.data();
            console.log(data)

        } catch (error) {
             console.log(error.code)
             console.log(error.message)
        }
    }

    useEffect(() => {
          getDoc(doc(db,"User", uuidv4(), input))
        // getDocs(collection(db,"User"))
        // .then((res) => res.docs.map(doc => doc.data()))
        // .then((res) => console.log(res))
    }, [input])
    

    return (
        <div className="mt-15 p-5">
            <form className="max-w-sm shadow shadow-5xl rounded-2xl p-5 mx-auto">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={(e)=>handleInput(e)} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="your email"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                        Your password
                    </label>
                    <input
                        // type="password"
                        id="password"
                        name="password"
                        onChange={(e)=>handleInput(e)} 
                        className="bg-gray-50 border border-gray-300 text-sm rounded-lg 
                                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="password"
                        required
                    />
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                               focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto 
                               px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
                               dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
export default Input