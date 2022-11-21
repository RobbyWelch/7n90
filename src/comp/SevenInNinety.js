import style from "./SevenInNinety.module.scss"
import { useState, useEffect } from "react"


export default function SevenInNinety(props){
    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        async function makeListItems(){
            let url = "https://script.googleusercontent.com/macros/echo?user_content_key=ly3CsOTmGCJQvImd8WHNbpq_Bg5cY6VCZhoaR1vZhhWpJW3WEsMcd7YXQx0wNVmGTsBsXuvUNPxzHt9DAgt1cq7T2SymXsJCm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAguqLde5pmygIkE0pavsjrA8ckO-gKnQFHwM8KfyaPSbgjQ1k9uhRLjQPumTw2h1pScRvalJCHT3s3Hk23mHyggaIhVygfd6dz9Jw9Md8uu&lib=MC3Ya_pQwg8xbMDNU717AkI3kkJYbCxHf";
            let data = await fetch(url);
            data = await data.json();
            console.log(data)
            setJobs(data);
        }
        makeListItems();
    });
    // this is going to get the objects from the api
    // this is also going to be able to delete said Items
    function makeActionItem(obj){
        return(
            <div key={obj.day + obj.first + obj.last + Math.random()} className={style.item}>
                <div className={style.titleRow}>
                    <h3 className={style.date}>{obj.date}</h3>
                    <h3> {obj.membership} </h3>
                </div>
                <h3>{obj.first + " " + obj.last}</h3>
                <h3>Day {obj.day}</h3>
                <p>{obj.desc}</p>
                <div className={style.buttonRow}>
                    <div className={style.clearButton}>Complete</div>
                    <div className={style.snoozeButton}>Snooze</div>
                </div>
                
            </div>
        )
    }
    
    // makeListItems();
    return (
    <div className={style.frame}>
        <h1>7n90</h1> 
        <div className={style.list}> 
        {
            jobs.map((obj) => makeActionItem(obj))
        }
        </div>
        <div className={style.insertNew}>
            <div className={style.newButton}>Create</div>

        </div>
     </div>)
}