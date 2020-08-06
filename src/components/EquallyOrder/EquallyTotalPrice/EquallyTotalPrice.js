import React from 'react';
import './EquallyTotalPrice.css';

const EquallyTotalPrice = props => {
    return (
        <div className="equally-total-price">
            <p>Общая сумма: {props.totalPrice}</p>
            <p>Количество человек: {props.people}</p>
            <p>Каждый платит по: {props.equallyTotalPrice}</p>
        </div>
    );
};

export default EquallyTotalPrice;