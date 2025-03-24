"use client"
import { useState } from 'react'
import {Input, TextArea } from "./Input"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faReddit, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';

import { LinkButton, SocialLink} from "../Button"
const Left = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [concern, setConcern] = useState('')

  return (
    <div className="w-1/2 h-full flex flex-col items-center py-16 gap-y-8 ">
      <Input type="text" input={name} onchange={(event)=>setName(event.target.value)} placeholder="Your Name"/>
      <Input type="email" input={email} onchange={(event)=>setEmail(event.target.value)} placeholder="Email"/>
      <Input type="text" input={website} onchange={(event)=>setWebsite(event.target.value)} placeholder="Your Website (if exists)"/>
      <TextArea  input={concern} onchange={(event)=>setConcern(event.target.value)} placeholder="How can I help?*"/>
      <div className="flex items-center justify-between w-[500px]">
        <LinkButton>Get In Touch</LinkButton>  
        <SocialLink isDark={true}> 
        <FontAwesomeIcon 
              className="rounded-full" icon={faFacebook} 
              style={{ color: 'white', fontSize: '24px' }} /></
            SocialLink>
        <SocialLink>
        <FontAwesomeIcon
          className="rounded-full"
          icon={faReddit}
          style={{ color: 'black', fontSize: '24px' }}
        />
      </SocialLink>

      <SocialLink>
        <FontAwesomeIcon
          className="rounded-full"
          icon={faTwitter}
          style={{ color: 'black', fontSize: '24px' }}
        />
      </SocialLink>

      <SocialLink>
        <FontAwesomeIcon
          className="rounded-full"
          icon={faDiscord}
          style={{ color: 'black', fontSize: '24px' }}
        />
      </SocialLink>
      </div>
    </div>
  )
}

export default Left
