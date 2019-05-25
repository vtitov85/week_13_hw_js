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

    var cityInput = d3.select("#city");
    var cityToFilter = cityInput.node().value;

    var stateInput = d3.select("#state");
    var stateToFilter = stateInput.node().value;

    var countryInput = d3.select("#country");
    var countryToFilter = countryInput.node().value;

    var shapeInput = d3.select("#shape");
    var shapeToFilter = shapeInput.node().value;

    function onDate(UFOsighting) {
    return UFOsighting.datetime == dateToFilter;
    }

    function onCity(UFOsighting) {
    return UFOsighting.city == cityToFilter;
    }

    function onState(UFOsighting) {
    return UFOsighting.state == stateToFilter;
    }
    
    function onCountry(UFOsighting) {
    return UFOsighting.country == countryToFilter;
    }
    
    function onShape(UFOsighting) {
    return UFOsighting.shape == shapeToFilter;
    }

  // Call the custom function with filter()
    var Filtereddata = data;
    if (dateToFilter != "") {
        Filtereddata = Filtereddata.filter(onDate);
    }
    if (cityToFilter != "") {
        Filtereddata = Filtereddata.filter(onCity);
    }
    if (stateToFilter!= "") {
        Filtereddata = Filtereddata.filter(onState);
    }
    if (countryToFilter != "") {
        Filtereddata = Filtereddata.filter(onCountry);
    }
    if (shapeToFilter != "") {
        Filtereddata = Filtereddata.filter(onShape);
    }
    
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
