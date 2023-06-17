import React from "react";
import './Post.css';
import InputOption from "./InputOption";
import { auth } from './firebase'
import {Name} from './SignUp'

export default function Post({name,description,message,photoUrl}){
    return(
        <div className="post">
            <div className="post_header">
                <div className="post_info">
                    <h2>{Name}</h2>
                    <h5>{auth.currentUser.email}</h5>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>
            <div className="post_buttons">
                <InputOption title='Like' />
                <InputOption title='Comment' />
                <InputOption title='Share' />
                <InputOption title='Send' />
            </div>
        </div>
    )
}