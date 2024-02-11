import Link from "next/link";

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

    return <div>
        {links.map((link =>(
            <Link href={link.path} key={link.title}>{link.title}</Link>
        )))}
    </div>;
  };
  
  export default Links;