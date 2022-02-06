import React, { useState } from "react";
import { Validator } from "react";
const ContactForm = () => {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
        is_aggre: false,
    });

    const nameChangeHandler = (e) => {
        setContact({ ...contact, name: e.target.value });
        submitHandlerContactForm(e);
    };

    const emailChangeHandler = (e) => {
        setContact({ ...contact, email: e.target.value });
        submitHandlerContactForm(e);
    };

    const mobileChangeHandler = (e) => {
        setContact({ ...contact, mobile: e.target.value });
        submitHandlerContactForm(e);
    };

    const messageChangeHandler = (e) => {
        setContact({ ...contact, message: e.target.value });
        submitHandlerContactForm(e);
    };

    const isAgreeChangeHandler = (e) => {
        setContact({ ...contact, is_aggre: e.target.checked });
        submitHandlerContactForm(e);
    };

    const changeHandler = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
        submitHandlerContactForm(e);
    };

    /* const display = () => {
        console.log(contact);
      }; */

    const submitHandlerContactForm = (event) => {
        event.preventDefault();
        console.log(contact);
    };
    return (
        <React.Fragment>
            <form className="form" onSubmit={submitHandlerContactForm}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter Name"
                        value={contact.name}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={contact.email}
                        onChange={changeHandler}
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile</label>
                    <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        name="mobile"
                        value={contact.mobile}
                        onChange={changeHandler}
                        aria-describedby="mobileHelp"
                        placeholder="Enter mobile number"
                    />
                    <small id="mobileHelp" className="form-text text-muted">
                        We'll never share your mobile no with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="message"
                        name="message"
                        value={contact.message}
                        onChange={changeHandler}
                        aria-describedby="emailHelp"
                        placeholder="Enter message"
                    ></textarea>
                </div>
                <div className="form-group form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="is_aggre"
                        name="is_agree"
                        value={contact.is_aggre}
                        /* {contact.is_aggre?'chacked':''} */
                        onChange={(e) => isAgreeChangeHandler(e)}
                    />
                    <label className="form-check-label" htmlFor="is_aggre">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </React.Fragment>
    );
};

export default ContactForm;
