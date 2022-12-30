import React from "react";
import { useState } from "react";
import {replies} from './replies.js' // <--- it should be written like this

export default function Form(){
     // States
     const [userInput, setUserInput] = useState("")
     const [fullReplyState,setFullReplyState] = useState([])
     

     // Functions
     const handleChange = (e) => {
               setUserInput(e.target.value)
               //console.log(e.target.value)
     }

     const submitHandler = (e) => {
          e.preventDefault();
          //console.log("HELLO FROM SUBMIT HANDLER FUNCTIONS")
          // to get the returned data from reduce function and put it inside reply
          // insted of reduce you can use filter or anything
          const reply = replies.reduce((acc, item) => {
               if(item[userInput]) acc = item[userInput] 
                    return acc;
          },"")
          //console.log(reply) // replaying the data from replies.js file (input cat ) reply = just amaizing
          // save the old values
          const fullReply = {
               pet : userInput,
               personType : reply || "you are special person"
          }

          // keep the old values and save the new one using spread operator
          setFullReplyState([...fullReplyState,fullReply])
     
     }
     
     return (
          <>
               <section className="flex flex-col justify-center min-h-screen py-6 bg-fixed bg-gray-100 bg-center bg-cover bg-form-pattern bg- sm:py-12" >
                <section className="relative py-3 sm:max-w-xl sm:mx-auto ">
                    <section
                        className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-cyan-700 to-cyan-500 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </section>
                    <section className="relative px-4 py-10 bg-white shadow-inner shadow-blue-500 sm:rounded-3xl sm:p-20 ">
                        <section className="max-w-md mx-auto">
                            <section>
                                <h1 className="text-2xl font-semibold">Tell us Your Pet, We will tell you who you are</h1>
                            </section>
                            <section className="sectionide-y sectionide-gray-200">
                                <form onSubmit={submitHandler} className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                                    <section className="relative">
                                        <input 
                                        onChange={handleChange}
                                        autoComplete="off" 
                                        id="petName" 
                                        name="petName" 
                                        type="text" 
                                        className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600" placeholder="Cats maybe" />
                                        <label htmlFor="petName" className="absolute left-0 -top-3.5 text-gray-600 text-sm 
                                        peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Give us a Name</label>
                                    </section>

                                    <section className="relative">
                                        <button className="px-2 py-1 text-white rounded-md bg-cyan-900 hover:bg-cyan-700"> Guess </button>
                                    </section>
                                </form>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            
               <section className="w-full pt-10 text-center shadow-lg shadow-black-50">
                    {fullReplyState.length > 0 && fullReplyState.map((item,index)=>{
                         return(
                              <div>
                                   <p>{item.pet} : {item.personType}</p>
                              </div>
                         )
                    })}
               </section>
          
          </>
     )
}