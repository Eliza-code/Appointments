import React from 'react';
import {connect} from 'react-redux';
import {changeStatus} from '../../action/index';


const Detail = ({match, state, changeStatus}) => {
  const {id}= match.params;
  const detail = state ? state.find(el => el.id === Number(id)) : null ;
  
    return (  
        <div div class="card">   
          {
          detail && (
          <> 
          <h3>{detail.name}</h3>
          <h5>{detail.date}</h5>
          <h5>{detail.detail}</h5>
          <h5>{detail.status}</h5>
          <button onClick={()=>changeStatus(id)} >Fulfilled</button>
          </>
          )}
          
        </div>
    );
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeStatus : (id)=> dispatch(changeStatus(id))
  }
}

 
export default connect(mapStateToProps, mapDispatchToProps) (Detail);