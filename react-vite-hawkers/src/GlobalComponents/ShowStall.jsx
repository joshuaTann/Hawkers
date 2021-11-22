import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Button, Card, CardActions, CardContent, CardMedia, Chip, Typography, Grid } from "@mui/material";
import { Box } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

function ShowStall() {
    const [fetchState, setFetchState] = useState("loading");
    const [hawker, setHawker] = useState([]);
    const isSubscribed = useRef(true);
    const navigate = useNavigate();

    const back = () => {
        navigate("/Hawkers")
    }

    const { id } = useParams()

    //get the list of hawkers
    useEffect(() => {
        const fetchHawker = async () => {
            const URL = `http://localhost:8000/Hawkers/${id}`;
            try {
                setFetchState("loading");
                const data = await axios.get(URL);
                console.log("data", data.data);
                if (!isSubscribed) {
                    console.log("notSubbed");
                    return null;
                }
                setHawker(data.data);
                setFetchState("complete");
            }
            catch (error) {
                setFetchState("error");
                console.log("error situation", error);
                navigate("/Hawkers");
            }
        }
        fetchHawker();
        return () => {
            isSubscribed.current = false;
        }
    }, []);

    const deleteStall = async () => {
        const response = await fetch(`http://localhost:8000/Hawkers/${id}`, {
            method: "DELETE"
        });
        navigate("/Hawkers");
    }


    const Openornot = () => {
        if (hawker.AmIOpen === true) {
            return ("I am open today")
        } else {
            return ("I am closed today")
        }
    }


    return (
        <>
            <h1>{hawker.Name}</h1>
            <img src={hawker.Image}></img>
            <div>{hawker.AddressLine1}</div>
            <div>{hawker.AddressLine2}</div>
            <div>{Openornot()}</div>
            <div>{hawker.OpeningTime} to {hawker.ClosingTime}</div>
            <Button onClick={() => back()}>Back</Button>
            <Button onClick={() => deleteStall()}>Delete</Button>
            <Link to={`/Hawkers/${id}/edit/`}>
                <Button>Edit</Button>
            </Link>
        </>
    )
}

export default ShowStall