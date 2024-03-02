"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from 'bcryptjs'


export const addPost = async (prevState,formData) => {

    const { title, desc, slug, userId } = Object.fromEntries(formData);

    try {
        connectDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        });
        await newPost.save();
        revalidatePath('/blog');
        revalidatePath('/admin');
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = async (formData) => {

    const { id } = Object.fromEntries(formData);

    try {
        connectDb();
        await Post.findByIdAndDelete(id);
        revalidatePath('/blog');
        revalidatePath('/admin');
    } catch (error) {
        console.log(error);
    }
}

export const handleGithubLogin = async () => {

    await signIn('github')
}

export const handleLogout = async () => {

    await signOut();
}

export const register = async (previousState,formData) => {
    const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);
    if (password !== passwordRepeat) {
        return { error: 'Passwords do not match!' }
    };
    try {
        connectDb();

        const user = await User.findOne({ username });

        if (user) {
            return { error: "Username already exists!" }
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPasword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPasword,
            img
        });
        await newUser.save();
        console.log('saved to db');

        return { success: true };
    } catch (error) {
        console.log(error);
        return { error: 'Something went wrong!' }
    }
}

export const login = async (prevState,formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });

    } catch (error) {
        console.log(error);
        if(error.message.includes("CredentialsSignin")){
            return {error: "Invalid username or password!"}
        }
        throw error;
    }
}


export const addUser = async (prevState,formData) => {

    const { username,email,password,img } = Object.fromEntries(formData);

    try {
        connectDb();
        const newUser = new User({
            username,email,password,img
        });
        await newUser.save();
        revalidatePath('/admin')
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (formData) => {

    const { id } = Object.fromEntries(formData);

    try {
        connectDb();
        await Post.deleteMany({userId:id})
        await User.findByIdAndDelete(id);
        revalidatePath('/admin')
    } catch (error) {
        console.log(error);
    }
}