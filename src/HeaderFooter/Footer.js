import React from "react";

const Footer = () => {
    return (
        <footer className="grid mx-0 md:px-6">
            <div className="col-12 md:col-6">
                <h4>Company Address</h4>
                <address>
                    Kanadiya Road, <br />
                    Indore
                </address>
                <p>Email: <a href="mailto:kidsland@gmail.com" className="p-text-light">kidsland@gmail.com</a></p>
            </div>
            <div className="col-12 md:col-6">
                <h4>Second Address</h4>
                <address>
                    113, Alok Nagar<br />
                    Indore
                </address>
                <p>Contact: <a href="tel:+9131513954" className="p-text-light">9131513954</a></p>
            </div>
        </footer>
    );
};

export default Footer;
