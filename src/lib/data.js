import { Post, User } from "./models";
import { connectDb } from "./utils";




export const getPosts = async () =>{
    try {
        connectDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch posts!')
    }
}

export const getPost = async (slug) =>{
    try {
        connectDb();
        const post = await Post.findOne({slug});
        return post;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch post!')
    }
}

export const getUser = async (id) =>{
    try {
        connectDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch user!')
    }
};

export const getUsers = async () =>{
    try {
        connectDb();
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch users!')
    }
}