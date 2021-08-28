import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteAppointment} from "../../action/index";



const Card = ({id, name, status, deleteAppointment})=> {

const handleOnClick = ()=> {
    deleteAppointment(id);
    alert(`Appointment ${id} deleted`)
}

    return (
        <div class="card w-50">
            <button class="btn btn-outline-danger"  onClick={()=>handleOnClick()} >X</button>
            <div class="card-body">
            <Link to={`/edit/${id}`} >
            <h5 class="card-title">{name}</h5>
            <h6 class="card-text">{status}</h6>
            </Link>
 
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteAppointment: (id) => dispatch(deleteAppointment(id))
    }
}

export default connect(null, mapDispatchToProps) (Card);