import Link from "next/link";
import styles from './Links.module.css';
import NavLink from "./navLink/NavLink";

const Links = ({children}) => {

    const links = [
        {
            title:"Home",
            path:'/',
        },
        {
            title:"About",
            path:'/about',
        },
        {
            title:"Contact",
            path:'/contact',
        },
        {
            title:"Blog",
            path:'/blog',
        }
    ]

    return <div className={styles.links}>
        {links.map((link =>(
            <NavLink item={link} key={link.title}/>
        )))}
    </div>;
  };
  
  export default Links;