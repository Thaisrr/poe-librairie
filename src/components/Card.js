const Card = ({title, txt, action, img}) => (
    <div className="card">
        <div className="card-header">
            <img src={img} alt={title}/>
        </div>
        <div className="card-body">
            <h3>{title}</h3>
            <p>{txt}</p>
            {(action) && <button onClick={() => action()}>Clic</button>}
        </div>

    </div>
)
