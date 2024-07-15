import React from "react";
import './Contact.modules.css';
import mail_icon from '../assets/mail_icon.svg';
import location_icon from '../assets/location_icon.svg';
import call_icon from '../assets/call_icon.svg';

function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "a5dc43a6-91f8-414a-9eba-a0b2c14c2dba");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <div className="contact-details">
                        <div className="contact-detail">
                            <a href="mailto:rishabh.s2511@gmail.com">
                                <img src={mail_icon} alt="Email" />
                                <p>rishabh.s2511@gmail.com</p>
                            </a>
                        </div>
                        <div className="contact-detail">
                            <a href="tel:+918461990429">
                                <img src={call_icon} alt="Phone" />
                                <p>+91 8461990429</p>
                            </a>
                        </div>
                        <div className="contact-detail">
                            <a href="https://www.google.com/maps/place/Bhopal,+India" target="_blank" rel="noopener noreferrer">
                                <img src={location_icon} alt="Location" />
                                <p>Bhopal, India</p>
                            </a>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your Name" required />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your Email" required />
                    <label htmlFor="message">Write your Message Here</label>
                    <textarea id="message" name="message" rows={3} placeholder="Enter your Message" required></textarea>
                    <button type="submit" className="contact-submit">Submit Now</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
