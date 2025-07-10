"use client";

import { Button } from "@/components/form/Button";
import toast from "react-hot-toast";
import { Toaster } from "../../components/utilities/Toaster";
import { useRef } from "react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/victor.winsjansen@icloud.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        toast.custom(<Toaster message="Message sent successfully!" />);
        form.reset();
      } else {
        toast.custom(
          <Toaster message="Something went wrong. Please try again." />
        );
      }
    } catch (error) {
      toast.custom(
        <Toaster error={true} message="Network error. Try again later." />
      );
      console.error("Failed to copy link", error);
    }
  };

  return (
    <main className="main-page items-center justify-center">
      <form
        className="flex flex-col gap-6 sm:gap-10 w-full sm:w-1/2 page-bg"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <h2 className="">Contact</h2>
        <p>Feel free to reach out to me for any business related inquiry.</p>
        <fieldset className="flex flex-col gap-1 sm:gap-3">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="bg-background/30 p-2 rounded placeholder:text-foreground/70 outline-0 focus:outline-1 outline-racing-green"
          />

          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="bg-background/30 p-2 rounded placeholder:text-foreground/70 outline-0 focus:outline-1 outline-racing-green"
          />

          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
            className="bg-background/30 p-2 rounded h-50 placeholder:text-foreground/70 outline-0 focus:outline-1 outline-racing-green"
          ></textarea>

          <input
            type="hidden"
            name="_autoresponse"
            value="Thanks for your message! I’ll get back to you soon. / Takk for meldingen din! Jeg kommer tilbake til deg så snart som mulig.
          
          Best Regards / Mvh, Victor Winsjansen"
          />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value="false" />
        </fieldset>

        <Button className="w-fit self-center" type="submit">
          Send Message
        </Button>
      </form>
    </main>
  );
}
