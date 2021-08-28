import React from 'react';
import {connect} from 'react-redux';
import Card from '../Card/Card';

const Cards = ({state})=> {

    return (
        <div>
            {
                state && state.map((el, i) => (
                    <Card key={i} id={el.id} name={el.name} status={el.status}/>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state)=> {
    return {
        state
    }
}

export default connect(mapStateToProps, null) (Cards);