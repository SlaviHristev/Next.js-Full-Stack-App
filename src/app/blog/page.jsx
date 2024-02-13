import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css'


const Blog = () => {
    return <div>
      <div className={styles.container}>
        <div className={styles.post}>
        <PostCard/>
        </div>
        <div className={styles.post}>
        <PostCard/>
        </div>
        <div className={styles.post}>
        <PostCard/>
        </div>
        <div className={styles.post}>
        <PostCard/>
        </div>
        <div className={styles.post}>
        <PostCard/>
        </div>
       
      </div>
    </div>;
  };
  
  export default Blog;