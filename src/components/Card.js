import '../style/Card.css'

const Card = ({title, txt, action, img, status}) => (
    <div className="card">
        <div className="card-header">
            <img src={img} alt={title}/>
        </div>
        <div className="card-body">
            <h3 style={{color: (status)? 'green' : 'red'}}>{title}</h3>
            <p>{txt}</p>
            {(action) && <button onClick={() => action()}>Clic</button>}
        </div>
    </div>
)
export default Card;
