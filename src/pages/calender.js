import React,{useEffect} from 'react'
import { Calendar , momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { connect } from 'react-redux'
import DropDown from '../components/dropdown';
import { Typography } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const localizer = momentLocalizer(moment)

 const Home = props => {
  
    return(
        <div>
          <ToastContainer />
            <div style={{
              height:'auto',backgroundColor:'#3F7FBF',color:'white',
            }}>
              <div style={{paddingTop: 70,paddingBottom:70,paddingLeft:20,paddingRight:50}}>
                <Typography style={{fontWeight:'bolder'}} variant={'h3'}>Big Calendar Holiday's</Typography><br />     
                 <Typography style={{fontWeight:'bolder'}} variant={'h6'}>With REACT and REDUX</Typography>
              </div>
              
        </div>
        <br />
        <DropDown />
        <Calendar
          localizer={localizer}
          onView={'month' | 'week' | 'day'}
          views={['month', 'week', 'day']}
          events={props.eventData} 
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={(e)=>toast(e.title)}
          onDrillDown={(e)=>toast(e.toString().slice(0,15))}
          style={{ height: 500 ,margin:2 }}
        />
      </div>
    )
}

const mapStateToProp = (state) =>({
        eventData: state.reducer.eventData 
})
export default connect(mapStateToProp,null)(Home);
