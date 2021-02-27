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

	Object.entries(ufos).forEach(
		function([key, value]) {
		console.log(key, value);

		var cell = nRow.append("td");
		cell.text(value);
		});
});

// button select
var button = d3.select("#filter-btn");
button.on("click", function(){

	tableBody.html("");

	// selecting date and value properties
	var inputDate = d3.select("#datetime");

	var inputVal = inputDate.property("value");
	// console log it
	console.log(inputVal);

	// filter the data
	var filtered = tableData.filter(event => event.datetime === inputVal);

	// console log it
	console.log(filtered);

	// appending new info based on selected date
	filtered.forEach(function(selections){
		var nRow = tableBody.append("tr");

		Object.entries(selections).forEach(function([key, value]){
			console.log(key, value);

			var cell = nRow.append("td");
			cell.text(value);
		});
	});
});