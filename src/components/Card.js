import '../styles/Card.css';

function Card({id, value, opened, guessed, clickHandler}){
    const className = () => {
        let className = ' closed';
        if (opened || guessed){
            className = ' opened';
        }
        return className;
    }
    return(
        <div className={'card' + className()} onClick={() => clickHandler(id)}>
            <div>{value}</div>
        </div>
    )
}

export default Card;
