import React from 'react';
import './IndividualOrderField.css';

const IndividualsOrderField = props => {
    return (
        <div className="individual-field">
            <input
                type="text"
                name="name"
                value={props.nameValue}
                placeholder="Введите имя"
                onChange={props.onChangeName}
                required
            />
            <label>
                <input
                    type="number"
                    name="amount"
                    value={props.amountValue}
                    placeholder="Введите сумму"
                    onChange={props.onChangeAmount}
                    required
                /> сом
            </label>
            <button type="button" className="individual-remove-btn" onClick={props.removePeople}>Удалить</button>
        </div>
    );
};

export default IndividualsOrderField;