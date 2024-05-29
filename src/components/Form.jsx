import { postBooking } from '../services/cineflex';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

export default function Form({selectedSeats, setFormData, formData}) {
    const navigate = useNavigate();
    
    function handleChange(e, newValue) {
        setFormData((prevFormData) => {
            const updatedData = { ...prevFormData, [newValue]: e.target.value };
            return updatedData;
        });
    }

    function isValidCPF() {
        if(formData.cpf.length !== 11 || !/^\d+$/.test(formData.cpf)){
            alert("type a valid CPF (just 11 numbers)");
            return false;                                                                                                                                   
        }
        return true;
    }

    function handleForm(e){
        e.preventDefault();
        if (formData.name.length === 0) return;
        if (!isValidCPF()) return;
        const object = {
            ids: selectedSeats,
            name: formData.name,
            cpf: formData.cpf
        }
        postBooking(object)
            .catch(() => alert("error reserving seats"))
            .then(() => navigate('/success'));
    }

    return (
        <Wrapper onSubmit={handleForm}>
            <div>
                <label>Buyer's name: </label>
                <br/>
                <input type="text" placeholder="Type your name..." onChange={(e) => handleChange(e, 'name')} required />
                <br/>
                <label>Buyer's CPF:</label>
                <br/>
                <input type="text" placeholder="Type your CPF..." onChange={(e) => handleChange(e, 'cpf')} required />
            </div>
            <button>Reserve seat(s)</button>
        </Wrapper>
    );
}   

const Wrapper = styled.form`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100vw;
    max-width: 100%;
    margin-bottom: 160px;

    input{
        margin: 5px 0 11px 0;
        width: 100%;
        height: 40px;
        border-radius: 3px;
        border: 1px solid #D4D4D4;
        max-width: 100%;
        padding-left: 18px;
    }

    input:focus {
        outline: none;
    }

    & > div {
        width: 100%;
    }

    input::placeholder {
        font-family: Roboto;
        font-size: 18px;
        font-style: italic;
        font-weight: 400;
        text-align: left;
        color: #AFAFAF;
    }

    label{
        font-size: 16px;
        font-weight: 400;
        color: #FFFFFF;
    }

    & > button {
        max-width: 100%;
        width: 100%;
        height: 42px;
        border-radius: 8px;
        background-color: #EE897F;
        font-size: 18px;
        font-weight: 700;
        border: none;
        color: #2B2D36;
        margin-top: 22px;
        align-self: center;
        cursor: pointer;
    }
`