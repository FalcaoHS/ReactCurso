import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1964}/>
                <Item marca="Pegeout" ano_lancamento={1985}/>
                <Item marca="Renault" ano_lancamento={1995}/>
                <Item marca = "Chevrolet" ano_lancamento={1225} />
                <Item />
            </ul>
        </>
    )
}

export default List