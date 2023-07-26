

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

      // Populate array of races with their total for the selected county
      // Loop through each record and check to see if record has matching county to selected county
      data.forEach((record) => { 
        if (record.DeathCounty === county) {
          let race = record.Race;
          if (race in raceCounts) {
            raceCounts[race]++;  
          }
          
        }
      });


      // Convert raceCounts object to an array of key-value pairs for easy iteration
      
      let raceCountsArray = Object.entries(raceCounts);

      // Sort raceCountsArray in descending order based on each race's value
      // raceCountsArray.sort((a,b) => b[1] - a[1]);

      // Clear the existing content of the panel-body div
      let panelBody = d3.select("#sample-metadata");
      panelBody.html("");

      // Append the race counts information to the panel-body div
      raceCountsArray.forEach(([race, count]) => {
        let paragraph = panelBody.append("p");
        paragraph.text(`${race}: ${count}`);
      });

      // Calculate percentages for the pie chart
      let totalRecords = raceCountsArray.reduce((sum, [_, count]) => sum + count, 0);
      let percentages = raceCountsArray.map(([race, count]) => (count / totalRecords) * 100);

      console.log(raceCountsArray);
      console.log(percentages);

      // Define the color scale for the pie chart
      const colorScale = d3.scaleOrdinal(d3.schemeCategory10);


      // Create data for the Plotly pie chart
      let piedata = [{
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
};
  