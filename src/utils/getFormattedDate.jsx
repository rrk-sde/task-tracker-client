import React from 'react'

const getFormattedDate = (inputDate = new Date(Date.now())) => {
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0');
    const day = String(inputDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}


export default getFormattedDate