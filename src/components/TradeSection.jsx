import React from 'react';
import IconBitcoin from '../img/Icon-bitcoin.png';
import IconEthereum from '../img/Icon-ethereum.png';
import IconLitecoin from '../img/Icon-litecoin.png';
import ArrowRightCircle from '../img/Arrow-Right-Circle.png';

const TradeSection = () => {
  return (
    <div className='tradesection'>
        <div className='tradesection-upperBox'>
          <div className='tradesection-upperBox__inputBox'>
              <form action="">
                <input type="text" placeholder='Enter your hash rate' className='tradesection-upperBox__inputBox__input' />
                <select name="rate" id="rate"  className='tradesection-upperBox__inputBox__select'>
                  <option value="volvo" >TH/s</option>
                  <option value="saab" >TH/d</option>
                </select>
                <input type="submit" value="Calculate" className='tradesection-upperBox__inputBox__button' />
              </form>
          </div>

          <div className='tradesection-upperBox__textBox'>
            <h1 className='tradesection-upperBox__textBox__text'>ESTIMATED 24 HOUR REVENUE:</h1>

            <h1 className='tradesection-upperBox__textBox__bigText'>0.055 130 59 ETH <span className='tradesection-upperBox__textBox__bigText__dollars'>($1275)</span></h1>

            <p className='tradesection-upperBox__textBox__smallText'>Revenue will change based on mining difficulty and Ethereum price.</p>
          </div>
        </div>

        <div className="tradesection-centerBox">
          <h1 className="tradesection-centerBox__bigText" > Trade securely and market the high growth cryptocurrencies. </h1>
          <div className="tradesection-centerBox__cardSection">
            <div className="tradesection-centerBox__cardSection__card">
              <img src={IconBitcoin} alt="bitcoin logo" className="tradesection-centerBox__cardSection__card__image" />
              <h3 className="tradesection-centerBox__cardSection__card__bigText">Bitcoin <span className="tradesection-centerBox__cardSection__card__smallText">BTC</span></h3>
              <p className="tradesection-centerBox__cardSection__card__text">Digital currency in which a record of transactions is maintained.</p>
              <img src={ArrowRightCircle} alt="" className="tradesection-centerBox__cardSection__card__buttonImage" />
            </div>

            <div className="tradesection-centerBox__cardSection__card">
              <img src={IconEthereum} alt="bitcoin logo" className="tradesection-centerBox__cardSection__card__image" />
              <h3 className="tradesection-centerBox__cardSection__card__bigText">Ethereum <span className="tradesection-centerBox__cardSection__card__smallText">ETH</span></h3>
              <p className="tradesection-centerBox__cardSection__card__text">Blockchain technology to create and run decentralized digital applications.</p>
              <img src={ArrowRightCircle} alt="" className="tradesection-centerBox__cardSection__card__buttonImage" />
            </div>

            <div className="tradesection-centerBox__cardSection__card">
              <img src={IconLitecoin} alt="bitcoin logo" className="tradesection-centerBox__cardSection__card__image" />
              <h3 className="tradesection-centerBox__cardSection__card__bigText">Litecoin <span className="tradesection-centerBox__cardSection__card__smallText">LTC</span></h3>
              <p className="tradesection-centerBox__cardSection__card__text">Cryptocurrency that enables instant payments to anyone in the world.</p>
              <img src={ArrowRightCircle} alt="" className="tradesection-centerBox__cardSection__card__buttonImage" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default TradeSection