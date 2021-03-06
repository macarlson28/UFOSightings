//from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

//Console.log the data from data.js
function renderTable(){

// // Loop Through `data` and console.log each report
    tableData.forEach(function(UFOReport) {
        console.log(UFOReport);
       var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
    })
})
};
renderTable();

var submit = d3.select("#filter-btn");

submit.on("click", function() {
    

  // Prevent the page from refreshing
    d3.event.preventDefault();

  // Select the input element and get the raw HTML node
     var inputElement = d3.select("#datetime").property("value");
     console.log(inputElement)
  // Get the value property of the input element
    var filteredData = tableData.filter(d => d.datetime === inputElement);
     console.log(filteredData);

    tbody.html("");

    filteredData.forEach(function(entry){
        var row = tbody.append("tr")
        Object.entries(entry).forEach(function([key,value]){
            row.append("td").text(value);
})
 })

//renderTable();
});
