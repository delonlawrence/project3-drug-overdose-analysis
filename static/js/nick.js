const url = "/api/data";

// Set up function to populate dropdown box with county names
function init() {
    // Set up dropdown menu options
    let dropdownMenu = d3.select("#selDataset");

    // Define variable for the currently selected county
    let selectedCounty = dropdownMenu.property("value");

    //  load counties list from the api called with the above link
    d3.json(url).then((data) => {
        let death_counties = data.map(function(record) {
            return record.DeathCounty;
        });

        // Use a Set to get the unique 'DeathCounty' elements
        let unique_death_counties = new Set(death_counties);

        // Convert the Set back to an array if needed
        let unique_death_counties_array = Array.from(unique_death_counties);





    // console.log(unique_death_counties_array);

    // iterate over DeathCounties list and add each county to the dropdown menu variable
    unique_death_counties_array.forEach(county => {
        // select the dropdownMenu variable that was initialized above
        dropdownMenu
        // each string in the counties object will need to be appended as an <option> element
        .append("option")
        // each string will also need to have its own <value> attribute within the option element
        .attr("value", county)
        // each string will need to be added to the dropdown element,
        // so the user can select different IDs
        .text(county);
    })

})}

init();

// Create function for the creation of the bar chart
function chartCreation(county) {

    d3.json(url).then((data) => {

        // Create an object to store the sum of each field for the target DeathCounty
        var sumForTargetCounty = {
            "Heroin": 0,
            "Cocaine": 0,
            "Fentanyl": 0,
            "Fentanyl_Analogue": 0,
            "Oxycodone": 0,
            "Oxymorphone": 0,
            "Ethanol": 0,
            "Hydrocodone": 0,
            "Benzodiazepine": 0,
            "Methadone": 0,
            "Amphet": 0,
            "Tramad": 0,
            "Morphine_NotHeroin": 0,
            "Hydromorphone": 0
        };
        

        data.forEach(function(record) {
            // if statement to add to sum of each drug in system at death if deathcounty matches selected county
            if (record.DeathCounty === county) {
                // Sum the values for each field for the target DeathCounty
                sumForTargetCounty["Heroin"] += record.Heroin;
                sumForTargetCounty["Cocaine"] += record.Cocaine;
                sumForTargetCounty["Fentanyl"] += record.Fentanyl;
                sumForTargetCounty["Fentanyl_Analogue"] += record.Fentanyl_Analogue;
                sumForTargetCounty["Oxycodone"] += record.Oxycodone;
                sumForTargetCounty["Oxymorphone"] += record.Oxymorphone;
                sumForTargetCounty["Ethanol"] += record.Ethanol;
                sumForTargetCounty["Hydrocodone"] += record.Hydrocodone;
                sumForTargetCounty["Benzodiazepine"] += record.Benzodiazepine;
                sumForTargetCounty["Methadone"] += record.Methadone;
                sumForTargetCounty["Amphet"] += record.Amphet;
                sumForTargetCounty["Tramad"] += record.Tramad;
                sumForTargetCounty["Morphine_NotHeroin"] += record.Morphine_NotHeroin;
                sumForTargetCounty["Hydromorphone"] += record.Hydromorphone;
            }

    })
    console.log(sumForTargetCounty);
})};





function optionChanged(newCounty) {
    chartCreation(newCounty);
    
};
