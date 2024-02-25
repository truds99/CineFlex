import './formStyle.css'
import { useEffect, useState } from 'react'

export default function Form({selectedSeats, setFormData, formData}) {
    
    function handleChange(e, numbSeat, newValue) {
        setFormData((prevFormData) => {
            const updatedData = prevFormData.map((elm) =>
                elm.idAssento === numbSeat ? { ...elm, [newValue]: e.target.value } : elm
            );
            return updatedData;
        });
    }


    function handleForm(e){
        e.preventDefault();
        
    }

    return (
        <form onSubmit={handleForm}>
            {selectedSeats.map((elm) => (
                <div key={elm}>
                    <h5>Seat {elm}</h5>
                    <label>Name: </label>
                    <br/>
                    <input type="text" placeholder="Type your name..." onChange={(e) => handleChange(e, elm, 'nome')} required />
                    <br/>
                    <label>CPF:</label>
                    <br/>
                    <input type="text" placeholder="Type your CPF..." onChange={(e) => handleChange(e, elm, 'cpf')} required />
                </div>
            ))}
        </form>
    );
}   