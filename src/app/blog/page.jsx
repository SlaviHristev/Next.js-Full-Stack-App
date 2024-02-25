import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css'
import { getPosts } from '@/lib/data';

export const metadata = {
  title: 'Blog Page',
  description: 'Blog description',
}

const Blog = async () => {
    const posts = await getPosts();

    return <div>
      <div className={styles.container}>
        {
          posts.map(post=>(
            <div className={styles.post} key={post.id}> 
            <PostCard post={post}/>
            </div>
          ))
        }
       
       
      </div>
    </div>;
  };
  
  export default Blog;