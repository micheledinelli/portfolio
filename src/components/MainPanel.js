import React, { useEffect, useState } from "react";

import axios from "axios";

import "../css/MainPanel.css";
import "../css/Buttons.css";
import "../css/Cli.css";

import useSound from 'use-sound';
import uiClick from '../sounds/ui-click.mp3';

const MainPanel = () => {

    const basePath = `http://localhost:3300`;
    const apiVersion = `/api/v1`;

    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [cliRequest, setCliRequest] = useState(apiVersion);
    const [play] = useSound(uiClick);

    const handleClick = () => {
        play();
        setToggle(!toggle);
    }

    // useEffect(() => {

    //     axios.get(baseUrl)
    //         .then((response) => {
    //             setData(response.data[0]);
    //         });

    // }, []);

    const request = (path) => {
        const uri = `${basePath}${path}`;
        axios.get(uri)
            .then((response) => {
                setData(response.data[0]);
            }).catch((error) => {
                setData(error.message);
            });
    }

    const handleChange = ({target:{value}}) => {
        setCliRequest(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        play();
        request(cliRequest)
        setToggle(!toggle)
    }

    return(
        <div className="MainPanelContainer">
            <button className="BtnApis" onClick={handleClick}>
                New request
            </button>
            <div className="ApiResult" style={{whiteSpace: "pre-wrap"}}>
                {
                    toggle && 
                        <form onSubmit={handleSubmit}>
                            <textarea 
                                className="Cli" 
                                spellCheck={apiVersion} 
                                onChange={handleChange}
                                value={cliRequest}
                            />
                            <button className="Execute" type="submit">execute</button>
                        </form>

                }
                {
                    data && !toggle && JSON.stringify(data, null, 4).replaceAll("],\n\t\"", "],\n\n\t\"")
                }
            </div>
        </div>
        
    )
};

export default MainPanel;