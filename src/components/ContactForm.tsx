import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface MessagesType {
  [status: string]: string;
}

const messages: MessagesType = {
  success: "yeah, message sent!",
  incomplete: "please fill in all required fields",
  invalid: "please check your email...",
  pending: "...",
  sending: "sending...",
  failed: "oops, please try again later..",
};

const ContactForm = () => {
  const [sendStatus, setSendStatus] = useState<string>("pending");
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const checkEmail = (email: string) => {
    const regex = new RegExp("[^@]+@[^.]+..+", "i");
    return email.match(regex);
  };

  const clearHint = () => {
    const timer = setTimeout(() => {
      setSendStatus("pending"), 5000;
    });
    return () => clearTimeout(timer);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      (nameRef.current && !nameRef.current.value.trim()) ||
      (emailRef.current && !emailRef.current.value.trim()) ||
      (messageRef.current && !messageRef.current.value.trim())
    ) {
      setSendStatus("incomplete");
      clearHint();
      return;
    }
    if (emailRef.current && !checkEmail(emailRef.current.value)) {
      setSendStatus("invalid");
      clearHint();
      return;
    }
    setSendStatus("sending");
    emailjs
      .sendForm(
        "service_t3m97oq",
        "template_8zxlmrf",
        formRef.current!,
        "HsdRu0CzvsGg2vQbh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSendStatus("success");
        },
        (error) => {
          console.log(error.text);
          setSendStatus("failed");
          clearHint();
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      role="form"
      className="mt-10 text-dark dark:text-light font-semibold text-[1.25rem] [&_fieldset]:mb-3 md:[&_fieldset]:mb-6 md:[&_label]:mr-8"
    >
      <div className="mx-auto">
        <fieldset className={sendStatus}>
          <label htmlFor="name" className={`label ${sendStatus}`}>
            Name*
          </label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            name="name"
            className={`input ${sendStatus}`}
            placeholder="Lily Woodstock"
            required
          />
        </fieldset>
        <fieldset className={sendStatus}>
          <label htmlFor="email" className={`label ${sendStatus}`}>
            E-Mail*
          </label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            className={`input ${sendStatus}`}
            placeholder="wood.lil@gmail.com"
            required
          />
        </fieldset>
      </div>

      <div className="mx-auto">
        <fieldset className={sendStatus}>
          <label htmlFor="subject" className={`label ${sendStatus}`}>
            Subject
          </label>
          <input
            ref={subjectRef}
            type="text"
            name="subject"
            id="subject"
            className={`input ${sendStatus}`}
            placeholder="About..."
          />
        </fieldset>
        <fieldset className={`xl:block ${sendStatus}`}>
          <label htmlFor="message" className={`label ${sendStatus}`}>
            Message*
          </label>
          <textarea
            ref={messageRef}
            name="message"
            id="message"
            className={`${sendStatus} input min-h-[6rem] max-w-[75%]`}
            placeholder="Hi! ..."
            spellCheck="false"
            required
          />
        </fieldset>
      </div>

      <div className="mb-2 [&_button]:mx-5 [&_button]:my-1 ">
        <button
          className={`btn btn-form ${sendStatus}`}
          type="submit"
          disabled={
            sendStatus === "success"
              ? true
              : sendStatus === "sending"
              ? true
              : undefined
          }
        >
          Send
        </button>
        <button
          className={`btn btn-form ${sendStatus}`}
          type="reset"
          disabled={
            sendStatus === "success"
              ? true
              : sendStatus === "sending"
              ? true
              : undefined
          }
        >
          Reset
        </button>
      </div>
      <code className={`${sendStatus}`}>{messages[sendStatus]}</code>
    </form>
  );
};

export default ContactForm;
