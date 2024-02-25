import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css'
import { getPosts } from '@/lib/data';

export const metadata = {
  title: 'Blog Page',
  description: 'Blog description',
}

const getData = async()=>{
  const res = await fetch('http://localhost:3000/api/blog');

  if(!res.ok){
    throw new Error("Something went wrong!")
  }
  return res.json();
}

const Blog = async () => {
    // const posts = await getPosts();

    const posts = await getData();

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