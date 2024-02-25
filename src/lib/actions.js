import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectDb } from "./utils";

export const addPost = async(formData) =>{
    "use server";
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
    "use server";
    const {id} = Object.fromEntries(formData);

    try {
        connectDb();
        await Post.findByIdAndDelete(id);
        revalidatePath('/blog')
    } catch (error) {
        console.log(error);        
    }
}