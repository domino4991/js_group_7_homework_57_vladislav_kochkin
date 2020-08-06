import React from 'react';
import './EquallyOrderFields.css';

const EquallyOrderForm = props => {
    return (
        <form className="equally-order-fields" onSubmit={props.onSubmitEquallyForm}>
            <div className="input-wrap">
                    <input
                        type="number"
                        id="people"
                        name="people"
                        value={props.people}
                        onChange={props.onChangeEqually}
                        required
                        placeholder="Количество человек"
                    />
            </div>
            <div className="input-wrap">
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={props.amount}
                        onChange={props.onChangeEqually}
                        required
                        placeholder="Сумма заказа"
                    />
            </div>
            <div className="input-wrap">
                    <input
                        type="number"
                        id="tips"
                        name="tips"
                        onChange={props.onChangeEqually}
                        required
                        placeholder="Процент чаевых"
                    />
            </div>
            <div className="input-wrap">
                    <input
                        type="number"
                        id="delivery"
                        name="delivery"
                        onChange={props.onChangeEqually}
                        required
                        placeholder="Стоимость доставки"
                    />
            </div>
            <button type="submit" className="equally-order-btn">Расчитать</button>
        </form>
    );
};

export default EquallyOrderForm;