import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST" action="https://getform.io/f/44ea3450-2f55-4515-b61e-098f7ed9a7d1"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            contact{" "}
          </p>
          <p className="text-gray-300 py-4">
            // submit the form below or shoor my email - alandmustafa4#gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text "
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="3mail "
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          let's collaborate{" "}
        </button>
      </form>
    </div>
  );
};

export default Contact;
