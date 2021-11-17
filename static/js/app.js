// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Create a variable that saves the element that was changed using d3.select(this)
    let changedElement = d3.select(this);

    // 4b. Create a variable that saves the value of the changed element’s property
    let elementValue = changedElement.property("value") 
    console.log(elementValue);

    // 4c. Create a variable that saves the attribute of the changed element’s id
    let filterId = changedElement.attr("id");
    console.log(filterId);
  
    // 5. If-else statement to check if a value was changed by the user. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue != "") {
      filters[filterId] = elementValue;
    }
    else {
      delete filters[filtersId];
    }  

    // 6. Call function to apply all filters and rebuild the table
    filterTable();
}
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data(Variable that will hold the updated table data based on user input) to the tableData (variable that builds the table).
    let filterdata = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([filterId, elementValue]) => {
      if (filters[filterId] != "") {
            filteredData = filteredData.filter(entry => entry.datetime === elementValue);
    
      }
      if (filters[filterId] != "") {
            filteredData = filteredData.filter(entry => entry.city === elementValue);
    
      }
      if (filters[filterId] != "") {
            filteredData = filteredData.filter(entry => entry.state === elementValue);
    
      }
      if (filters[filterId] != "") {
            filteredData = filteredData.filter(entry => entry.country === elementValue);
    
      }
      if (filters[filterId] != "") {
            filteredData = filteredData.filter(entry => entry.shape === elementValue);
      }
    });
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
buildTable(tableData);
