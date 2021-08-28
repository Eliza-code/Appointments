import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addAppointment} from '../../action/index';

const Form = ({addAppointment}) => {
    const [input, setInput] =  useState({
        name:'',
        detail:'',
        date:''
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        addAppointment(input);
        setInput({
            name:'',
            detail:'',
            date:''
        })
    }


    return (
        <div>
            <h5>Create a new Appoinment</h5>
            <form onSubmit = {(e)=>handleOnSubmit(e)}>
                <div>
                    <label for="inputPassword5" class="form-label">Name:</label>
                    <input class="form-control" onChange={handleChange} type="text" name='name' value={input.name} />
                </div>
                <div>
                    <label for="inputPassword5" class="form-label">Detail:</label>
                    <textarea class="form-control"  onChange={handleChange} type="text" name='detail' value={input.detail} />
                </div>
                <div>
                    <label for="inputPassword5" class="form-label">Date:</label>
                    <input class="form-control" onChange={handleChange} type="date" name='date' value={input.date} />
                </div>
                <button class="btn btn-primary" type="submit">Create</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAppointment: (input)=> dispatch(addAppointment(input))
    }
}

export default connect(null, mapDispatchToProps) (Form);