import React from "react";

const ContactForm = () => {
  return (
    <form
      action=""
      className="mt-10 text-dark dark:text-light font-semibold text-[1.25rem] [&>fieldset]:mb-3 flex flex-col"
    >
      <fieldset className="flex [&>input]:ml-5 items-start">
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="input"
          placeholder="Lily Woodstock"
        />
      </fieldset>
      <fieldset className="flex [&>input]:ml-5">
        <label htmlFor="email" className="label">
          E-Mail
        </label>
        <input
          type="email"
          id="email"
          className="input"
          placeholder="wood.lil@gmail.com"
        />
      </fieldset>
      <fieldset className="flex [&>textarea]:ml-5">
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="input min-h-[6rem]"
          placeholder="Hi! ..."
        ></textarea>
      </fieldset>
      <div className="grid grid-cols-2">
        <button className="row-span-1 btn btn-form mx-5" type="submit">
          Submit
        </button>
        <button className="row-span-1 btn btn-form mx-5" type="reset">
          Clear
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
