const Connexion = ({ isConnected, setConnected }) => {

    const login = () => setConnected( !isConnected );

    return (
        <>
            <button onClick={login}>
                { (isConnected)? 'Déconnexion' : 'Connexion'}
            </button>
        </>
    )
}

export default Connexion;
