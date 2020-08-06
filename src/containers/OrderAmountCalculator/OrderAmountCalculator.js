import React, {useState} from 'react';
import './OrderAmountCalculator.css';
import Switches from "../../components/VariantsSwitch/Switches";
import EquallyOrder from "../../components/EquallyOrder/EquallyOrder";
import EquallyTotalPrice from "../../components/EquallyOrder/EquallyTotalPrice/EquallyTotalPrice";
import IndividualsOrder from "../../components/IndividualsOrder/IndividualsOrder";
import {nanoid} from "nanoid";


const OrderAmountCalculator = () => {
    const [equallyOrder, setEquallyOrder] = useState({
        people: '',
        amount: '',
        tips: 0,
        delivery: 0
    });
    const [equallyTotalPrice, setEquallyTotalPrice] = useState({
       totalPrice: 0,
       equallyPrice: 0
    });
    const [individualOrder, setIndividualOrder] = useState({
        people: [],
        tips: 0,
        delivery: 0
    });

    const [individualTotalPrice, setIndividualTotalPrice] = useState({
        totalPrice: 0,
        peopleTotalPrice: []
    });
    const [switches, setSwitches] = useState('equally');

    const onChangeSwitchRadio = event => {
        setSwitches(event.target.value);
    };

    const onChangeEqually = event => {
        const value = event.target.value;
        const name = event.target.name;
        setEquallyOrder(state => ({
            ...state,
            [name]: value
        }));
    };

    const onSubmitEquallyForm = event => {
        event.preventDefault();
        const isEmptyField = Object.keys(equallyOrder).filter((key) => equallyOrder[key] === '');
        if(isEmptyField.length === 0) {
            const totalPrice = ((parseInt(equallyOrder.amount) / 100)
                * parseInt(equallyOrder.tips)) + parseInt(equallyOrder.amount)
                + parseInt(equallyOrder.delivery);
            setEquallyTotalPrice({
                totalPrice,
                equallyPrice: totalPrice / parseInt(equallyOrder.people)
            });
        }
    };

    const onClickAddedField = (event) => {
        event.preventDefault();
        const individualOrderCopy = {...individualOrder};
        individualOrderCopy.people.push({name: '', amount: '', id: nanoid()});
        setIndividualOrder(individualOrderCopy);
    };

    const onChangeName = (event, i) => {
        const people = [...individualOrder.people];
        people[i].name = event.target.value;
        setIndividualOrder(state => ({
            people,
            ...state
        }));
    };

    const onChangeAmount = (event, i) => {
        const people = [...individualOrder.people];
        people[i].amount = event.target.value;
        setIndividualOrder(state => ({
            people,
            ...state
        }));
    };

    const removePeople = (event, i) => {
        const individualOrderCopy = {...individualOrder};
        individualOrderCopy.people.splice(i, 1);
        setIndividualOrder(individualOrderCopy);
    };

    const onChangeIndividualTipsAndDeliv = event => {
        const value = event.target.value;
        const name = event.target.name;
        setIndividualOrder(state => ({
            ...state,
            [name]: value
        }));
    };

    const onSubmitIndividualForm = event => {
        event.preventDefault();
        if(individualOrder.people.length > 0) {
            const peopleTotalPrice = [...individualOrder.people];
            let person = [];
            for(let i = 0; i < peopleTotalPrice.length; i++) {
                person.push({...peopleTotalPrice[i]})
                person[i].amount = Math.ceil(((parseInt(peopleTotalPrice[i].amount) / 100)
                    * parseInt(individualOrder.tips))
                    + parseInt(peopleTotalPrice[i].amount));
            }
            if(parseInt(individualOrder.delivery) > 0 ) {
                const sharedDelivery = individualOrder.delivery / peopleTotalPrice.length;
                for(let i = 0; i < peopleTotalPrice.length; i++) {
                    person[i].amount += sharedDelivery;
                }
            }
            const totalPrice = person.map(item => parseInt(item.amount))
                .reduce((total, amount) => total + amount);
            setIndividualTotalPrice({
                totalPrice,
                peopleTotalPrice: person
            })
        }
    };

    let variantsOrder;
    if(switches === 'equally') {
        let equallyPriceComponent = null;
        if(equallyTotalPrice.totalPrice !== 0) {
            equallyPriceComponent = (<EquallyTotalPrice
                totalPrice={Math.ceil(equallyTotalPrice.totalPrice)}
                people={equallyOrder.people}
                equallyTotalPrice={Math.ceil(equallyTotalPrice.equallyPrice)}
            />);
        }
        variantsOrder = (
            <>
                <EquallyOrder
                    equallyOrder={equallyOrder}
                    onChangeEqually={onChangeEqually}
                    onSubmitEquallyForm={onSubmitEquallyForm}
                    equallyPrice={equallyPriceComponent}
                />
            </>
        );
    } else if(switches === 'individual') {
        variantsOrder = <IndividualsOrder
            people={individualOrder.people}
            onClickAddedField={onClickAddedField}
            onChangeName={onChangeName}
            onChangeAmount={onChangeAmount}
            removePeople={removePeople}
            tips={individualOrder.tips}
            delivery={individualOrder.delivery}
            onChangeIndividualTipsAndDeliv={onChangeIndividualTipsAndDeliv}
            onSubmitIndividualForm={onSubmitIndividualForm}
            totalPrice={individualTotalPrice.totalPrice}
            individPeople={individualTotalPrice.peopleTotalPrice}
        />
    }

    return (
        <div className="Calculator">
            <Switches
                value={switches}
                onChangeSwitch={onChangeSwitchRadio}
            />
            {variantsOrder}
        </div>
    );
};

export default OrderAmountCalculator;