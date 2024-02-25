
import Link from "next/link";
import Links from "./links/Links";
import styles from './Navbar.module.css'
import { auth } from "@/lib/auth";

const Navbar = async () => {
    const session = await auth();
    return (
    <div className={styles.container}>
        <Link href='/'><div className={styles.logo}>Logo</div></Link>
        <div>
            <Links session={session}/>
        </div>
    </div>
    )
  };
  
  export default Navbar;