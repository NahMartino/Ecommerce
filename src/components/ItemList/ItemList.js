import Item from '../Item/Item.js'
import './ItemList.css'

const ItemList = ({products}) => {
    return(
        <ul>
            {products.map(prod => <Item key={prod.id} {...prod}/> )}
        </ul>
    )
}

export default ItemList