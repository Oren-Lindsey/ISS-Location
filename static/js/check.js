function findLocation(units) {
  if (units == "miles") {
    fetch('https://api.wheretheiss.at/v1/satellites/25544?units=miles')
      .then(response => response.json())
      .then(data => updatePage(data));
  } else {
    fetch('https://api.wheretheiss.at/v1/satellites/25544')
      .then(response => response.json())
      .then(data => updatePage(data));
  }
}
function updatePage(data) {
  if (data.name == "iss") {
    //get html elements
    console.log("ISS location retrieved");
    longitude = document.getElementById("longitude");
    latitude = document.getElementById("latitude");
    altitude = document.getElementById("altitude");
    velocity = document.getElementById("velocity");
    units = document.getElementById("units");
    visibility = document.getElementById("visibility");
    timestamp = document.getElementById("timestamp");
    //get JSON values
    long = data.longitude;
    lat = data.latitude;
    alt = data.altitude;
    vel = data.velocity;
    u = data.units;
    vis = data.visibility;
    utime = data.timestamp;
    //log them in the console
    console.log(long);
    console.log(lat);
    console.log(alt);
    console.log(vel);
    console.log(u);
    console.log(vis);
    console.log(utime);
    //change time to datetime
    realTime = timeConverter(utime);
    console.log(realTime);
    //set the Html
    window.requestAnimationFrame(repaintHtml);
  }
}
function repaintHtml() {
  longitude.innerHTML = `Longitude = ${long}`;
  latitude.innerHTML = `Latitude = ${lat}`;
  altitude.innerHTML = `Altitude = ${alt}`;
  velocity.innerHTML = `Velocity = ${vel}`;
  units.innerHTML = `Units = ${u}`;
  visibility.innerHTML = `Visibility = ${vis}`;
  timestamp.innerHTML = `Last updated = ${realTime}`;
}
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}