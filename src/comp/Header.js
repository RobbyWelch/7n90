import style from "./Header.module.scss"
import logo from "../media/logo_white.svg";
export default function Header() {

    return (<div className={style.outline}> 
        <img src={logo} className={style.logo}></img>
        <div className={style.dropDown}> 
            <h2 className={style.foreground}>
                Jordan Landing
            </h2>
        </div>
     </div>)
}