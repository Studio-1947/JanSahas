"use client";
import Link from "next/link";
import React, { useState } from "react";
// import { Button, input, Textarea, div } from "@material-tailwind/react";

export function ContactSection14() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; message: string }>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus({ ok: false, message: "Please fill all fields." });
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch(`/api/submissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Submission failed");
      }
      setStatus({ ok: true, message: "Thank you! We’ll be in touch." });
      e.currentTarget.reset();
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "string" && err.length
          ? err
          : "Something went wrong.";
      setStatus({ ok: false, message });
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <>
      <section
        className="relative
      bg-[url('/aboutUs/about_us.webp')]
      bg-no-repeat
      bg-cover
      bg-center lg:bg-cover
      flex items-center justify-center
       text-center
      
      h-[300px] sm:h-[400px] md:h-[500px] 
    text-background/80 body-font 
      "
      >
        <div className="absolute inset-0 bg-background/80 z-0" />
        <div className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white relative">
          Contact Us
        </div>
      </section>
      <section className="mx-auto max-w-6xl pb-10">
        <p className="text-xs md:text-sm opacity-60 pt-6 lg:text-lg text-background/80 text-center px-4">
          We&apos;d love to hear from you! Whether you have questions about our
          work, want to explore collaboration opportunities, or simply wish to
          learn more about JSSES, please don&apos;t hesitate to reach out. Your
          inquiries and engagement are important to us.
        </p>

        <div className="text-2xl lg:text-4xl font-semibold text-center text-background/80 py-10">
          Visit Our Office
        </div>
        <div className="container  mx-auto flex sm:flex-nowrap flex-wrap ">
          <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 flex items-center justify-start md:relative flex-col md:justify-end md:pb-3">
            <iframe
              width="100%"
              height="100%"
              className="md:absolute inset-0 z-0"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1850892288903!2d75.92726067530485!3d22.721360879385966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2eed3ab976f%3A0x88830baef1e6265d!2sJan%20Sahas%20Social%20Empowerment%20Society!5e0!3m2!1sen!2sin!4v1754906429417!5m2!1sen!2sin"
            ></iframe>
            <div className="bg-white  flex flex-wrap py-6 rounded shadow-md z-10">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 text-xs">
                  ADDRESS
                </h2>

                <Link
                  href="https://maps.app.goo.gl/KXxKTmBJ1qwckS8W6"
                  target="_blank"
                  className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 rounded flex items-center gap-2"
                >
                  <p className="mt-1 text-background/80">
                    408, G-1 Ahinsha Height,
                    <br />
                    Manavta Nagar, Indore 452016, Madhya Pradesh, India
                  </p>
                </Link>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 text-xs">
                  EMAIL
                </h2>
                <a
                  className="text-primary leading-relaxed *:hover:underline"
                  href="mailto:jses.indore@gmail.com"
                >
                   jses.indore@gmail.com
                </a>
                {/* <h2 className="title-font font-semibold text-gray-900 text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-background/80">
                  +91-731-284-5936
                </p> */}
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-4">
            <div className="text-2xl lg:text-4xl font-semibold text-background/80 text-center">
              GET IN TOUCH
            </div>
            <form onSubmit={onSubmit} className="mt-4">
              <div className=" mb-4">
                <label className="leading-7 text-sm text-background/80">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className=" mb-4">
                <label className="leading-7 text-sm text-background/80">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className=" mb-4">
                <label className="leading-7 text-sm text-background/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              {status && (
                <p className={`${status.ok ? "text-green-600" : "text-red-600"} text-sm mb-3`}>
                  {status.message}
                </p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary text-lg rounded-[2rem] cursor-pointer disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection14;
