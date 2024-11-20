const data_json = [{'Ecosystem': 'Mountain',
    'Species_Category': 'Reptiles',
    'Species_Count': 158,
    'Year': 2010,
    'Endangered_Species': 1,
    'Diversity_Index': 1.47,
    'Region': 'North America'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Reptiles',
    'Species_Count': 452,
    'Year': 2010,
    'Endangered_Species': 38,
    'Diversity_Index': 0.78,
    'Region': 'Africa'},
   {'Ecosystem': 'Lake',
    'Species_Category': 'Mammals',
    'Species_Count': 177,
    'Year': 2010,
    'Endangered_Species': 22,
    'Diversity_Index': 1.17,
    'Region': 'North America'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Mammals',
    'Species_Count': 127,
    'Year': 2010,
    'Endangered_Species': 42,
    'Diversity_Index': 0.75,
    'Region': 'Asia'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Mammals',
    'Species_Count': 284,
    'Year': 2011,
    'Endangered_Species': 16,
    'Diversity_Index': 1.33,
    'Region': 'Africa'},
   {'Ecosystem': 'Lake',
    'Species_Category': 'Mammals',
    'Species_Count': 88,
    'Year': 2011,
    'Endangered_Species': 17,
    'Diversity_Index': 0.68,
    'Region': 'South America'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Plants',
    'Species_Count': 194,
    'Year': 2011,
    'Endangered_Species': 29,
    'Diversity_Index': 0.72,
    'Region': 'Africa'},
   {'Ecosystem': 'Lake',
    'Species_Category': 'Amphibians',
    'Species_Count': 487,
    'Year': 2011,
    'Endangered_Species': 28,
    'Diversity_Index': 0.97,
    'Region': 'South America'},
   {'Ecosystem': 'Lake',
    'Species_Category': 'Amphibians',
    'Species_Count': 28,
    'Year': 2011,
    'Endangered_Species': 9,
    'Diversity_Index': 1.11,
    'Region': 'South America'},
   {'Ecosystem': 'Wetland',
    'Species_Category': 'Mammals',
    'Species_Count': 433,
    'Year': 2012,
    'Endangered_Species': 44,
    'Diversity_Index': 1.3,
    'Region': 'Australia'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Birds',
    'Species_Count': 39,
    'Year': 2012,
    'Endangered_Species': 50,
    'Diversity_Index': 1.42,
    'Region': 'Africa'},
   {'Ecosystem': 'Mountain',
    'Species_Category': 'Mammals',
    'Species_Count': 271,
    'Year': 2012,
    'Endangered_Species': 45,
    'Diversity_Index': 0.8,
    'Region': 'North America'},
   {'Ecosystem': 'Mountain',
    'Species_Category': 'Amphibians',
    'Species_Count': 457,
    'Year': 2012,
    'Endangered_Species': 14,
    'Diversity_Index': 1.01,
    'Region': 'North America'},
   {'Ecosystem': 'Mountain',
    'Species_Category': 'Mammals',
    'Species_Count': 208,
    'Year': 2012,
    'Endangered_Species': 46,
    'Diversity_Index': 0.82,
    'Region': 'North America'},
   {'Ecosystem': 'Savannah',
    'Species_Category': 'Birds',
    'Species_Count': 68,
    'Year': 2012,
    'Endangered_Species': 10,
    'Diversity_Index': 1.38,
    'Region': 'Africa'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Reptiles',
    'Species_Count': 149,
    'Year': 2012,
    'Endangered_Species': 38,
    'Diversity_Index': 0.9,
    'Region': 'Africa'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Insects',
    'Species_Count': 82,
    'Year': 2012,
    'Endangered_Species': 40,
    'Diversity_Index': 1.18,
    'Region': 'Africa'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Plants',
    'Species_Count': 104,
    'Year': 2012,
    'Endangered_Species': 2,
    'Diversity_Index': 1.02,
    'Region': 'Asia'},
   {'Ecosystem': 'Wetland',
    'Species_Category': 'Reptiles',
    'Species_Count': 138,
    'Year': 2013,
    'Endangered_Species': 25,
    'Diversity_Index': 1.1,
    'Region': 'Australia'},
   {'Ecosystem': 'Savannah',
    'Species_Category': 'Mammals',
    'Species_Count': 113,
    'Year': 2013,
    'Endangered_Species': 35,
    'Diversity_Index': 0.91,
    'Region': 'Africa'},
   {'Ecosystem': 'Savannah',
    'Species_Category': 'Plants',
    'Species_Count': 294,
    'Year': 2013,
    'Endangered_Species': 28,
    'Diversity_Index': 0.74,
    'Region': 'Africa'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Reptiles',
    'Species_Count': 353,
    'Year': 2013,
    'Endangered_Species': 31,
    'Diversity_Index': 1.19,
    'Region': 'Asia'},
   {'Ecosystem': 'Wetland',
    'Species_Category': 'Amphibians',
    'Species_Count': 342,
    'Year': 2013,
    'Endangered_Species': 43,
    'Diversity_Index': 0.64,
    'Region': 'Australia'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Reptiles',
    'Species_Count': 179,
    'Year': 2013,
    'Endangered_Species': 24,
    'Diversity_Index': 0.89,
    'Region': 'Africa'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Birds',
    'Species_Count': 162,
    'Year': 2014,
    'Endangered_Species': 15,
    'Diversity_Index': 1.21,
    'Region': 'Asia'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Plants',
    'Species_Count': 91,
    'Year': 2014,
    'Endangered_Species': 18,
    'Diversity_Index': 1.16,
    'Region': 'Asia'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Insects',
    'Species_Count': 496,
    'Year': 2014,
    'Endangered_Species': 36,
    'Diversity_Index': 1.15,
    'Region': 'Asia'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Mammals',
    'Species_Count': 469,
    'Year': 2014,
    'Endangered_Species': 26,
    'Diversity_Index': 0.6,
    'Region': 'Asia'},
   {'Ecosystem': 'Mountain',
    'Species_Category': 'Plants',
    'Species_Count': 442,
    'Year': 2014,
    'Endangered_Species': 50,
    'Diversity_Index': 1.11,
    'Region': 'North America'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Birds',
    'Species_Count': 457,
    'Year': 2015,
    'Endangered_Species': 33,
    'Diversity_Index': 1.0,
    'Region': 'Asia'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Plants',
    'Species_Count': 331,
    'Year': 2015,
    'Endangered_Species': 24,
    'Diversity_Index': 1.08,
    'Region': 'Asia'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Reptiles',
    'Species_Count': 324,
    'Year': 2015,
    'Endangered_Species': 48,
    'Diversity_Index': 0.58,
    'Region': 'Asia'},
   {'Ecosystem': 'Lake',
    'Species_Category': 'Insects',
    'Species_Count': 222,
    'Year': 2015,
    'Endangered_Species': 6,
    'Diversity_Index': 1.11,
    'Region': 'South America'},
   {'Ecosystem': 'Mountain',
    'Species_Category': 'Mammals',
    'Species_Count': 192,
    'Year': 2015,
    'Endangered_Species': 19,
    'Diversity_Index': 0.67,
    'Region': 'North America'},
   {'Ecosystem': 'Savannah',
    'Species_Category': 'Mammals',
    'Species_Count': 419,
    'Year': 2015,
    'Endangered_Species': 27,
    'Diversity_Index': 1.17,
    'Region': 'Africa'},
   {'Ecosystem': 'Savannah',
    'Species_Category': 'Mammals',
    'Species_Count': 210,
    'Year': 2015,
    'Endangered_Species': 33,
    'Diversity_Index': 0.92,
    'Region': 'Africa'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Mammals',
    'Species_Count': 3,
    'Year': 2016,
    'Endangered_Species': 36,
    'Diversity_Index': 0.56,
    'Region': 'Africa'},
   {'Ecosystem': 'Lake',
    'Species_Category': 'Birds',
    'Species_Count': 261,
    'Year': 2016,
    'Endangered_Species': 36,
    'Diversity_Index': 0.66,
    'Region': 'South America'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Insects',
    'Species_Count': 462,
    'Year': 2016,
    'Endangered_Species': 42,
    'Diversity_Index': 0.75,
    'Region': 'Asia'},
   {'Ecosystem': 'Lake',
    'Species_Category': 'Reptiles',
    'Species_Count': 137,
    'Year': 2016,
    'Endangered_Species': 40,
    'Diversity_Index': 0.8,
    'Region': 'South America'},
   {'Ecosystem': 'Wetland',
    'Species_Category': 'Reptiles',
    'Species_Count': 381,
    'Year': 2017,
    'Endangered_Species': 20,
    'Diversity_Index': 1.28,
    'Region': 'Australia'},
   {'Ecosystem': 'Lake',
    'Species_Category': 'Reptiles',
    'Species_Count': 288,
    'Year': 2017,
    'Endangered_Species': 50,
    'Diversity_Index': 0.69,
    'Region': 'South America'},
   {'Ecosystem': 'Savannah',
    'Species_Category': 'Amphibians',
    'Species_Count': 480,
    'Year': 2017,
    'Endangered_Species': 24,
    'Diversity_Index': 1.03,
    'Region': 'Africa'},
   {'Ecosystem': 'Lake',
    'Species_Category': 'Insects',
    'Species_Count': 286,
    'Year': 2017,
    'Endangered_Species': 4,
    'Diversity_Index': 0.65,
    'Region': 'South America'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Birds',
    'Species_Count': 184,
    'Year': 2017,
    'Endangered_Species': 2,
    'Diversity_Index': 0.71,
    'Region': 'Africa'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Plants',
    'Species_Count': 240,
    'Year': 2017,
    'Endangered_Species': 15,
    'Diversity_Index': 0.95,
    'Region': 'Asia'},
   {'Ecosystem': 'Lake',
    'Species_Category': 'Reptiles',
    'Species_Count': 103,
    'Year': 2017,
    'Endangered_Species': 23,
    'Diversity_Index': 0.7,
    'Region': 'South America'},
   {'Ecosystem': 'Savannah',
    'Species_Category': 'Amphibians',
    'Species_Count': 357,
    'Year': 2017,
    'Endangered_Species': 45,
    'Diversity_Index': 1.06,
    'Region': 'Africa'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Mammals',
    'Species_Count': 232,
    'Year': 2017,
    'Endangered_Species': 4,
    'Diversity_Index': 1.4,
    'Region': 'Asia'},
   {'Ecosystem': 'Wetland',
    'Species_Category': 'Mammals',
    'Species_Count': 351,
    'Year': 2017,
    'Endangered_Species': 2,
    'Diversity_Index': 0.76,
    'Region': 'Australia'},
   {'Ecosystem': 'Wetland',
    'Species_Category': 'Birds',
    'Species_Count': 75,
    'Year': 2017,
    'Endangered_Species': 13,
    'Diversity_Index': 1.24,
    'Region': 'Australia'},
   {'Ecosystem': 'Lake',
    'Species_Category': 'Reptiles',
    'Species_Count': 60,
    'Year': 2017,
    'Endangered_Species': 13,
    'Diversity_Index': 0.71,
    'Region': 'South America'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Insects',
    'Species_Count': 293,
    'Year': 2018,
    'Endangered_Species': 34,
    'Diversity_Index': 1.33,
    'Region': 'Asia'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Birds',
    'Species_Count': 453,
    'Year': 2018,
    'Endangered_Species': 10,
    'Diversity_Index': 1.13,
    'Region': 'Africa'},
   {'Ecosystem': 'Savannah',
    'Species_Category': 'Insects',
    'Species_Count': 306,
    'Year': 2018,
    'Endangered_Species': 4,
    'Diversity_Index': 1.42,
    'Region': 'Africa'},
   {'Ecosystem': 'Savannah',
    'Species_Category': 'Mammals',
    'Species_Count': 441,
    'Year': 2018,
    'Endangered_Species': 40,
    'Diversity_Index': 1.15,
    'Region': 'Africa'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Reptiles',
    'Species_Count': 159,
    'Year': 2018,
    'Endangered_Species': 14,
    'Diversity_Index': 0.85,
    'Region': 'Africa'},
   {'Ecosystem': 'Mountain',
    'Species_Category': 'Amphibians',
    'Species_Count': 264,
    'Year': 2018,
    'Endangered_Species': 30,
    'Diversity_Index': 0.77,
    'Region': 'North America'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Mammals',
    'Species_Count': 394,
    'Year': 2018,
    'Endangered_Species': 49,
    'Diversity_Index': 1.32,
    'Region': 'Africa'},
   {'Ecosystem': 'Mountain',
    'Species_Category': 'Birds',
    'Species_Count': 72,
    'Year': 2018,
    'Endangered_Species': 12,
    'Diversity_Index': 0.94,
    'Region': 'North America'},
   {'Ecosystem': 'Savannah',
    'Species_Category': 'Plants',
    'Species_Count': 157,
    'Year': 2019,
    'Endangered_Species': 49,
    'Diversity_Index': 1.29,
    'Region': 'Africa'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Mammals',
    'Species_Count': 106,
    'Year': 2019,
    'Endangered_Species': 27,
    'Diversity_Index': 1.31,
    'Region': 'Asia'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Mammals',
    'Species_Count': 10,
    'Year': 2019,
    'Endangered_Species': 42,
    'Diversity_Index': 1.49,
    'Region': 'Asia'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Insects',
    'Species_Count': 436,
    'Year': 2019,
    'Endangered_Species': 24,
    'Diversity_Index': 1.22,
    'Region': 'Asia'},
   {'Ecosystem': 'Lake',
    'Species_Category': 'Birds',
    'Species_Count': 360,
    'Year': 2019,
    'Endangered_Species': 24,
    'Diversity_Index': 1.41,
    'Region': 'South America'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Amphibians',
    'Species_Count': 447,
    'Year': 2019,
    'Endangered_Species': 37,
    'Diversity_Index': 1.33,
    'Region': 'Asia'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Insects',
    'Species_Count': 499,
    'Year': 2019,
    'Endangered_Species': 9,
    'Diversity_Index': 1.23,
    'Region': 'Africa'},
   {'Ecosystem': 'Mountain',
    'Species_Category': 'Plants',
    'Species_Count': 165,
    'Year': 2019,
    'Endangered_Species': 4,
    'Diversity_Index': 1.0,
    'Region': 'North America'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Birds',
    'Species_Count': 424,
    'Year': 2019,
    'Endangered_Species': 50,
    'Diversity_Index': 0.89,
    'Region': 'Asia'},
   {'Ecosystem': 'Savannah',
    'Species_Category': 'Plants',
    'Species_Count': 388,
    'Year': 2019,
    'Endangered_Species': 31,
    'Diversity_Index': 1.46,
    'Region': 'Africa'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Reptiles',
    'Species_Count': 315,
    'Year': 2019,
    'Endangered_Species': 48,
    'Diversity_Index': 1.35,
    'Region': 'Asia'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Plants',
    'Species_Count': 134,
    'Year': 2020,
    'Endangered_Species': 49,
    'Diversity_Index': 0.99,
    'Region': 'Africa'},
   {'Ecosystem': 'Mountain',
    'Species_Category': 'Reptiles',
    'Species_Count': 468,
    'Year': 2020,
    'Endangered_Species': 33,
    'Diversity_Index': 1.22,
    'Region': 'North America'},
   {'Ecosystem': 'Lake',
    'Species_Category': 'Plants',
    'Species_Count': 217,
    'Year': 2020,
    'Endangered_Species': 35,
    'Diversity_Index': 1.33,
    'Region': 'South America'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Reptiles',
    'Species_Count': 378,
    'Year': 2020,
    'Endangered_Species': 18,
    'Diversity_Index': 0.92,
    'Region': 'Africa'},
   {'Ecosystem': 'Wetland',
    'Species_Category': 'Mammals',
    'Species_Count': 19,
    'Year': 2020,
    'Endangered_Species': 7,
    'Diversity_Index': 1.33,
    'Region': 'Australia'},
   {'Ecosystem': 'Mountain',
    'Species_Category': 'Amphibians',
    'Species_Count': 499,
    'Year': 2020,
    'Endangered_Species': 20,
    'Diversity_Index': 0.88,
    'Region': 'North America'},
   {'Ecosystem': 'Savannah',
    'Species_Category': 'Insects',
    'Species_Count': 68,
    'Year': 2021,
    'Endangered_Species': 37,
    'Diversity_Index': 1.07,
    'Region': 'Africa'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Amphibians',
    'Species_Count': 72,
    'Year': 2021,
    'Endangered_Species': 45,
    'Diversity_Index': 1.47,
    'Region': 'Africa'},
   {'Ecosystem': 'Lake',
    'Species_Category': 'Mammals',
    'Species_Count': 398,
    'Year': 2021,
    'Endangered_Species': 28,
    'Diversity_Index': 0.85,
    'Region': 'South America'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Mammals',
    'Species_Count': 397,
    'Year': 2021,
    'Endangered_Species': 9,
    'Diversity_Index': 0.56,
    'Region': 'Asia'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Amphibians',
    'Species_Count': 427,
    'Year': 2021,
    'Endangered_Species': 20,
    'Diversity_Index': 0.91,
    'Region': 'Asia'},
   {'Ecosystem': 'Wetland',
    'Species_Category': 'Reptiles',
    'Species_Count': 110,
    'Year': 2021,
    'Endangered_Species': 32,
    'Diversity_Index': 1.37,
    'Region': 'Australia'},
   {'Ecosystem': 'Forest',
    'Species_Category': 'Mammals',
    'Species_Count': 187,
    'Year': 2021,
    'Endangered_Species': 9,
    'Diversity_Index': 1.31,
    'Region': 'Asia'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Insects',
    'Species_Count': 433,
    'Year': 2021,
    'Endangered_Species': 50,
    'Diversity_Index': 0.57,
    'Region': 'Africa'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Birds',
    'Species_Count': 471,
    'Year': 2022,
    'Endangered_Species': 11,
    'Diversity_Index': 1.39,
    'Region': 'Africa'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Insects',
    'Species_Count': 282,
    'Year': 2022,
    'Endangered_Species': 22,
    'Diversity_Index': 1.19,
    'Region': 'Africa'},
   {'Ecosystem': 'Wetland',
    'Species_Category': 'Insects',
    'Species_Count': 331,
    'Year': 2022,
    'Endangered_Species': 17,
    'Diversity_Index': 1.04,
    'Region': 'Australia'},
   {'Ecosystem': 'Lake',
    'Species_Category': 'Birds',
    'Species_Count': 38,
    'Year': 2022,
    'Endangered_Species': 30,
    'Diversity_Index': 0.72,
    'Region': 'South America'},
   {'Ecosystem': 'Savannah',
    'Species_Category': 'Amphibians',
    'Species_Count': 51,
    'Year': 2022,
    'Endangered_Species': 7,
    'Diversity_Index': 0.74,
    'Region': 'Africa'},
   {'Ecosystem': 'Savannah',
    'Species_Category': 'Insects',
    'Species_Count': 186,
    'Year': 2022,
    'Endangered_Species': 30,
    'Diversity_Index': 0.85,
    'Region': 'Africa'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Amphibians',
    'Species_Count': 474,
    'Year': 2023,
    'Endangered_Species': 26,
    'Diversity_Index': 0.64,
    'Region': 'Africa'},
   {'Ecosystem': 'Wetland',
    'Species_Category': 'Birds',
    'Species_Count': 476,
    'Year': 2023,
    'Endangered_Species': 33,
    'Diversity_Index': 1.18,
    'Region': 'Australia'},
   {'Ecosystem': 'Savannah',
    'Species_Category': 'Plants',
    'Species_Count': 406,
    'Year': 2023,
    'Endangered_Species': 14,
    'Diversity_Index': 1.38,
    'Region': 'Africa'},
   {'Ecosystem': 'Lake',
    'Species_Category': 'Reptiles',
    'Species_Count': 61,
    'Year': 2023,
    'Endangered_Species': 3,
    'Diversity_Index': 0.59,
    'Region': 'South America'},
   {'Ecosystem': 'Lake',
    'Species_Category': 'Reptiles',
    'Species_Count': 177,
    'Year': 2023,
    'Endangered_Species': 27,
    'Diversity_Index': 1.28,
    'Region': 'South America'},
   {'Ecosystem': 'Coastal',
    'Species_Category': 'Amphibians',
    'Species_Count': 135,
    'Year': 2023,
    'Endangered_Species': 50,
    'Diversity_Index': 0.76,
    'Region': 'Africa'},
   {'Ecosystem': 'Lake',
    'Species_Category': 'Mammals',
    'Species_Count': 405,
    'Year': 2023,
    'Endangered_Species': 47,
    'Diversity_Index': 1.04,
    'Region': 'South America'},
   {'Ecosystem': 'Mountain',
    'Species_Category': 'Plants',
    'Species_Count': 467,
    'Year': 2023,
    'Endangered_Species': 40,
    'Diversity_Index': 0.0,
    'Region': 0}]
// Load data from the CSV file
const data = data_json
//d3.csv("evolution_biodiversity_dataset (1).csv").then(data => {
    // Convert numerical values
    data.forEach(d => {
        d.Species_Count = +d.Species_Count;
        d.Endangered_Species = +d.Endangered_Species;
        d.Diversity_Index = +d.Diversity_Index;
        d.Year = +d.Year;
    });
    

    // Calculer la somme totale des espèces en danger
    const totalEndangered = d3.sum(data, d => d.Endangered_Species);

    // Calculer la somme totale des espèces
    const totalSpecies = d3.sum(data, d => d.Species_Count);

    // Mettre à jour le texte des cartes dans l'entête
    d3.select("#endangered-species-total").text(totalEndangered); // Pour les espèces en danger
    d3.select("#species-count-total").text(totalSpecies); // Pour le total des espèces

    // Dimensions for all charts
    const width = 270, height = 400;

    // Donut Chart: Total Species_Count by Ecosystem
    
    const donutSvg = d3.select("#donut-chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + (width / 2) + "," + (height / 2) + ")");

    const speciesByEcosystem = d3.rollups(
        data,
        v => d3.sum(v, d => d.Species_Count),
        d => d.Ecosystem
    );

    const donutColor = d3.scaleOrdinal(d3.schemeCategory10);
    const pie = d3.pie().value(d => d[1]);
    const arc = d3.arc().innerRadius(30).outerRadius(70);

    donutSvg.selectAll("path")
        .data(pie(speciesByEcosystem))
        .join("path")
        .attr("d", arc)
        .attr("fill", d => donutColor(d.data[0]))
        .on("mouseover", function () {
            d3.select(this).style("opacity", 0.7);
        })
        .on("mouseout", function () {
            d3.select(this).style("opacity", 1);
        });
    donutSvg.selectAll("text")
        .data(pie(speciesByEcosystem))
        .join("text")
        .attr("transform", function (d) {
            const [x, y] = arc.centroid(d); // Calcule la position centrale de chaque segment
            return "translate(" + x + "," + y + ")";
        })
        .text(d => {
            const percentage = (d.data[1] / d3.sum(speciesByEcosystem, d => d[1])) * 100; // Calcule les pourcentages
            return Math.round(percentage) + "%"; // Arrondi au pourcentage entier
        })
        .style("font-size", "14px") // Assurez-vous que la taille du texte est suffisante pour être visible
        .style("text-anchor", "middle"); // Centre le texte


    // Légende pour le graphique en anneau
    const legend = donutSvg.append("g")
    .attr("transform", "translate(-120, 50)"); // Positionnement sous le graphique

    legend.selectAll("rect")
    .data(speciesByEcosystem)
    .join("rect")
    .attr("x", 0)
    .attr("y", (d, i) => i * 20)
    .attr("width", 15)
    .attr("height", 15)
    .attr("fill", d => donutColor(d[0]));

    legend.selectAll("text")
    .data(speciesByEcosystem)
    .join("text")
    .attr("x", 20)
    .attr("y", (d, i) => i * 20 + 12)
    .text(d => d[0])
    .style("font-size", "12px")
    .attr("fill", "#333");

    // Radar Chart: Average Diversity Index by Ecosystem
    const radarSvg = d3.select("#radar-chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + (width / 2) + "," + (height / 2) + ")");

    const diversityByEcosystem = d3.rollups(
        data,
        v => d3.mean(v, d => d.Diversity_Index),
        d => d.Ecosystem
    );

    const radarRadius = Math.min(width, height) / 2 - 40;
    const radarScale = d3.scaleLinear().domain([0, 1.5]).range([0, radarRadius]);
    const radarLine = d3.lineRadial()
        .radius(d => radarScale(d[1]))
        .angle((d, i) => (i * 2 * Math.PI) / diversityByEcosystem.length);

    radarSvg.selectAll("circle")
        .data(d3.range(1, 6).map(d => d * 0.3))
        .join("circle")
        .attr("r", d => radarScale(d))
        .attr("fill", "none")
        .attr("stroke", "#ddd");

    radarSvg.append("path")
        .datum(diversityByEcosystem)
        .attr("d", radarLine)
        .attr("fill", "rgba(31, 119, 180, 0.3)")
        .attr("stroke", "#1f77b4");

    radarSvg.selectAll("text")
        .data(diversityByEcosystem)
        .join("text")
        .attr("x", function(d, i) {
            return radarScale(d[1]) * Math.sin((2 * Math.PI * i) / diversityByEcosystem.length);
        })
        .attr("y", function(d, i) {
            return -radarScale(d[1]) * Math.cos((2 * Math.PI * i) / diversityByEcosystem.length);
        })
        .text(d => d[0])
        .style("font-size", "10px")
        .style("text-anchor", "middle");

    // Line Chart: Total Species_Count by Year
    const lineWidth = 500, lineHeight = 400;
    const lineSvg = d3.select("#line-chart")
        .append("svg")
        .attr("width", lineWidth)
        .attr("height", lineHeight)
        .append("g")
        .attr("transform", "translate(50, 20)");

    const speciesByYear = d3.rollups(
        data,
        v => d3.sum(v, d => d.Species_Count),
        d => d.Year
    );

    const xScale = d3.scaleLinear()
        .domain(d3.extent(speciesByYear, d => d[0]))
        .range([0, lineWidth - 100]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(speciesByYear, d => d[1])])
        .range([lineHeight - 50, 0]);

    lineSvg.append("g")
        .attr("transform", "translate(0, " + (lineHeight - 50) + ")")
        .call(d3.axisBottom(xScale).tickFormat(d3.format("d")));

    lineSvg.append("g")
        .call(d3.axisLeft(yScale));

    const line = d3.line()
        .x(d => xScale(d[0]))
        .y(d => yScale(d[1]));

    lineSvg.append("path")
        .datum(speciesByYear)
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", 2);

    lineSvg.selectAll("circle")
        .data(speciesByYear)
        .join("circle")
        .attr("cx", d => xScale(d[0]))
        .attr("cy", d => yScale(d[1]))
        .attr("r", 4)
        .attr("fill", "red");



    /*reda*/
    
    
//});

const biodiversityData = [
    { region: "Canada", threatened_species: 5000 },
    { region: "USA", threatened_species: 8000 },
    { region: "Brazil", threatened_species: 20000 },
    { region: "Argentina", threatened_species: 15000 },
    { region: "Germany", threatened_species: 4000 },
    { region: "France", threatened_species: 5000 },
    { region: "China", threatened_species: 30000 },
    { region: "India", threatened_species: 25000 },
    { region: "Australia", threatened_species: 6000 },
    { region: "South Africa", threatened_species: 7000 },
    { region: "Russia", threatened_species: 10000 },
    { region: "Japan", threatened_species: 2000 },
    { region: "Morocco", threatened_species: 3500 },
    { region: "Spain", threatened_species: 4500 },
    { region: "Portugal", threatened_species: 3000 },
    { region: "Italy", threatened_species: 4000 },
    { region: "Mexico", threatened_species: 12000 },
    { region: "Colombia", threatened_species: 18000 },
    { region: "Peru", threatened_species: 16000 },
    { region: "Chile", threatened_species: 14000 },
    { region: "Norway", threatened_species: 1500 },
    { region: "Sweden", threatened_species: 2000 },
    { region: "Finland", threatened_species: 1000 },
    { region: "Egypt", threatened_species: 2500 },
    { region: "Saudi Arabia", threatened_species: 3000 },
    { region: "Turkey", threatened_species: 4000 },
    { region: "Greece", threatened_species: 3500 }
];

// Charger le GeoJSON
d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then(function (geoData) {
    // Dimensions de la carte
    const width = 900, height = 500;

    // Création de l'élément SVG pour la carte
    const svg = d3.select("#endangered-species-map")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Définir la projection et le path pour dessiner la carte
    const projection = d3.geoMercator()
        .scale(130)
        .translate([width / 2, height / 1.5]);
    const path = d3.geoPath().projection(projection);

    // Créer une échelle de couleurs pour les valeurs de threatened_species
    const maxThreatenedSpecies = d3.max(biodiversityData, d => d.threatened_species);
    const colorScale = d3.scaleSequential(d3.interpolateOranges)
        .domain([0, maxThreatenedSpecies]);

    // Normaliser les noms dans le GeoJSON et associer les valeurs
    const dataMap = new Map(biodiversityData.map(function (d) {
        return [d.region.toLowerCase(), d.threatened_species];
    }));

    geoData.features.forEach(function (d) {
        const regionName = (d.properties.name || "").toLowerCase(); // Convertir en minuscule
        d.properties.threatened_species = dataMap.get(regionName) || 0; // Associer les données ou mettre 0 par défaut
    });

    // Dessiner les régions avec des couleurs basées sur les valeurs de threatened_species
    svg.selectAll("path")
        .data(geoData.features)
        .join("path")
        .attr("d", path)
        .attr("fill", function (d) {
            return colorScale(d.properties.threatened_species);
        })
        .attr("stroke", "#333")
        .on("mouseover", function (event, d) {
            d3.select(this).style("stroke-width", 2);
            const regionName = d.properties.name || "Unknown";
            const speciesCount = d.properties.threatened_species || "No data";
            d3.select("#endangered-species-map")
                .append("div")
                .attr("class", "tooltip")
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 10) + "px")
                .html("<strong>" + regionName + "</strong>: " + speciesCount + " threatened species");
        })
        .on("mouseout", function () {
            d3.select(this).style("stroke-width", 1);
            d3.select(".tooltip").remove();
        });

    // Ajouter une légende pour le dégradé
    const legendWidth = 300, legendHeight = 10;
    const legendSvg = svg.append("g")
        .attr("transform", "translate(450," + (height - 50) + ")");

    // Dégradé pour la légende
    const legendGradient = legendSvg.append("defs")
        .append("linearGradient")
        .attr("id", "gradient")
        .attr("x1", "0%")
        .attr("x2", "100%")
        .attr("y1", "0%")
        .attr("y2", "0%");

    legendGradient.selectAll("stop")
        .data(d3.range(0, 1.05, 0.05))
        .join("stop")
        .attr("offset", function (d) {
            return d * 100 + "%";
        })
        .attr("stop-color", function (d) {
            return colorScale(d * maxThreatenedSpecies);
        });

    // Ajouter un rectangle pour représenter le dégradé
    legendSvg.append("rect")
        .attr("width", legendWidth)
        .attr("height", legendHeight)
        .style("fill", "url(#gradient)");

    // Ajouter des axes pour la légende
    const legendScale = d3.scaleLinear()
        .domain([0, maxThreatenedSpecies])
        .range([0, legendWidth]);

    const legendAxis = d3.axisBottom(legendScale)
        .ticks(5)
        .tickFormat(d3.format(".0f"));

    legendSvg.append("g")
        .attr("transform", "translate(0," + legendHeight + ")")
        .call(legendAxis);
});