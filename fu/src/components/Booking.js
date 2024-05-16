import React from 'react';
import BookingForm from './BookingForm';

const Booking = ( props ) => {
    return (
        <BookingForm avalibleTimes = { props.avalibleTimes } dispatch = { props.dispatch } submitForm  = { props.submitForm }/>

    );
};

export default Booking;