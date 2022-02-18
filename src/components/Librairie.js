import '../style/Librairie.css';
import Card from "./Card.js";
import {useEffect, useState} from "react";
import axios from "axios";

const Librairie = () => {
    const api = "http://localhost:4600/shows";
    const [shows, setShows] = useState([]);

    function getShows() {
        axios.get(api).then( ({data}) => {
            setShows(data);
        })
        /* ( pour cette version, il faut faire une async function
        const {data} = await axios.get(api);
        setShows(data);
         */
    }

    useEffect(() => {
        getShows();
    }, []);

    return (
    <>
        <h2>Mes Séries</h2>
        {(!shows || shows.length === 0)?
            <p>Votre librairie est vide :( </p>
            :
            <div className="grid">
                {shows.map(sh => <Card key={sh.id} title={sh.title} img={sh.image} status={sh.isWatched}/>)}
            </div>
        }
    </>
    )
};

export default Librairie;
