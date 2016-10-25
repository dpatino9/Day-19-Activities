 var config = {
     apiKey: "AIzaSyDONa8aiC3exKM2kESFZ_15ONHwNulo3-Y",
     authDomain: "rcbemployeetracker.firebaseapp.com",
     databaseURL: "https:rcbemployeetracker.firebaseio.com",
     storageBucket: "rcbemployeetracker.appspot.com",
     messagingSenderId: "567349151305"
   };
   firebase.initializeApp(config);

  
 var database = firebase.database();

 var name = "";
 var role = "";
 var startDate = "";
 var monRate = "";
 var count = 0;
 alert("alert");

$('#addEmployee').on('click', function() {

		alert('click');
		console.log('click');

		 count++;

	 	name = $('#newName').val().trim(); 
	 	role = $('#newDestination').val().trim();
	 	startDate = $('#newTime').val().trim(); 
	 	monRate = $('#newFreq').val().trim(); 

	 	database.ref("user"+count).push({
	 		name: name,
	 		role: role,
	 		startDate: startDate,
	 		monRate: monRate
		 });

	 console.log(name);
	 console.log(role);
	 console.log(startDate);
	 console.log(monRate);
	 console.log(database);

//Clears all of the text-boxes
	$("#newName").val("");
	$("#newDestination").val("");
	$("#newTime").val("");
	$("#newFreq").val("");

return false;

});


database.ref().on("child_added", function(childSnapshot){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var tName = childSnapshot.val().name;
	var tRole = childSnapshot.val().role;
	var tmRate = childSnapshot.val().monRate;
	var tstartDate = childSnapshot.val().startDate;

	

$("#empolyeeTable").append("<tr><td>" + tName + "</td><td>" + tRole + "</td><td>" + tstartDate + "</td><td>" + tmWorked + "</td><td>" + tmRate + "</td></tr>");

});

