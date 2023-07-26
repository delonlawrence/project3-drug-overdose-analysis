

function demographics(county) {
  const url = "/api/data";
  // Set up dropdown menu options
  let dropdownMenu = d3.select("#selDataset");

  // Define variable for the currently selected county
  let selectedCounty = dropdownMenu.property("value");

  // Load data from the API using d3.json()
  d3.json(url)
    .then((data) => {
      // Extract an array of races from the data
      let races = data.map(function (record) {
        return record.Race;
      });

      // Use a Set to get the unique 'Race' elements
      let uniqueRaces = new Set(races);

      // Convert the Set back to an array if needed
      let uniqueRacesArray = Array.from(uniqueRaces);

      console.log("Unique Races:", uniqueRacesArray);

      // Variable to count records by Race
      let raceCounts = {
        'Black': 0,
        'Asian, Other': 0,
        'White': 0,
        'Hispanic, White': 0,
        'Asian Indian': 0,
        'Hispanic, Black': 0,
        'Unknown': 0,
        'Other': 0,
        'Native American, Other': 0,
        'Chinese': 0
      };

      data.forEach((record) => {
        if (record.DeathCounty === county) {
          const race = record.Race;
          if (race in raceCounts) {
            raceCounts[race]++;
          }
          
        }
      });

      console.log("Race Counts:", raceCounts);

      // Convert raceCounts object to an array of key-value pairs for easy iteration
      let raceCountsArray = Object.entries(raceCounts);

      // Clear the existing content of the panel-body div
      let panelBody = d3.select("#sample-metadata");
      panelBody.html("");

      // Append the race counts information to the panel-body div
      raceCountsArray.forEach(([race, count]) => {
        let paragraph = panelBody.append("p");
        paragraph.text(`${race}: ${count}`);
      });

      // Calculate percentages for the pie chart
      const totalRecords = raceCountsArray.reduce((sum, [_, count]) => sum + count, 0);
      const percentages = raceCountsArray.map(([race, count]) => (count / totalRecords) * 100);

      // Define the color scale for the pie chart
      const colorScale = d3.scaleOrdinal(d3.schemeCategory10);


      // Create data for the Plotly pie chart
      const piedata = [{
        type: 'pie',
        labels: uniqueRacesArray,
        values: percentages,
        textinfo: 'label+percent',
        textposition: 'inside',
        marker: {
          colors: colorScale.range()
        },
        hoverinfo: 'label+percent+value',
      }];

      // Set layout options for the Plotly pie chart
      const layout = {
      height: 600,
      width: 600,
      showlegend: true, // Set to true to display the legend
      legend: {
      x: 1, // Adjust the x position of the legend
      y: 0.5, // Adjust the y position of the legend
  },
};

    

      // Create the pie chart using Plotly
      Plotly.newPlot('pie-chart', piedata, layout);

    })
    .catch((error) => {
      console.error("Error loading data:", error);
    });
}
  


    

// demographics();













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