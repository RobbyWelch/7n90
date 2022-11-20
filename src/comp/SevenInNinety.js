import style from "./SevenInNinety.module.scss"



export default function SevenInNinety(props){
    // this is going to get the objects from the api
    // this is also going to be able to delete said Items
    function makeActionItem(obj){
        return(
            <div className={style.item}>
                <div className={style.titleRow}>
                    <h3 className={style.date}>{obj.date}</h3>
                    <h3> {obj.membership} </h3>
                </div>
                <h3>Day {obj.day}</h3>
                <p>{obj.taskDesc}</p>
                <div className={style.buttonRow}>
                    <div className={style.clearButton}>Complete</div>
                    <div className={style.snoozeButton}>Snooze</div>
                </div>
                
            </div>
        )
    }
    async function makeListItems(){
        let url = "https://script.googleusercontent.com/macros/echo?user_content_key=ly3CsOTmGCJQvImd8WHNbpq_Bg5cY6VCZhoaR1vZhhWpJW3WEsMcd7YXQx0wNVmGTsBsXuvUNPxzHt9DAgt1cq7T2SymXsJCm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAguqLde5pmygIkE0pavsjrA8ckO-gKnQFHwM8KfyaPSbgjQ1k9uhRLjQPumTw2h1pScRvalJCHT3s3Hk23mHyggaIhVygfd6dz9Jw9Md8uu&lib=MC3Ya_pQwg8xbMDNU717AkI3kkJYbCxHf";
        let data = await fetch(url);
        console.log(data.body);
        
    }
    return (
    <div className={style.frame}>
        {makeListItems()}
        <h1>7n90</h1> 
        <div className={style.list}> 
            <div className={style.item}>
                item
            </div>
            <div className={style.item}>
                item
            </div>
            <div className={style.item}>
                item
            </div>
            <div className={style.item}>
                item
            </div>
            <div className={style.item}>
                item
            </div>
            <div className={style.item}>
                item
            </div>
            <div className={style.item}>
                item
            </div>
            <div className={style.item}>
                item
            </div>
        
        </div>
        
        
     </div>)
}