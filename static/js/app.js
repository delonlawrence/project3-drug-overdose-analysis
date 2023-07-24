const url = "/api/data";

d3.json(url).then(function(data) {
    console.log(data);
}).catch(function(error) {
    console.error("Error fetching data:", error);
});



















// // Set up constant for JSON data url
// const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


// // set up function tp create the dropdown menu
// StarterCode/samples.jsonfunction init() {

//     // create the dropdown options
//     let dropdownMenu = d3.select("#selDataset");

//     //get the names list from the aip call
//     d3.json(url).then((data) => {

//     let namesList = data.names;

//     // iterate through the names list and add the ids for each to the dropdown
//     namesList.forEach(name => {
//         // pick the dropdown menu
//         dropdownMenu
//         // append every name as an option
//         .append("option")
//         // append every string to its own value
//         .attr("value", name)

//         // add each string to the dropdown menu so that it can be selected by id
//         .text(name);
//     })


















// d3.json("your_data_file.json").then(function(data) {
//     // Assuming data is an array of objects
//     const residenceCityColumn = data.map(item => item.ResidenceCity);

//     // Use Lodash to calculate value counts
//     const valueCounts = _.countBy(residenceCityColumn);

//     console.log(valueCounts);
//     // Output: { "25": 1, "28": 1, "30": 2 }
//   });





// d3.json("your_data_file.json").then(function(data) {
//     // Create an array to hold the value counts for each column
//     const valueCounts = {};

//     // Loop through each row of the data
//     data.forEach(row => {
//       // Loop through each column and update the value counts
//       for (const column in row) {
//         // Check if the value is 1
//         if (row[column] === 1) {
//           // Increment the value count for this column
//           valueCounts[column] = (valueCounts[column] || 0) + 1;
//         }
//       }
//     });

//     console.log(valueCounts);
//       // Output: { "col1": 1, "col2": 2, "col3": 2, ..., "col13": 1 }
//     });