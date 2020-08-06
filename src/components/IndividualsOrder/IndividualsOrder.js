import React from 'react';
import './IndividualOrder.css';
import IndividualsOrderFields from "./IndividualsOrderFields/IndividualsOrderFields";
import IndividualTotalPrice from "./IndividualsOrderFields/IndividualTotalPrice/IndividualTotalPrice";

const IndividualsOrder = props => {
    return (
        <form className="individual-form" onSubmit={(event) => props.onSubmitIndividualForm(event)}>
            <IndividualsOrderFields
                people={props.people}
                onClickAddedField={props.onClickAddedField}
                onChangeName={props.onChangeName}
                onChangeAmount={props.onChangeAmount}
                removePeople={props.removePeople}
                tips={props.tips}
                delivery={props.delivery}
                onChangeIndividualTipsAndDeliv={(event) => props.onChangeIndividualTipsAndDeliv(event)}
            />
            <button type="submit" className="individual-order-btn">Рассчитать</button>
            <IndividualTotalPrice total={props.totalPrice} people={props.individPeople}/>
        </form>
    );
};

export default IndividualsOrder;