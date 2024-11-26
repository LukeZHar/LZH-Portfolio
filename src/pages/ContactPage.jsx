import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Header from '../components/Header'; // Import the Header component
import Footer from '../components/Footer'; // Import the Footer component
import '../styles/contact.css'; // Adjust path if necessary
import '../styles/styles.css';   // If you have shared styles 




export default function ContactPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        };

        emailjs.send('service_ww4mwtm', 'template_1kh9zjj', templateParams, 'r28wxnpK-R8f2KE1_')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSuccessMessage('Your message has been sent successfully!'); // Set success message
                setErrorMessage(''); // Clear any previous error message
                // Clear the form fields
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            }, (err) => {
                console.log('FAILED...', err);
                setErrorMessage('There was an error sending your message. Please try again.'); // Set error message
                setSuccessMessage(''); // Clear any previous success message
            });
    };

    return (
        <div>
            <Header />
            <main>
                <section className="full-form">
                    {/* <!-- Main header --> */}
                    <h2>Contact Me</h2>
                    {/* <!-- short paragraph with a bold email text --> */}
                    <p> You can email me here: <strong>luke.z.harris@hotmail.com</strong></p>
                    <p>Or fill out the form below and I'll get back to you as soon as I can!</p>
                    {/* <!-- Added a break to space it out a bit more --> */}
                    <br></br>
                    {/* <!-- Input text zone --> */}
                    <form onSubmit={sendEmail}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" className="form-input"
                                value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" className="form-input"
                                value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" id="subject" className="form-input"
                                value={subject} onChange={(e) => setSubject(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" rows="4" className="form-input form-textarea"
                                value={message} onChange={(e) => setMessage(e.target.value)} required />
                        </div>
                        {/* <!-- button for submitting --> */}
                        <div className="bttn">
                            {/* <!-- button --> */}
                            <button type="button" className="submit">Submit</button>
                        </div>
                        {/* Display success or error messages */}
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    )
}