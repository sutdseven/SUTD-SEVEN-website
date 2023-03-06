import contactCSS from '../styles/contact.module.css'

const Contact = () => {
    return (
        <div className="contactContainer section">
            <div className="contactSubCard contactTitleContainer">
                <h2>Get In Touch</h2>
                <p>Feel free to reach out to us if you have any queries or if you would like to collaborate with us!</p>
            </div>
                <div className="contactInfoContainer contactSubCard">
                    <h3>Contact Information</h3>
                    <div className="contactMethod">
                        <img src="./email_logo.svg" alt="email icon" className="contactIcon" />
                        <a href="mailto:seven@ig.sutd.edu.sg">seven@ig.sutd.edu.sg</a>
                    </div>
                    <div className="contactMethod">
                        <img src="./Telegram_logo.svg" alt="telegram icon" className="contactIcon" />
                        <a href="https://t.me/aarontzy" target="_blank" rel="noopener">@aarontzy</a>
                    </div>
                </div>


  
        </div>
    );
}

export default Contact;