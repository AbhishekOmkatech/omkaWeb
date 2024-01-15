import React, { useState } from 'react';

const DD = () => {
    const [Email1, setEmail1] = useState('');

    const submitNow1 = (e) => {
        e.preventDefault(); // Prevent the form from submitting the traditional way.

        const url = 'https://www.omkatech.com/Contact.php';

        const formData = new FormData();
        formData.append('Email', Email1);

        // Log the formData before making the request
        console.log(formData);

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then((res) => {
                if (res.ok) {
                    // Handle success, e.g., show a success message or redirect
                } else {
                    // Handle errors, e.g., show an error message
                }
            })
            .catch((error) => {
                // Handle network or other errors
            });

        setEmail1('');
    };

    console.log(Email1);

    return (
        <div>
            <div className="container">
                <form onSubmit={submitNow1}>
                    <label htmlFor="fname">First Name</label>
                    <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Your name.."
                        value={Email1}
                        onChange={(e) => {
                            setEmail1(e.target.value);
                        }}
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default DD;
