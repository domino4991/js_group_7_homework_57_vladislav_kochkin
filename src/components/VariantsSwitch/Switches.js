import React from 'react';
import './Switches.css';

const Switches = props => {
    return (
        <div className="switches">
            <h4 className="switches__title">Сумма заказа считается:</h4>
            <input
                type="radio"
                name="type-order"
                id="equally-radio"
                value="equally"
                checked={props.value === 'equally'}
                onChange={event => props.onChangeSwitch(event)}/>
            <label htmlFor="equally-radio" className="switches-radio">Поровну между всеми участниками</label>
            <input
                type="radio"
                name="type-order"
                id="individual-radio"
                value="individual"
                checked={props.value === 'individual'}
                onChange={event => props.onChangeSwitch(event)}/>
            <label htmlFor="individual-radio" className="switches-radio">Каждому индивидуально</label>
        </div>
    );
};

export default Switches;