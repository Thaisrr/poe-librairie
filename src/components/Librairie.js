import '../style/Librairie.css';


const Librairie = () => {


    const shows = [
        {id: 1, title: "The Walking Dead", isWatched: true, image: 'Images/wd.jpg'},
        {id: 2, title: "The Mandalorian", isWatched: true, image: "Images/grogu.jpg"},
        {id: 3, title: "Boba Fett", isWatched: false, image: "Images/grogu.jpg"}
    ]
    
    const getColor = (status) => {
       
        return (status)? 'green' : 'red';
    }


    return (
    <>
        <h2>Mes livres</h2>

        {(!shows || shows.length === 0)? 
            <p>Votre librairie est vide :( </p>
            :
            <div className="grid">
            {
                shows.map(sh => (
                    <div className="card" key={sh.id}>
                        <img src={sh.image} alt={sh.title}/>
                        <span style={{color: getColor(sh.isWatched)}}>
                            {sh.title}
                        </span>
                    </div>
                ))
            }
            </div>
        }

    </>
    )
};

export default Librairie;