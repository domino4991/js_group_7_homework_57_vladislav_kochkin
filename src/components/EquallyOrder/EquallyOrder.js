import React from 'react';
import EquallyOrderForm from "./EquallyOrderFields/EquallyOrderForm";

const EquallyOrder = props => {
    return (
        <>
            <EquallyOrderForm
                people={props.equallyOrder.people}
                amount={props.equallyOrder.amount}
                onChangeEqually={event => props.onChangeEqually(event)}
                onSubmitEquallyForm={event => props.onSubmitEquallyForm(event)}
            />
            {props.equallyPrice}
        </>
    );
};

export default EquallyOrder;