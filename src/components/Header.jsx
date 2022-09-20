import React from 'react'
import '../sass/main.scss';
import Arrow from '../img/Arrow-Right.png';

const Header = () => {
  return (
    <div className='header'>

        <div className='header-content'>
            <div className='header-content__textContainer'> 
                <div className='header-content__textContainer__Info'>
                    <span className='header-content__textContainer__Info__save'>75% save</span>
                    <span className='header-content__textContainer__Info__text'>For the Black Friday weekend</span>
                </div>

                <h1 className='header-content__textContainer__bigText'>Fastest and secure platform to invest in crypto</h1>

                <p className='header-content__textContainer__smallText'>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>

                <button className='header-content__textContainer__button'>
                    Try for FREE 
                    <span className='header-content__textContainer__button__span'>
                        <img className='header-content__textContainer__button__span__arrow' src={Arrow} alt="" />
                    </span> 
                </button>
            </div>

            <div className='header-content__image'>

            </div>
        </div>
    </div>
  )
}

export default Header