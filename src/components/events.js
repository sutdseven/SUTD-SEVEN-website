import { useEffect, useState } from "react";
import eventsCSS from '../styles/events.module.css'

const Events = () => {
   
    return ( 
        <div className={eventsCSS.container}>
            <h2>Events</h2>
            
            <div className={eventsCSS.card}>
                <div className={eventsCSS.cardText}>
                    <h3 className="eventDetailsTitle">Sh1tty Startups</h3>
                    <p>A one-month startup springboard that aims to incorporate the rapid prototyping sprint ideology to energise the building process of student startups within SUTD. VIE will play as mentors during the bi-weekly mastermind sessions, providing crucial feedback on startups’ progress on ideation, validation and launch.</p>
                </div>
                <div className={eventsCSS.cardImg}>
                    <img alt="" src="imgPlaceholder.png" />
                </div>
                
            </div>
            
            <div className={eventsCSS.card}>
                <div className={eventsCSS.cardText}>
                    <h3>Fireside Series</h3>
                    <p>Periodic sharing sessions with notable speakers from entrepreneurship backgrounds and adjacent industries, including VC analysts and executives, startup founders, accelerator and incubator managers, etc. with 4 or more events a year. VIE helps to connect SEVEN with external partners and collaborators to conduct the sharing seminars.</p>
                </div>
                <div className={eventsCSS.cardImg}>
                    <img  alt="" src="imgPlaceholder.png" />
                </div>
                
            </div>

            <div className={eventsCSS.card}>
                <div className={eventsCSS.cardText}>
                    <h3 className="eventDetailsTitle">Masterminds</h3>
                    <p>Deeply insightful focus group sessions with members, joined exclusively by pre-existing and aspiring founders, encouraging personal sharings of their startup journey and process with an emphasis of learning from failure. VIE also connects SEVEN members to their incubating startups’ key founders and executives, allowing free exchange of wisdom within the community.</p>
                </div>
                <div className={eventsCSS.cardImg}>
                    <img alt="" src="imgPlaceholder.png" />
                </div>
            </div>
        </div>
     );
}
 
export default Events;