import React from 'react';

const BookingForm = ( props ) => {
    const [ date, setDate ] = useState("");
    const [ times, setTimes ] = useState("");
    const [ guests, setGuests ] = useState("");
    const [ occasion, setOccasion ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);

    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);

    }
    return (
        <header>
            <section>
                <form onSubmit = { handleSubmit }>
                    <fieldset>
                        <div>
                            <label htmlFor = 'book-date'>Choose Date</label>
                            <input
                            id = 'book-date'
                            value = { date }
                            onChange = { (e) => handleChange( e.target.value ) }
                            type = 'date'
                            required
                            />
                        </div>

                            <div>
                                <label htmlFor = 'book-time'>Choose Time:</label>
                                <select id = "book-time"
                                value = { times }
                                onChange = {(e) => setTimes(e.target.value)}
                                >
                                    <option value = "">Select a Time</option>
                                    { props.avalibleTimes.avalibleTimes.map(avalibleTimes => { return <option key = { avalibleTimes }>{ avalibleTimes }</option>})}
                                </select>
                            </div>

                            <div>
                                <label htmlFor = 'book-geusts'>Number of Guests:</label>
                                <input
                                id = 'book-geusts'
                                min = '1'
                                value = { guests }
                                onChange = {(e) => setGuests( e.target.value )}
                                />
                            </div>
                            <div>
                            <label htmlFor = 'book-occasion'>occasion:</label>
                            <select
                            id = 'book-occasion'
                            key = { occasion }
                            value = { occasion }
                            onChange = {e => setOccasion(e.target.value)}
                            >
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                            </div>
                            <div className = 'btnReceive'>
                                <input
                                aria-label = 'On Click'
                                type = 'submit'
                                value= { "Make your Reservation" }
                                />
                            </div>
                    </fieldset>

                </form>
            </section>
        </header>>
    );
};

export default BookingForm;