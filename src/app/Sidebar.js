import React from "react";
import "./Sidebar.css";
import { auth } from './firebase'
import {Name} from './SignUp'

export default function Sidebar(){
    const recentItem = (props) =>(
        <div className="sidebar_recentItem">
            <p>#  {props}</p>
        </div>
    )

    const signout = () => {
        auth.signOut()
    }

    return(
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://tse4.mm.bing.net/th?id=OIP.JHm9Bhz6m7UrfbPMsCddsgHaE7&pid=Api&P=0" alt=""/>
                <h2>{Name}</h2>
                <h4>{auth.currentUser.email}</h4>
            </div>
            <div className="sidebar_stats">
                    <div className="sidebar_stat">
                        <p>Who viewed you</p>
                        <p className="sidebar_statNumber">4455</p>
                    </div>
                    <div className="sidebar_stat">
                        <p>Views on ost</p>
                        <p className="sidebar_statNumber">2222</p>
                    </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('react.js')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
            <div className="signout">
                <button onClick={signout}>SignOut</button>
            </div>
        </div>
    )
}