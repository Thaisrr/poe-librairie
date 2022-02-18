const Connexion = ({ isConnected, setConnected, setName }) => {
    // Récupérer les props de nom

    const login = (event) => {
        event.preventDefault();
        const input = event.target[0];
        if(input.value) {
            setName(input.value);
            setConnected(true);
            input.value = '';
        } else {
            alert("Identifiants invalides")
        }
    }

    const logout = () => {
        setConnected(false);
        setName('');
    }

    return (
        <>
            {(!isConnected) ?
                (<form onSubmit={login}>
                    <input/>
                    <button type="submit">Connexion</button>
                </form>)
                :
                <button onClick={logout}>Déconnexion</button>
            }
        </>
    )
}

export default Connexion;
