// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop Through `data` and console.log each data object
data.forEach(function (UFOsighting) {
    console.log(UFOsighting);

    // Use d3 to append one table row `tr` for each data object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each data value
    Object.entries(UFOsighting).forEach(function ([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the filter button
var filterButton = d3.select("#filter-btn");

// Use D3 `.on` to attach a click handler for the filter
filterButton.on("click", function() {
    
    d3.event.preventDefault();

    var dateInput = d3.select("#datetime");
    var dateToFilter = dateInput.node().value;

    function onDate(UFOsighting) {
    return UFOsighting.datetime == dateToFilter;
    }
  
  // Call the custom function with filter()
    var Filtereddata = data.filter(onDate);

    tbody.html("");

// Loop Through `data` and console.log each data object
    Filtereddata.forEach(function(UFOsighting) {
    console.log(UFOsighting);

    // Use d3 to append one table row `tr` for each data object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each data value
    Object.entries(UFOsighting).forEach(function ([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td");
        cell.text(value);
    });
    });
});



