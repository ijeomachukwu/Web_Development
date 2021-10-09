var colorArray = [
    '#4FC3F7', 
    '#29B6F6', 
    '#03A9F4', 
    '#039BE5', 
    '#0288D1', 
    '#0277BD', 
    '#01579B', 
    '#9575CD', 
    '#7E57C2', 
    '#673AB7', 
    '#5E35B1', 
    '#512DA8', 
    '#4527A0', 
    '#311B92', 
    '#7986CB', 
    '#5C6BC0', 
    '#3F51B5', 
    '#3949AB', 
    '#303F9F', 
    '#283593', 
    '#1A237E', 
    '#64B5F6', 
    '#42A5F5', 
    '#2196F3', 
    '#1E88E5', 
    '#1976D2', 
    '#1565C0', 
    '#0D47A1'
];

index = 1;

function updateTime(){
    var time = new Date();
    document.getElementById("hours").innerHTML = time.getHours() % 12;
    document.getElementById("minutes").innerHTML = time.getUTCMinutes();
    document.getElementById("seconds").innerHTML = time.getUTCSeconds();
};

function changeColors(){
    var colors = colorArray[index];
    document.querySelector("body").style.background = colors;
    index++;
    if(index >= colorArray.length){
        index = 0;
    };
};

setInterval(changeColors, 1000);
setInterval(updateTime, 1000);