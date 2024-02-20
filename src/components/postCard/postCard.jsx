import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = ({post}) =>{

    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src='https://images.pexels.com/photos/20056974/pexels-photo-20056974/free-photo-of-fortaleza-brazil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill className={styles.img} />
                </div>
                <span className={styles.date}>13.02.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link href='/blog/post' className={styles.link}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard