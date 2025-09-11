"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

type UserInput = {
  name: string;
  email: string;
  message: string;
};

function ContactForm() {
  const [userInput, setUserInput] = useState<UserInput>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    try {
      const emailParams = {
        name: userInput.name,
        email: userInput.email,
        message: userInput.message,
      };

      const res: EmailJSResponseStatus = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        publicKey
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setUserInput({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div>
          <p className="mb-5 text-center text-xl font-medium uppercase text-[#16f2b3]">
            Contact with me
          </p>
          <div className="rounded-lg border border-[#464c6a] p-6 text-white shadow-lg">
            <p className="text-center text-sm text-[#d3d8e8]">
              If you have any questions or concerns, please don&apos;t hesitate
              to contact me. I am open to any work opportunities that align with
              my skills and interests.
            </p>

            {/* Name */}
            <div className="mt-6 flex flex-col gap-2">
              <label className="text-base">Your Name: </label>
              <input
                className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 outline-0 transition-all duration-300 focus:border-[#16f2b3]"
                type="text"
                name="name"
                value={userInput.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="mt-4 flex flex-col gap-2">
              <label className="text-base">Email</label>
              <input
                className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 outline-0 transition-all duration-300 focus:border-[#16f2b3]"
                type="email"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message */}
            <div className="mt-4 flex flex-col gap-2">
              <label className="text-base">Your Message: </label>
              <textarea
                className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 outline-0 transition-all duration-300 focus:border-[#16f2b3]"
                name="message"
                maxLength={500}
                value={userInput.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:scale-105 md:text-base"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
