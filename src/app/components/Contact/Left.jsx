"use client";
import { useState } from "react";
import { Input, TextArea } from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkButton, SocialLink } from "../Button";
import {
  faFacebook,
  faViber,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const Left = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [concern, setConcern] = useState("");

  return (
    <div className="h-full flex flex-col items-center gap-y-8  justify-center">
      <Input
        type="text"
        input={name}
        onchange={(event) => setName(event.target.value)}
        placeholder="Your Name"
      />
      <Input
        type="email"
        input={email}
        onchange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
      <Input
        type="text"
        input={website}
        onchange={(event) => setWebsite(event.target.value)}
        placeholder="Your Website (if exists)"
      />
      <TextArea
        input={concern}
        onchange={(event) => setConcern(event.target.value)}
        placeholder="How can I help?*"
      />
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-y-8 lg:gap-0 w-[343px] lg:w-[500px]">
        <LinkButton>Get In Touch</LinkButton>
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
