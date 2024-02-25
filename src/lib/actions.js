"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectDb } from "./utils";
import { signIn, signOut } from "./auth";

export const addPost = async(formData) =>{

    const {title,desc,slug,userId} = Object.fromEntries(formData);

    try {
        connectDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        });
        await newPost.save();
        revalidatePath('/blog')
    } catch (error) {
        console.log(error);        
    }
}

export const deletePost = async(formData) =>{

    const {id} = Object.fromEntries(formData);

    try {
        connectDb();
        await Post.findByIdAndDelete(id);
        revalidatePath('/blog')
    } catch (error) {
        console.log(error);        
    }
}

export const handleGithubLogin = async () =>{

    await signIn('github')
  }

  export const handleLogout = async () =>{

    await signOut();
  }s