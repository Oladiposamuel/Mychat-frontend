import React from 'react';
import '../sass/main.scss';
import chart from '../img/Icon-chart.png';
import globe from '../img/Icon-globe.png';
import person from '../img/Icon-person.png';

const whySection = () => {
  return (
    <div className='whysection'>
        <div className='row1'>
            <div className='row1-column'>
                <img src={chart} alt="img" className='row1-column__image'/>
                <div className='row1-column__textContent'>
                    <h1 className='row1-column__textContent__text1'>$30B</h1>
                    <p className='row1-column__textContent__text2'>Digital currency Exchanged</p>
                </div>
            </div>

            <div className='row1-column'>
                <img src={globe} alt="img" className='row1-column__image'/>
                <div className='row1-column__textContent'>
                    <h1 className='row1-column__textContent__text1'>10M+</h1>
                    <p className='row1-column__textContent__text2'>Trusted Wallets Investor</p>
                </div>
            </div>

            <div className='row1-column'>
                <img src={person} alt="img" className='row1-column__image'/>
                <div className='row1-column__textContent'>
                    <h1 className='row1-column__textContent__text1'>195</h1>
                    <p className='row1-column__textContent__text2'>Countries Supported</p>
                </div>
            </div>
        </div>

        <div className='row2'>
            <div className='row2-column1'>

            </div>

            <div className='row2-column2'>
                <h1 className='row2-column2__bigText'>Why you should choose CRAPPO</h1>
                <p className='row2-column2__smallText'>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
                <button  className='row2-column2__button'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default whySection