import React from "react";
import styled from "styled-components";

const Contact = () => {
    const Wrapper =styled.section`
    padding: 4rem 0 5rem 0;

    .container{
        margin-top: 5rem;
        text-align: center;
    }
 `;
    return( 
    <Wrapper>
    <h2 className="common-heading"> Feel Free To Contact Us</h2> 
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29539.537233926894!2d73.14981113930429!3d22.261234866585184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc66f49a34f8b%3A0xd24e84778941c35f!2sKalali%2C%20Vadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1679042706827!5m2!1sen!2sin" 
    width="100%"
    height="450"
    style={{border:0}} 
    allowFullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">

    </iframe>
    <div className="cointainer">
        <div className="contact-forms">
            <form action ="https://formspree.io/f/xvonqjbk" method="post" className="contact-input">

                <input type="text" name="username" placeholder="username" autoComplete="off" required/>

                <input type="Email" name="Email" placeholder="Email" autoComplete="off" required/>

                <textarea name="message" cols="30" rows="6" autoComplete="off" required/>
            
            <input type ="submit" value="send" />
            </form>
        </div>
    </div>
    </Wrapper>
    );
}
export default Contact;