import React,{useState} from 'react';
import {FormControl ,Select, MenuItem } from '@mui/material'
import {connect} from 'react-redux';
import {sendRequest} from '../store/action/action';


   function DropDown(props) {
     const [age, setAge] = useState('');
     const handleChange = (event) => { setAge(event.target.value) };

       return (
          <div style={{textAlign:'center'}}>

            <FormControl style={{width:230}} sx={{ m: 1, minWidth: 120 }}>

             <Select style={{textAlign:'left'}}
               value={age}
               onChange={handleChange}
               displayEmpty
               inputProps={{ 'aria-label': 'Without label' }}
        >
            
          <MenuItem disabled value="">
            <em>select contry name</em>
          </MenuItem>
          <MenuItem value={'Pakistan'} id={'PK'} onClick={(e)=>props.sendRequest(e.target.id)}>Pakistan</MenuItem>
          <MenuItem value={'Saudia Arabia'} id={'SA'} onClick={(e)=>props.sendRequest(e.target.id)}>Saudia Arabia</MenuItem>
          <MenuItem value={'India'} id={'IN'} onClick={(e)=>props.sendRequest(e.target.id)}>India</MenuItem>

        </Select>
      </FormControl>
      </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
     sendRequest:(name)=>dispatch(sendRequest(name))
})
export default connect(null,mapDispatchToProps)(DropDown);