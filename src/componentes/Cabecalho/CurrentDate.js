import React from 'react';

const CurrentDate = () => {
  const currentDate = new Date().toLocaleDateString(); // Obtém a data corrente no formato de data local

  return <div>{currentDate}</div>;
};

export default CurrentDate;
