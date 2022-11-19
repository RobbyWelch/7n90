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
    return (
    <div className={style.frame}>
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