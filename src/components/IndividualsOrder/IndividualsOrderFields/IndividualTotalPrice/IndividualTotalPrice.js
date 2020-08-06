import React from 'react';
import './IndividualTotalPrice.css';

const IndividualTotalPrice = props => {
    let isTotalPrice = null;
    if(props.total !== 0) {
        isTotalPrice = (
            <>
                <p>Общая сумма: {props.total}</p>
                <ul className="individual-list">
                    {props.people.map((item, i) => <li className="individual-list__item" key={item + i}>{item.name}: <strong>{item.amount}</strong></li>)}
                </ul>
            </>
        )
    }
    return (
        <div className="individual-total-price">
            {isTotalPrice}
        </div>
    );
};

export default IndividualTotalPrice;