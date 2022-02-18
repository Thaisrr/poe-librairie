const Title = ({name}) => (
    <header>
        {(name)?
            <h1>Librairie de {name}</h1>
            :
            <h1>Ma Librairie</h1>
        }
    </header>
);

export default Title;

