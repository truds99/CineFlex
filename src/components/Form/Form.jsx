import './formStyle.css'
import { postBooking } from '../../services/cineflex';
import { useNavigate } from 'react-router-dom'

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
        <form onSubmit={handleForm}>
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
        </form>
    );
}   