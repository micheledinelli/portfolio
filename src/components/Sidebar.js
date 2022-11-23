import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

import useSound from 'use-sound';
import uiClick from '../sounds/ui-click.mp3';

import "../css/Sidebar.css";

import { FaHeart } from 'react-icons/fa';

import axios from "axios";

const Sidebar = () => {

    const [play] = useSound(uiClick);
    const [likes, setLikes] = useState();

    const basePath = `http://localhost:3300/api/v1/likes`;

    useEffect(() => {
        axios.get(basePath)
            .then((response) => {
                setLikes(response.data[0]);
            }).catch((error) => {
                setLikes(error.message);
            });
    }, []);

    return(
        <Fade>
            <div className="SidebarContainer">
                <div className="SidebarHeader">
                    <div>
                        <h3>List of apis</h3>
                        <label className="label label-toggle" htmlFor="night-mode">
                            <div className="input-toggle">
                                <input className="input-checkbox" id="night-mode" type="checkbox" />
                                <span className="input-toggle-handle"></span>
                            </div>
                               
                        </label>
                    </div>
                    
                    <h3 style={{fontSize: "small"}}>/api/v1/</h3>
                </div>
                <ul>
                    <li onClick={play} className="Get">
                        /author
                        <p className="ApiDescription">Returns the author of this project</p>
                    </li>
                    <li onClick={play} className="Get">
                        /projects
                        <p className="ApiDescription">Returns the list the project made by the author</p>
                    </li>
                    <li onClick={play} className="Get">personal info</li>
                    <hr></hr>
                    <li onClick={play} className="Post">your like</li>
                </ul>
                <div className="SidebarFooter">
                    <p>@made with love 2022</p>
                    { likes && <p>{likes.numberOfLikes} <FaHeart /></p> }
                </div>
            </div>
        </Fade>
    );
};

export default Sidebar;