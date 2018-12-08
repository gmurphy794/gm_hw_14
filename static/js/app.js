// from data.js
var tableData = data;

// YOUR CODE HERE!

//Adding table
// Get a reference to the table body
var tbody = d3.select("tbody");
var table = d3.select("table");

// Append data into table
tableData.forEach(function(ufoInfo) {
    console.log(ufoInfo);
    var row = tbody.append("tr");
    Object.entries(ufoInfo).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Adding Filter
// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value")

    var filteredData = tableData.filter(item => item.datetime === inputValue);

    if (inputValue != '') {
        tbody.selectAll('tr').remove();
        filteredData.forEach(function(filterInfo) {
            var nrow = tbody.append("tr");
            Object.entries(filterInfo).forEach(function([key, value]) {
                var ncell = nrow.append("td");
                ncell.text(value);
            });
        });
    }
    else {
        location.reload();
    };
  });