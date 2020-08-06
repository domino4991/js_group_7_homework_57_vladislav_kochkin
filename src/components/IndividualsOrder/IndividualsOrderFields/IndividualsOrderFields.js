import React from 'react';
import './IndividualOrderFields.css';
import IndividualsOrderField from "./IndividualsOrderField/IndividualsOrderField";

const IndividualsOrderFields = props => {
    return (
        <>
            {props.people.map((item, i) => <IndividualsOrderField
                key={item.id}
                name={item.name}
                amount={item.amount}
                nameValue={item.name}
                amountValue={item.amount}
                onChangeName={(event) => props.onChangeName(event, i)}
                onChangeAmount={(event) => props.onChangeAmount(event, i)}
                removePeople={(event) => props.removePeople(event, i)}
            />)}
            <button
                type="button"
                className="individual-add-field"
                onClick={(event) => props.onClickAddedField(event)}>Добавить</button>
            <div className="inputs-group">
                <label htmlFor="tips">Процент чаевых:
                    <input
                        type="number"
                        id="tips"
                        name="tips"
                        value={props.tips}
                        onChange={props.onChangeIndividualTipsAndDeliv}
                        required
                    /> %
                </label>
                <label htmlFor="delivery">Стоимость доставки:
                    <input
                        type="number"
                        id="delivery"
                        name="delivery"
                        value={props.delivery}
                        onChange={props.onChangeIndividualTipsAndDeliv}
                        required
                    /> сом
                </label>
            </div>
        </>
    );
};

export default IndividualsOrderFields;