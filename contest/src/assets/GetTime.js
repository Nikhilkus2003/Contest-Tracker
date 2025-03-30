// getTime.js

export const GetTime = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds
    let hours = date.getHours();
    const minutes = date.getMinutes();
  
    // Determine if it's AM or PM
    const ampm = hours >= 12 ? 'pm' : 'am';
  
    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Hour '0' should be '12'
    
    // Pad minutes with a leading zero if necessary
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  
    // Return the time in "hh:mm am/pm" format
    return `${hours}:${formattedMinutes} ${ampm}`;
  };
  