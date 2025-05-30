import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  //service id

  const [submitting, setSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMSg] = useState("");
  //logic
  const handleSubmit = (e) => {
    e.preventDefault();
    // setErrorMSg("Oops! Something went wrong.")
    // setMessage("Message Sent!");
    if (submitting || cooldown) return;
    setSubmitting(true); // disable the button
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        // setMessage("Message Sent!");
        toast.success("Form Submitted Successfully");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => toast.error("Oops! Something went wrong."))
      .finally(() => {
        setSubmitting(false);
        setCooldown(true); // Start cooldown after sending completes
        setTimeout(() => setCooldown(false), 10000); // Re-enable after 10 seconds
      });
  };

  return (
    <section
      id="contact"
      className="min-h-[70vh] flex items-center justify-center py-20 mt-25 xl:mt40 "
    >
      <RevealOnScroll>
        <div className="px-4 w-[350px] xl:w-[900px] md:w-[600px] lg:w-[750px] sm:w-[500px] animate-heading">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center animate-heading">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="resize-none w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 scrollbar-hide overflow-y-scroll"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,256,0.4)]
              "
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
            <div className="text-green-400 text-md font-medium ">{message}</div>
            <div className="text-red-500 text-md font-medium ">{errorMsg}</div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Contact;
