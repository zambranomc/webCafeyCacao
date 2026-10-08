import React from "react";

import Contact from "../pages/Contact";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";


const ContactLayout = () => {
    return (
        <div>
            <Contact />
            <ContactForm />
            <ContactInfo />
        </div>
    )
}

export default ContactLayout;