const getDataBtn = document.getElementById('btn1');
let getIpAddress = null;
// curl "ipinfo.io/103.16.30.227?token=8ffaa7701fcc0c"

$.getJSON("https://api.ipify.org?format=json", function(data){
    $('#ip').html(data.ip);
    
    getIpAddress = data.ip;
}).then(()=>{
    
    console.log(getIpAddress);  

    
    
    
    // const url = (` https://ipinfo.io/${getIpAddress}/geo`);
    //  const gotTheData =  fetch(url);
    // console.log(gotTheData);
    // const theData =  gotTheData.json();
    // console.log(theData);
    
    
    
    
})
// console.log(getIpAddress);


const url = (` https://ipinfo.io/${getIpAddress}/geo`)






async function getData () {
    let ipAddressValue = document.getElementById('ip').textContent;
    console.log("hi",ipAddressValue);
        const url = (` https://ipinfo.io/${ipAddressValue}/geo?token=8ffaa7701fcc0c`);
        const gotTheData = await fetch(url);
        console.log(gotTheData);
        
        const theData = await gotTheData.json();
        console.log(theData);


localStorage.setItem('user', JSON.stringify(theData));

window.open('./index1.html','_self');



    } 




