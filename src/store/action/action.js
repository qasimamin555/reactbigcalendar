
  function sendRequest(countryId){
    return (dispatch)=> {
        
        fetch(`https://calendarific.com/api/v2/holidays?&api_key=e4a9756008f228ca9e46e74a6d9bb277a493845e&country=${countryId}&year=2021`)
         .then(res => res.json())
         .then(data => {

          if(data.meta.code === 200){
            if(data.response.holidays.length < 100){
            //   console.log(data.response.holidays)
                let array = new Array()
                     data.response.holidays.map((val,index)=>{
                    
                        function getDateFormat(){

                            let data  = val.date.datetime
                         
                            let year  = data.year.toString()
                            let month = data.month - 1
                            let day   = data.day.toString()
                    
                            return (new Date(year,month ,day));
                        }
                    
                        const result = {
                            title:val.name,
                            start:getDateFormat(),
                            end:getDateFormat(),
                     }
                   array.push(result)
                  
               })
              
               dispatch({
                   type:'eventList', payload:array
               });

            }
        }
          
    })
    }
   }


  export {sendRequest}