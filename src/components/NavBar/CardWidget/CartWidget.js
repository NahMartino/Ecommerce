import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

const CartWidget = (props) => {
    return(
        <a class="carro"><FontAwesomeIcon icon={faCartShopping} />{props.number}</a>
   )
}

export default CartWidget;