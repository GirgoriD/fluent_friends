import React from 'react';
import { useForm } from 'react-hook-form';
import "./contactForm.scss";
import { useRef } from 'react';
import emailjs from 'emailjs-com'; // Change this import

function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const form = useRef();

  const onSubmit = (data) => {
    emailjs.sendForm('service_uxhft8q', 'template_s43kamg', form.current, 'T9fpV7CMEE9plpemb')
      .then((result) => {
          console.log("Message sent successfully:", result.text);
      })
      .catch((error) => {
          console.error("Error sending message:", error);
      });
    reset();
  };
  
  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Message</label>
        <textarea
          {...register('message', {
            required: 'Message is required',
          })}
        />
        {errors.message && <span>{errors.message.message}</span>}
      </div>

      <button type='submit'>Send</button>
    </form>
  );
}

export default ContactForm;
