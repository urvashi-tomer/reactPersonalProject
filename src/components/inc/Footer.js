import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr />
                        <p className="text-white mb-1">
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/">Contact</Link></div>
                        <div><Link to="/">Blog</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr />
                        <div><p className="text-white mb-1">#64, Bangalore Karnataka. India</p></div>
                        <div><p className="text-white mb-1">+91 123456789</p></div>
                        <div><p className="text-white mb-1">+91 987654321</p></div>
                        <div><p className="text-white mb-1">email@domain.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;