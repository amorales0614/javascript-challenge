// from data.js
var tableData = data;
console.log(tableData);

// initiate a reference
var tableBody = d3.select("tbody");

// getting values for each column
tableData.forEach(function(ufos){
	console.log(ufos);

	// appending new row for each sighting
	var nRow = tableBody.append("tr");

	

});