import { motion } from "framer-motion";
import { collection, doc, setDoc, getDocs, addDoc } from "firebase/firestore";
import React, { FormEvent, useEffect, useState } from "react";
import { db } from "@/utils/firebase";
import { v4 as uuidv4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";
type Props = {};

const Contact = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };
  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  const submit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const data = {
      id: uuidv4(),
      name,
      email,
      subject,
      message,
      date: Date(),
    };
    const collRef = collection(db, "request");
    addDoc(collRef, data)
      .then((res) => {
        console.log("adding sucess");
        resetForm();
        toast.success("Message sent, thank you for reaching out...!");
      })
      .catch((err) => {
        console.log("failed ", err);
        toast.error("Failed to send the message, try again");
      });
  };

  return (
    <div className=" h-screen  flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10  mx-auto items-center justify-center">
      <h3 className=" absolute top-36 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <form
        onSubmit={submit}
        className=" flex flex-col space-y-2 w-fit mx-auto mt-20"
      >
        <div className=" space-y-2">
          <input
            placeholder="Name"
            className="contactInput w-full"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <input
            placeholder="Email"
            className="contactInput  w-full"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <input
          onChange={handleSubjectChange}
          placeholder="Subject"
          className="contactInput"
          value={subject}
          type="text"
        />
        <textarea
          onChange={handleMessageChange}
          placeholder="Message"
          value={message}
          className="contactInput"
        />
        <button
          type="submit"
          className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
