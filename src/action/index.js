let id = 1;

export const addAppointment = (input) => {

    return {
        type: 'ADD_APPOINTMENT',
        payload: {
            ...input,
            id: id ++ ,
            status: 'Pending'  
        }
    }
}

export const changeStatus = (id) => {
    return {
        type: 'CHANGE_STATUS',
        payload : id
    }
}

export const deleteAppointment = (id) => {
    return {
        type: 'DELETE_APPOINTMENT',
        payload : id
    }
}
