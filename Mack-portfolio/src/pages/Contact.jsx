import { useState } from 'react'

export default function Contact() {
    
    // contact form
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    // set changes of form input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };
        
    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log('Form submitted:', form);
        // reset form after submission
        setForm({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <>
        <section id="contact" className="container col-md-10">
            <h3 className="title fw-medium">Contact</h3>
            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                    <div className="contact fst-italic fw-light">
                        <p><span className="label fw-medium">Email:</span> mackenzielmoore14@gmail.com
                        <br></br><span className="label fw-medium">Phone number:</span> (314) 625-3333 
                        <br></br><span className="label fw-medium">Address: </span> 4001 S West Shore Blvd, Tampa FL 33611
                        </p>
                    </div>
                </div>  
            </div>
        </section>

        <div className="contact-section">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
            
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
            
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
            
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
};