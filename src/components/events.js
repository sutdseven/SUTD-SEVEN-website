import { useEffect, useState } from "react";

const Events = () => {
    const [eventName, setEventName] = useState("Sh1tty Startups")
    const [eventDesc, setEventDesc] = useState("A one-month startup springboard that aims to incorporate the rapid prototyping sprint ideology to energise the building process of student startups within SUTD. VIE will play as mentors during the bi-weekly mastermind sessions, providing crucial feedback on startups’ progress on ideation, validation and launch.")
    const [eventImg, setEventImg] = useState("./imgPlaceholder.png")
    
    const selectEvent = (event) => {
        const events = ["sh1ttyStartups", "firesideSeries", "masterminds"]
        events.forEach(evt => {
            document.getElementById(evt).style.backgroundColor=`${(evt === event ? "#ffb758" : " #220c07")}`;
            document.getElementById(evt).style.color=`${(evt === event ? "#220c07" : " #ffffff")}`;
            document.getElementById(evt).style.fontWeight=`${(evt === event ? "600" : " 400")}`;
            })

        switch (event) {
            case "sh1ttyStartups":
                setEventName("Sh1tty Startups");
                setEventDesc("A one-month startup springboard that aims to incorporate the rapid prototyping sprint ideology to energise the building process of student startups within SUTD. VIE will play as mentors during the bi-weekly mastermind sessions, providing crucial feedback on startups’ progress on ideation, validation and launch.");
                setEventImg("./imgPlaceholder.png");

                break;
            case "firesideSeries":
                setEventName("Fireside Series");
                setEventDesc("Periodic sharing sessions with notable speakers from entrepreneurship backgrounds and adjacent industries, including VC analysts and executives, startup founders, accelerator and incubator managers, etc. with 4 or more events a year. \n \n VIE helps to connect SEVEN with external partners and collaborators to conduct the sharing seminars.");
                setEventImg("./imgPlaceholder.png");
                break;
            case "masterminds":
                setEventName("Masterminds");
                setEventDesc("Deeply insightful focus group sessions with members, joined exclusively by pre-existing and aspiring founders, encouraging personal sharings of their startup journey and process with an emphasis of learning from failure. \n \n VIE also connects SEVEN members to their incubating startups’ key founders and executives, allowing free exchange of wisdom within the community.");
                setEventImg("./imgPlaceholder.png");
                break;
            }
            
            
    }

    useEffect(() => {
                selectEvent("sh1ttyStartups")
            }, [])
    return ( 
        <div className="eventsContainer section">
            <h2 className="eventsTitleHeader">Events</h2>
            <div className="eventSelectionContainer">
                <button id="sh1ttyStartups" className="eventSelector" onClick={() => selectEvent("sh1ttyStartups")}>Sh1tty Startups</button>
                <button id="firesideSeries" className="eventSelector" onClick={() => selectEvent("firesideSeries")}>Fireside Series</button>
                <button id="masterminds" className="eventSelector" onClick={() => selectEvent("masterminds")}>Masterminds</button>
            </div>
            <div className="eventDetailsContainer">
                <div className="eventDetailsText">
                    <h3 className="eventDetailsTitle">{eventName}</h3>
                    <p>{eventDesc}</p>
                </div>
                <div className="eventImgContainer">
                    <img className="eventImg" alt="" src={eventImg} />
                </div>
                
            </div>
        </div>
     );
}
 
export default Events;