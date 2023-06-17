"use client";
import React,{useState} from "react"
import {useEffect} from "react";
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import {db} from './firebase';
import firebase from "firebase/compat/app";


export default function Feed(){
    
    const [posts,setPosts] = useState([])
    const [input,setInput] = useState('')

    useEffect(() =>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        );
    },[])
 
    const sendPost = (e) =>{
        e.preventDefault()
        db.collection("posts").add({
            name: 'Dev Pathak',
            description: 'this is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

    setInput("");
    }

    return(
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="input"></input>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption title='Photos'/>
                    <InputOption title='Videos'/>
                    <InputOption title='Events'/>
                    <InputOption title='Write Article'/>
                </div>
            </div>   
            {posts.map(({id,data:{name,description,message,photoUrl}})=>(
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}      
        </div>
    )
}