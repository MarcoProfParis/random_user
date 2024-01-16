window.function = async function (results,nat,inc) {
if (results.value === undefined) return undefined;


   const response = await fetch  (`https://randomuser.me/api/?results=${results.value}&nat=${nat.value}&inc=${inc.value}`);

 
  
  const data = await response.json();
  const jsonString = JSON.stringify(data); // Convert the object to a JSON string
    return jsonString;
  
}




