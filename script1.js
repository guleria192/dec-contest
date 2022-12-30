const user = JSON.parse(localStorage.getItem('user'));
const boxxx = document.getElementById('boxx')


console.log(user);
const ipElement = document.getElementById('ipaddress'),
latElement = document.getElementById('lat'),
longElement = document.getElementById('long'),
cityElement = document.getElementById('city'),
orgElement = document.getElementById('org'),
regionElement = document.getElementById('region'),
hostElement = document.getElementById('host'),
timeElement = document.getElementById('timezone'),
dateElement = document.getElementById('dateandtime'),
pinElement = document.getElementById('pin'),
messageElement = document.getElementById('message'),
mapElement = document.getElementById('map'),
location1= user.loc;
console.log(location1);


ipElement.textContent = user.ip;
latElement.textContent = user.loc;
longElement.textContent = user.loc;
cityElement.textContent = user.city;
orgElement.textContent = user.org;
regionElement.textContent = user.region;
hostElement.textContent = user.ip;
timeElement.textContent = user.timezone;

pinElement.textContent = user.postal;




document.getElementById("iframe-tag").src =`https://maps.google.com/maps?q=${location1}&z=15&output=embed`;


// const iframeElement = document.createElement('iframe');
// iframeElement.width = '90%';
// iframeElement.height = '500';
// src=`https://maps.google.com/maps?q=${location1}&z=15&output=embed`

// mapElement.appendChild(iframeElement);







str = new Date().toLocaleString("en-NZ",{timeZone:user.timezone,timeZoneName:"short"})
 
dateElement.textContent = str;




const url = `https://api.postalpincode.in/pincode/${user.postal}`;
 


fetch(url).then((data)=>{
return data.json();
}).then((objectData)=>{
    console.log(objectData);
    
    messageElement.textContent =  objectData[0].Message;
    
    result = objectData[0].PostOffice;
    console.log(result);
    
    
    
    
    

    
    
for(var i = 0 ; i <= result.length ; i++){



    const postItem = [
        {
            label : "Name :",
            data : result[i].Name,

        },
        {
            label : "Branch Type :",
            data : result[i].BranchType,

        },
        {
            label : "Delivery Status :",
            data : result[i].DeliveryStatus,
            
        },
        {
            label : "District :",
            data : result[i].District,

        },
        {
            label : "Division :",
            data : result[i].Division,
            
        }

        
    ];

    
    postItem.map(item=>{
     
    const div = document.createElement('div');
    div.setAttribute("id", "Div1")
    
    const spanLabel = document.createElement('span');
    const spanInput = document.createElement('span');
    
    
    spanLabel.textContent=item.label;
    spanInput.textContent=item.data;

    div.appendChild(spanLabel);
    div.appendChild(spanInput);

    boxxx.appendChild(div);
})


// g = document.createElement('div');
// g.setAttribute("id", "Div1");
}






})

