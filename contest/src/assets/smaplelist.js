const fun = async () => {
    const res = await fetch("https://codeforces.com/api/contest.list?gym=false");
    const data = await res.json();
    const main = data.result;
    
    const filteredData = [];
    main.forEach((ar) => {
      if (ar.phase === "BEFORE") {
        filteredData.push(ar);
      }
    });
    
    return filteredData; // Return the filtered data
  };
  
  export default fun; // Export the function