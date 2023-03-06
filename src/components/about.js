import AboutCSS from '../styles/about.module.css'

const About = () => {
    return ( 
        <div className={AboutCSS.container}>
            <h1>What is SEVEN?</h1>
            <p className={AboutCSS.text}>SEVEN is SUTD’s premier entrepreneurship network, supported both by its Masters of Technology Entrepreneurship programme (STEP) and SUTD’s Venture, Innovation and Entrepreneurship (VIE) office. We represents the entrepreneurship community within SUTD’s student body, spearheading initiatives to facilitate and develop its vibrant startup ecosystem.</p>
            <div className={AboutCSS.logoContainer}>
                <img src="./STEP_logo.svg" alt="SUTD Technology Entrepreneurship Programme logo"/>
                <img src="./SUTD_VIE_Logo.png" alt="SUTD’s Venture, Innovation and Entrepreneurship office logo"/>
            </div>
        </div>
     );
}
 
export default About;