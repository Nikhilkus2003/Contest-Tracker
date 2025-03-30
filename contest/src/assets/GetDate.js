
export const GetDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds
    const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with leading zero if necessary
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month and pad with leading zero
    const year = date.getFullYear(); // Get the full year
  
    // Return the date in "dd/mm/yyyy" format
    return `${day}/${month}/${year}`;
  };
  