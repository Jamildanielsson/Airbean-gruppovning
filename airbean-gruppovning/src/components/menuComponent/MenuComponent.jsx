import './menuComponent.css';
import Addbutton from '../../assets/graphics/add.svg';
import { addProduct } from '../../Actions/Actiontest';
import { useDispatch } from 'react-redux';

function MenuComponent(props){
    const dispatch  = useDispatch()

    const order = [{
        name: props.item.title,
        price: props.item.price,
    }]
    
    function saveCoffeToStore(){
        dispatch(addProduct(order))
    }

    return(
        <section className="menuComponent">
            <section className='menu__flex'>
                <article onClick={ saveCoffeToStore }><img src={Addbutton} alt="add"  className='menu__img'/> </article>
                    <section className='menu__text'>
                        <section className='menu__titles'>
                            <h1 className='menu__title'>{props.item.title}</h1>
                            <p className='menu__title menu__price'>{props.item.price} kr </p>
                        </section>
                        <p className='menu__text'>Bryggd på månadens bönor</p>
                    </section>
            </section>
        </section>
    )
}

export default MenuComponent