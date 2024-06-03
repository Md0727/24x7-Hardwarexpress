import React, { useState } from 'react';
import DatePicker from "react-tailwindcss-datepicker";// replace with the actual library you're using
import dayjs from 'dayjs';

const YourComponent = () => {
  const [selectedDates, setSelectedDates] = useState({
    fromDate: null,
    toDate: null,
  });

  const handleFromDateChange = (date) => {
    setSelectedDates((prevDates) => ({
      ...prevDates,
      fromDate: date,
    }));
  };

  const handleToDateChange = (date) => {
    setSelectedDates((prevDates) => ({
      ...prevDates,
      toDate: date,
    }));
  };

  const updateObjectWithDates = () => {
    if (selectedDates.fromDate && selectedDates.toDate) {
      const updatedObject = {
        originOfShipment: '',
        destinationOfShipment: '',
        fromDate: dayjs(selectedDates.fromDate).format('DD/MM/YYYY'),
        toDate: dayjs(selectedDates.toDate).format('DD/MM/YYYY'),
        container: '',
        quantity: 0,
        weight: '',
        images: [],
      };

      // Use the updatedObject as needed
      console.log('Updated object:', updatedObject);
    }
  };

  return (
    <div>
      <DatePicker
        value={selectedDates.fromDate}
        onChange={handleFromDateChange}
        inputClassName='addnewClass outline-none mt-3 rounded-lg border border-black w-full px-3 py-2 placeholder:text-black text-black'
      />
      <DatePicker
        value={selectedDates.toDate}
        onChange={handleToDateChange}
        inputClassName='addnewClass outline-none mt-3 rounded-lg border border-black w-full px-3 py-2 placeholder:text-black text-black'
      />
      <button onClick={updateObjectWithDates}>Update Object with Dates</button>
    </div>
  );
};

export default YourComponent;
