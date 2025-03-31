"use client";
import { useState } from "react";
import { Input, TextArea } from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialLink } from "../Button";
import {
  faFacebook,
  faViber,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

const Left = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [concern, setConcern] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/postData", {
        name,
        email,
        website,
        concern,
      });
      setMessage(response.data.message || "Form submitted successfully!");
      setName("");
      setEmail("");
      setWebsite("");
      setConcern("");
    } catch (error) {
      console.error("Axios Error:", error); // Log the error
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col items-center gap-y-8 justify-center">
      <Input
        type="text"
        input={name}
        onchange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />
      <Input
        type="email"
        input={email}
        onchange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        type="text"
        input={website}
        onchange={(e) => setWebsite(e.target.value)}
        placeholder="Your Website (if exists)"
      />
      <TextArea
        input={concern}
        onchange={(e) => setConcern(e.target.value)}
        placeholder="How can I help?*"
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="text-lg w-fit bg-black text-white h-14 p-4 font-bold rounded-sm"
      >
        {loading ? "Submitting..." : "Get in Touch"}
      </button>
      {message && <p className="text-center text-green-500">{message}</p>}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-y-8 lg:gap-0 w-[343px] lg:w-[500px]">
        <div className="flex gap-x-6">
          <SocialLink isDark={true}>
            <FontAwesomeIcon
              className="rounded-full"
              icon={faFacebook}
              style={{ color: "white", fontSize: "24px" }}
            />
          </SocialLink>
          <SocialLink>
            <FontAwesomeIcon
              className="rounded-full"
              icon={faViber}
              style={{ color: "black", fontSize: "24px" }}
            />
          </SocialLink>
          <SocialLink>
            <FontAwesomeIcon
              className="rounded-full"
              icon={faTwitter}
              style={{ color: "black", fontSize: "24px" }}
            />
          </SocialLink>
          <SocialLink>
            <FontAwesomeIcon
              className="rounded-full"
              icon={faDiscord}
              style={{ color: "black", fontSize: "24px" }}
            />
          </SocialLink>
        </div>
      </div>
    </div>
  );
};

export default Left;
