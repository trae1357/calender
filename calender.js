//1.create a calender layout with bootstrap
//2. When calender opens set the current date and time 
//3.Calender should be in to color blocks for past/present/future
//4.When clicking on a time slot you can enter in text
//5.Then you can save info in to local storage of the calender
//6. Refreshing the page the info is still there

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
console.log(dateTime);
var APIKey = "AIzaSyA0gLEPW1k1AIb8lOla3Rfnu4Df1RIxxtQ";
var calenderURL = "135684076721-35rp1c9ahkf4r1le1vt5lrupjjsfs3m5.apps.googleusercontent.com" + APIKey;




var newDiv = $("<div>");
var newTime= $("#current-time").text("Todays date and time is " + moment().format("dddd, MMMM Do"));
var  timeArray=["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];
var militaryArray=[9,10,11,12,13,14,15,16,17]

var getCurrentHour = moment().hour()

$("#display").empty()

for (let i = 0; i < timeArray.length; i++) {
   var timeSection = ""

   
   if(getCurrentHour> militaryArray[i]){
       timeSection="past"
   }
   if(getCurrentHour === militaryArray[i]){
       timeSection = "present"
   }
   if(getCurrentHour<militaryArray[i]){
       timeSection="future"
     
       
   }
   var newRow = $("<div class='row'>")
   var hour = $('<div class="col-sm-1 hour ">').text(timeArray[i])
   var timeDiv = $('<div class="col-sm-10">')
   var timeInput = $(`<input class="h-100  form-control ${timeSection} " name="" value="" id="${i}">`)
   var saveDiv = $('<div class="col-sm-1">')
   var saveBtn = $('<button data-id="${i}" class= "saveBtn h-100  mr-2">')


   saveBtn.text("Save")

   
   
//    $("#display").append(` <div class="row">
//    <div class="col-sm-1 hour mt-3">${timeArray[i]}</div>
//    <div class="col-sm-10  "> <textarea class="h-100  form-control ${timeSection} " name="" id="${i}"></textarea></div>
//    <div class="col-sm-1"><button data-id="${i}" class= "saveBtn h-100 mt-3 mr-2">Save</button></div>
//  </div>`)
   newRow.append(hour)
   timeDiv.append(timeInput)
   newRow.append(timeDiv)
   saveDiv.append(saveBtn)
   newRow.append(saveDiv)
   $("#display").append(newRow)

    saveBtn.click(function(){
        localStorage.setItem(timeArray[i], JSON.stringify(timeInput.val()))
        console.log("saveBtn")
        console.log($(timeInput).val())
        console.log(timeInput)
        
    });
    
    var timeInput_obj = JSON.stringify(timeInput);
    console.log(timeInput_obj);
    
      
    localStorage.setItem("timeInput", timeInput_obj);
    console.log(localStorage);

    var timeInput_dobj = JSON.parse(localStorage.getItem("timeInput"));
    console.log(timeInput_dobj);
    // document.getElementById("input").innerHTML =localStorage.getItem(timeInput);
   
}

//onclick for savebtn