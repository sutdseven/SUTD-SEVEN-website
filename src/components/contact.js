import contactCSS from '../styles/contact.module.css'

const Contact = () => {
    return (
        <div className={contactCSS.container}>
            <div className={contactCSS.leftSection}>
                <h3>Get In Touch</h3>
                <p>Feel free to reach out to us if you have any queries or if you would like to collaborate with us!</p>
            </div>
                <div className={contactCSS.rightSection}>
                    <h3>Contact Information</h3>
                    <div className={contactCSS.contact}>
                        <img src="./email_logo.svg" alt="email icon" />
                        <a href="mailto:seven@ig.sutd.edu.sg">seven@ig.sutd.edu.sg</a>
                    </div>
                    <div className={contactCSS.contact}>
                        <img src="./Telegram_logo.svg" alt="telegram icon" />
                        <a href="https://t.me/aarontzy" target="_blank" rel="noopener">@aarontzy</a>
                    </div>
                </div>


  
        </div>
    );
}

export default Contact;