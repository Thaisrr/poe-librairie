const Connexion = ({ isConnected, setConnected }) => {
    // Récupérer les props de nom

    const login = () => {
        setConnected( !isConnected );
        // Modifier la fonction login pour récupérer la valeur de l'input
        // On peut récupérer l'input par un selecteur, ou via un form
        // On modifie le hook du nom
    }

    return (
        <>
            {(!isConnected) && <input/> }
            <button onClick={login}>
                { (isConnected)? 'Déconnexion' : 'Connexion'}
            </button>
        </>
    )
}

export default Connexion;
