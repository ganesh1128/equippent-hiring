import React from 'react'
import { RangeDatePicker} from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";

function datePicker() {
    return (
        <div className="App">
      <RangeDatePicker
        startDate={new Date()}
        endDate={new Date()}
      />
            
        </div>
    )
}

export default datePicker
