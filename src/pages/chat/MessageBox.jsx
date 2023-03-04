import React, { useEffect, useState } from 'react'

const MessageBox = ({ data }) => {

  const [date, setDate] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    if (data) {
      var d = new Date(data.date);
      setDate(d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear())

      var hour = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
      var period = d.getHours() > 12 ? "PM" : "AM";
      hour = hour < 10 ? "0" + hour : hour;

      var minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();

      setTime(hour + ":" + minutes + " " + period);

    }
  }, [data]);

  return (
    <div className='messageBox'>
      {data.message}
      <span id='date'>{date}</span>
      <span id='time'>{time}</span>
    </div>
  )
}

export default MessageBox;