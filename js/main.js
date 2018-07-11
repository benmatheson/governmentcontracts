mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVubWF0aGVzb24iLCJhIjoiY2lmZDhyZXVxNTI5eHNtbHgyOTYwbHJtMyJ9.Ch8JQXvunpUrv6tGpeJMCA";

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

console.log("SCROOMLANG");
console.log(ScrollMagic);

// console.log(top5Contracts);

var gc1 = "./data/ny.geojson";
var navy = "./data/navy.geojson";
var navyLine = "./data/navyLine.geojson";
// var congressShape = './data/congressFull.geojson';

// var congressShape = './data/congressFullParse.geojson';

var congressShape = "./data/congressFullParse.json";

const circleSvg = d3
  .select("#circleDiv")
  .append("svg")
  .attr("width", 200)
  .attr("height", 200);

const circleSvgG = circleSvg.append("g");

/////BAR SVG

const barSvg = d3
  .select("#barDiv")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 140);

const barSvgG = barSvg.append("g");

const vbarSvg = d3
  .select("#vbarDiv")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 180);

const vbarSvgG = vbarSvg.append("g");

var radius = 50;
var width = 100;
var height = 100;
var thickness = 20;

var color = d3.scaleOrdinal(d3.schemePuRd);

var colorCustom = d3
  .scaleOrdinal() // D3 Version 4
  .domain([0, 1])
  .range(["#1f78b4", "whitesmoke"]);

var pieSvg = d3
  .select("#pie")
  .append("svg")
  // .attr('class', 'pie')
  .attr("width", width)
  .attr("height", height)
  .style("display", "block");

var pieSvgG = pieSvg
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var mapC = new mapboxgl.Map({
  container: "mapC",
  // style: 'mapbox://styles/mapbox/light-v9',
  style: "mapbox://styles/mapbox/dark-v9",
  // style: 'mapbox://styles/benmatheson/cjhcx9p8f1gmp2srs3jzhgcu3',
  // style: 'mapbox://styles/benmatheson/cjhcu2hpg1bhd2spnlx6sdxeo',
  // style: 'mapbox://styles/benmatheson/cjhebfhpm2se32rozggixu3np',

  pitch: 0,

  transition: {
    duration: 1300,
    delay: 0
  },
  // style: 'mapbox://styles/benmatheson/cjh2yaf301jjm2sru7r1uz7n7',

  center: [-106, 40],
  zoom: 3.6

  //   "transition": {
  //   "duration": 800,
  //   "delay": 0
  // }
});

mapC.on("load", function() {
  mapC.addSource("gcC", {
    type: "geojson",
    // data: 'https://rawgit.com/benmatheson/2011_test/master/ras_ak_red.geojson'
    data: congressShape
  });

  mapC.addLayer({
    id: "gcC",
    type: "fill",
    source: "gcC",

    paint: {
      // "line-color": "rgba(100,200,100,.5)"

      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "val"],
        1000000,
        "#454A62",
        80000000,
        "#6B5674",
        100000000,
        "#94607F",
        500000000,
        "#E27880",
        11618722504,
        "#ffbb7c"
      ],

      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "val"],
        1000000,
        "#453B51",
        500000000,
        "#5F5471",
        1000000000,
        "#7A6D92",
        2000000000,
        "#9688B5",
        5000000000,
        "#B2A4D9",
        11618722504,
        "#CFC1FE"
      ],

      "fill-opacity": 0.8
    }
  });

  mapC.addLayer({
    id: "gcCHover",
    type: "fill",
    source: "gcC",

    paint: {
      // "line-color": "rgba(100,200,100,.5)"

      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "val"],
        1000000,
        "#454A62",
        80000000,
        "#6B5674",
        100000000,
        "#94607F",
        500000000,
        "#E27880",
        11618722504,
        "#ffbb7c"
      ],
      "fill-outline-color": "#ffffff",
      "fill-opacity": 0.5
    },

    filter: ["==", "gcplace_of_performance_congressional_district", ""]
  });

  function executeZoom() {
    mapC.flyTo({
      center: [-78, 39],
      zoom: 5.5,
      speed: 0.5, // make the flying slow
      curve: 1 // change the speed at which it zooms out
    });
  }

  function executeZoomWide() {
    console.log("GOING WIDe");
    mapC.flyTo({
      center: [-108, 39],
      zoom: 3.5,
      speed: 0.5, // make the flying slow
      curve: 1 // change the speed at which it zooms out
    });
  }

  var controller = new ScrollMagic.Controller();

  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#mapTrigger",
    triggerHook: "onLeave",

    duration: 200
  })

    .addTo(controller)
    // .setClassToggle("#bars", "fade")
    .on("start", function() {
      executeZoom();
    });

  scene1.setPin("#mapC");
  scene1.setClassToggle("#keyTextId", "vis");
  scene1.setClassToggle("#keyDivId", "vis");
  scene1.reverse(false);

  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#mapWideTrigger",
    triggerHook: "onEnter",
    duration: 100,
    offset: 0
  })

    .addTo(controller)
    // .setClassToggle("#bars", "fade")
    .on("start", function() {
      executeZoomWide();
    });

  scene1.reverse(false);

  // map0.addLayer({
  //       "id": "navyLine",
  //       "type": "line",
  //     "source": "navyLine",

  //   'paint': {

  //          "line-color": "rgba(200,100,100,.05)",
  //           'line-width': 3,
  //           }

  //     })

  // map0.addLayer({
  //       "id": "navy",
  //       "type": "circle",
  //     "source": "navy",

  //   'paint': {

  //          "circle-color": "rgba(100,200,200,.1)"
  //           }

  //     })

  // Create a popup, but don't add it to the map yet.
  var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });

  mapC.on("mousemove", "gcC", function(e) {
    // console.log("NAME");
    // console.log(e.features[0].properties.gcplace_of_performance_congressional_district);
    mapC.setFilter("gcCHover", [
      "==",
      "gcplace_of_performance_congressional_district",
      e.features[0].properties.gcplace_of_performance_congressional_district
    ]);
  });

  mapC.on("mousemove", "gcC", function(e) {
    // Change the cursor style as a UI indicator.
    mapC.getCanvas().style.cursor = "pointer";

    // console.log(e.features[0].geometry.coordinates);
    var coordinates = e.features[0].geometry.coordinates[0][0].slice();
    var mouse = e.lngLat;

    var district =
      e.features[0].properties.gcplace_of_performance_congressional_district;
    var percent = e.features[0].properties.gcbeltwayContractCountPercent * 100;

    var value = e.features[0].properties.val;
    var numContracts = e.features[0].properties.gcpTotalContracts;

    var top5ContractsSorted;

    // console.log("TOP 5 CONTRACTEXTEND");
    // console.table(top5Contracts);

    var top1 = top5Contracts.filter(
      d => d.place_of_performance_congressional_district == district
    );
    top1.sort(function(a, b) {
      return b.dollars_obligated - a.dollars_obligated;
    });
    top1 = top1[0];

    console.log("TOP1!");
    console.log(top1);

    var top1Vendor = top1.vendor_name.toLowerCase();
    var top1Agency = top1.mod_agency.substring(6);
    var top1VLocation = top1.vLocation;

    var top1Description = top1.description_of_contract_requirement.toLowerCase();
    // console.log("top1");
    // console.log(top1);

    var popContent = `<div class="pop"><h3>District: </h3>
            ${district}
                <h3>Value of Contracts: </h3>$${(value / 1000000).toFixed(
                  2
                )} million</div>
                <h3>Number of Contracts Above $1 million: </h3>${numContracts}</div>
                <h3>Percent Based in Beltway: </h3>${parseFloat(
                  percent
                ).toFixed(2)}%</div>`;

    var sideContent = `<div class="panelFlex">

                <div class="sideItem"><h4>Congressional District: </h4><p>${district}</p></div>
                <div class="sideItem"><h4>Contract Value (millions): </h4><p> $${(
                  value / 1000000
                ).toFixed(2)}</p></div>
                <div class="sideItem"><h4>Contracts > $1 million: </h4><p>${numContracts}</p></div>
                <div class="sideItem"><h4>Percent Based in Beltway: </h4><p>${parseFloat(
                  percent
                ).toFixed(2)}%</p></div>
                <div class="sideItem"><h4>Largest Contract Vendor: </h4><p class="small">${toTitleCase(
                  top1Vendor
                )}</p></div>
                <div class="sideItem"><h4>Largest Contract Agency: </h4><p class="small">${toTitleCase(
                  top1Agency
                )}</p></div>
                <div class="sideItem"><h4>Largest Contract Location: </h4><p class="small">${top1VLocation}</p></div>
                <div class="sideItem"><h4>Description: </h4><p class="small">${toTitleCase(
                  top1Description
                )}</p></div></div>`;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // Populate the popup and set its coordinates
    // based on the feature found.
    // popup.setLngLat(coordinates)
    popup.setLngLat(mouse).setHTML(popContent);
    // .addTo(mapC);

    document.getElementById("sidePanelText").innerHTML = sideContent;
    // document.getElementById('initial').innerHTML = null;

    const circleX = d3
      .scaleLinear()
      .domain([0, 1000])
      .range([4, 150]);

    // console.log("circle data");
    // console.log(circleData)

    var circleData = [];

    circleData.push(e.features[0].properties.gcpTotalContracts);

    circleSvgG
      .selectAll("circle")
      .data(circleData)
      .exit()
      .remove();

    circleSvgG
      .selectAll("circle")
      .data(circleData)
      .enter()
      .append("circle")
      .attr("cx", 50)
      .attr("cy", 50)
      .attr("r", d => circleX(d))
      .attr("opacity", 0.5)
      .attr("fill", "none")
      .attr("stroke", "whitesmoke")
      .attr("stroke-width", 2);

    ////////////////BAR CHART ////////////////////////////

    // const barX = d3.scaleLinear().domain([1000000,10445364770]).range([0,1000]);

    var barData = [];

    barSvgG
      .selectAll("rect")
      .data(barData)
      .exit()
      .remove();

    barSvgG
      .selectAll("text")
      .data(barData)
      .exit()
      .remove();

    barSvgG
      .selectAll("line")
      .data(barData)
      .exit()
      .remove();

    var currentDistrict =
      e.features[0].properties.gcplace_of_performance_congressional_district;
    var currentData = top5Agency.filter(ag => ag.district == currentDistrict);

    var cdEx = d3.extent(currentData, d => d.agencySum);
    var cdMax = d3.max(currentData, d => d.agencySum);

    const barX = d3
      .scaleLinear()
      .domain([0, cdMax])
      .range([0, 400]);

    // console.log("cd");
    // console.log(currentDistrict);
    // console.log(currentData);

    barData.push(currentData);
    barData[0].sort((a, b) => b.agencySum - a.agencySum);
    // console.log("sorted data");
    // console.log(barData);
    // barData.d3.descending(a.agencySum, b.agencySum)

    // console.log("BARDATA");
    // console.log(barData);

    barSvgG
      .selectAll("rect")
      .data(barData[0])
      .enter()
      .append("rect")
      .attr("x", 210)
      .attr("y", (d, i) => i * 16 + 20)
      .attr("height", 10)
      .attr("width", d => barX(d.agencySum))
      .attr("opacity", 0.8)
      .attr("fill", "whitesmoke");

    barSvgG
      .selectAll("text")
      .data(barData[0])
      .enter()
      .append("text")
      .attr("x", 200)
      .attr("y", (d, i) => i * 16 + 29)
      .attr("text-anchor", "end")
      .text(d => d.majAgency)
      .attr("class", "barAxis");

    formatValue = d3.format(".2s");

    barSvgG
      .append("g")
      .attr("class", "barAnno")
      .call(
        d3
          .axisBottom(barX)
          .ticks(4)
          .tickFormat(function(d) {
            return formatValue(d).replace("G", "B");
          })
      )

      // .tickFormat(d3.format(".0s")))
      .attr("transform", "translate(" + 210 + "," + 100 + ")");

    barSvgG
      .append("text")
      .attr("x", 180)
      .attr("y", 11)
      // .text("District's Top Five Contracting Departments")
      .text(d => `${district}'s Largest Contracting Departments`)
      // .text(d=> `${d[0].district}'s Top Five Contracting Departments")`)
      // .attr('class', "barAxis")
      .attr("class", "barAxisTitle");

    // .attr("stroke-width", 2)

    barSvgG
      .append("text")
      .attr("x", 330)
      .attr("y", 138)
      // .text("District's Top Five Contracting Departments")
      .text(d => `Contract Value in Dollars`)
      .attr("class", "barAxis");

    ///////////////////END BAR CHART ///////////////////////////
  });

  mapC.on("mouseleave", "gcC", function() {
    mapC.getCanvas().style.cursor = "";
    popup.remove();
  });
});

//       // "icon-image": "{icon}-11",
//       // "text-field": "{title}",
//       "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
//       "text-offset": [0, 0.6],
//       "text-anchor": "top"
//   }

mapC.scrollZoom.disable();
// mapC.addControl(new mapboxgl.NavigationControl());
// map.addControl(new mapboxgl.Navigation({position: 'top-left'}));

/////MAP ////////////

// var map0 = new mapboxgl.Map({
//   container: 'map0',
//   // style: 'mapbox://styles/mapbox/light-v9',
//   // style: 'mapbox://styles/mapbox/dark-v9',
//   // style: 'mapbox://styles/benmatheson/cjhcx9p8f1gmp2srs3jzhgcu3',
//   // style: 'mapbox://styles/benmatheson/cjhcu2hpg1bhd2spnlx6sdxeo',
//   style: 'mapbox://styles/benmatheson/cjhebfhpm2se32rozggixu3np',

// "pitch": 0,

// "transition": {
//   "duration": 1300,
//   "delay": 0
// },
//   // style: 'mapbox://styles/benmatheson/cjh2yaf301jjm2sru7r1uz7n7',

//  center: [-100, 40],
//   zoom: 3.7,

// //   "transition": {
// //   "duration": 800,
// //   "delay": 0
// // }
// });

// // var red = './data/ras_ak_red.geojson';

// // var ak_simple_fake = './data/alaska_simplified_fake.geojson';

// map0.on('load', function() {

// // map.addSource('gc1', {
// //   type: 'geojson',
// //   // data: 'https://rawgit.com/benmatheson/2011_test/master/ras_ak_red.geojson'
// //   data: gc1
// // });

// // map.addSource('navy', {
// //   type: 'geojson',
// //   // data: 'https://rawgit.com/benmatheson/2011_test/master/ras_ak_red.geojson'
// //   data: navy
// // });
// // map.addSource('navyLine', {
// //   type: 'geojson',
// //   // data: 'https://rawgit.com/benmatheson/2011_test/master/ras_ak_red.geojson'
// //   data: navyLine
// // });

//   // map0.addLayer({
//   //       "id": "gc1",
//   //       "type": "line",
//   //     "source": "gc1",

//   //   'paint': {

//   //          "line-color": "rgba(100,200,100,.5)"
//   //           }

//   //     })

//   // map0.addLayer({
//   //       "id": "navyLine",
//   //       "type": "line",
//   //     "source": "navyLine",

//   //   'paint': {

//   //          "line-color": "rgba(200,100,100,.05)",
//   //           'line-width': 3,
//   //           }

//   //     })

//   // map0.addLayer({
//   //       "id": "navy",
//   //       "type": "circle",
//   //     "source": "navy",

//   //   'paint': {

//   //          "circle-color": "rgba(100,200,200,.1)"
//   //           }

//   //     })

//         })

//       //       // "icon-image": "{icon}-11",
//       //       // "text-field": "{title}",
//       //       "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
//       //       "text-offset": [0, 0.6],
//       //       "text-anchor": "top"
//       //   }

// map0.scrollZoom.disable();

///////////END MAP///////////

/////////// SECOND MAP////////////

// var map = new mapboxgl.Map({
//   container: 'map1',
//   // style: 'mapbox://styles/mapbox/light-v9',
//   // style: 'mapbox://styles/mapbox/dark-v9',
//   style: 'mapbox://styles/benmatheson/cjhcx9p8f1gmp2srs3jzhgcu3',
//   // style: 'mapbox://styles/benmatheson/cjh2yaf301jjm2sru7r1uz7n7',

//   "pitch": 0,

//  center: [-100, 40],
//   zoom: 3.7,
// //   "transition": {
// //   "duration": 800,
// //   "delay": 0
// // }
// });

// // var red = './data/ras_ak_red.geojson';
// var gc1 = './data/ny.geojson';
// var navy = './data/navy.geojson';
// var navyLine = './data/navyLine.geojson';
// // var ak_simple_fake = './data/alaska_simplified_fake.geojson';

// map.on('load', function() {

// // map.addSource('gc1', {
// //   type: 'geojson',
// //   // data: 'https://rawgit.com/benmatheson/2011_test/master/ras_ak_red.geojson'
// //   data: gc1
// // });

// // map.addSource('navy', {
// //   type: 'geojson',
// //   // data: 'https://rawgit.com/benmatheson/2011_test/master/ras_ak_red.geojson'
// //   data: navy
// // });
// // map.addSource('navyLine', {
// //   type: 'geojson',
// //   // data: 'https://rawgit.com/benmatheson/2011_test/master/ras_ak_red.geojson'
// //   data: navyLine
// // });

//   // map.addLayer({
//   //       "id": "gc1",
//   //       "type": "line",
//   //     "source": "gc1",

//    // 'paint': {

//   //          "line-color": "rgba(100,200,100,.5)"
//   //           }

//   //     })

//   // map.addLayer({
//   //       "id": "navyLine",
//   //       "type": "line",
//   //     "source": "navyLine",

//   //   'paint': {

//   //          "line-color": "rgba(200,100,100,.05)",
//   //           'line-width': 3,
//   //           }

//   //     })

//   // map.addLayer({
//   //       "id": "navy",
//   //       "type": "circle",
//   //     "source": "navy",

//   //   'paint': {

//   //          "circle-color": "rgba(100,200,200,.1)"
//   //           }

//   //     })

//         })

//       //       // "icon-image": "{icon}-11",
//       //       // "text-field": "{title}",
//       //       "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
//       //       "text-offset": [0, 0.6],
//       //       "text-anchor": "top"
//       //   }

// map.scrollZoom.disable();

// function toggleStyle (sty) {

//     map.setStyle(sty);
//     // console.log("setting style");

// }

// function toggleDotStyle (sty) {

//     map0.setStyle(sty);
//     console.log("setting style");

// }

const dotX = d3
  .scaleLinear()
  .domain([1000000, 500000000])
  .range([50, 300]);

console.log(dotX(500000000));

// const vendorDotsvg =  d3.select('#vendorDot')
//                         .append('svg')
//                         .attr("width", 900)
//                         .attr ("height", 100)

///////////////#VENDOR DOT ///////////////////////

// d3.csv("data/top100VendorOutput.csv", function(data1){

// data1.forEach(function (d){

//   d.dollars_obligated = +d.dollars_obligated;

//   })

// const boeing = data1.filter(d=>d.vendor_name=="BOEING COMPANY, THE");
// const boat = data1.filter(d=>d.vendor_name=="ELECTRIC BOAT CORPORATION");
// const hunt = data1.filter(d=>d.vendor_name=="HUNTINGTON INGALLS INCORPORATED");
// const lockheed = data1.filter(d=>d.vendor_name=="LOCKHEED MARTIN CORPORATION");
// const mc = data1.filter(d=>d.vendor_name=="MCKESSON CORPORATION");

// console.log(boeing);

// function createDot (el, data) {

// const vendorDotsvg =  d3.select(el)
//                         .append('svg')
//                         .attr("width", 1100)
//                         .attr ("height", 140);

// const vendorDotG = vendorDotsvg.append('g');

// vendorDotsvg.selectAll('circle')
//   .data(data)
//   .enter()
//   .append('circle')
//   .attr("cx", d=> dotX(d.dollars_obligated))
//   .attr("cy", 37)
//   .attr("r", 8)
//   .attr("opacity", .4)
//   .attr("stroke-width", .3)
//   .attr("fill", function(d){
//     return d.beltwayMetro == "inBeltway" ? "purple" : "orange"

//   });

// vendorDotsvg.append('text')

//     .attr("x", 3)
//     .attr("y", 19)
//     .text((data[1].vendor_name).toLowerCase())
//     .attr("class", "anno")

// vendorDotsvg.append('text')

//     .attr("y", 65)
//     .attr("x",  dotX(1000000))
//     .text("$1 million" )
//     .attr("class", "annoItal")

// vendorDotsvg.append('text')

//     .attr("y", 65)
//     .attr("x", dotX(100000000))
//     .text("$100 million" )
//     .attr("class", "annoItal")

// vendorDotsvg.append('text')

//     .attr("y", 65)
//     .attr("x",  dotX(400000000))
//     .text("$500 million" )
//     .attr("class", "annoItal")

// }

// createDot("#vendorDot1", boeing)
// createDot("#vendorDot2", boat)
// createDot("#vendorDot3", hunt)
// createDot("#vendorDot4", lockheed)
// createDot("#vendorDot5", mc)

// })

///////////////#VENDOR DOT END ///////////////////////

///////////PRODUCT DOT

d3.csv("data/top100ProductOutput.csv", function(data3) {
  //////tooltips

  // tooltip mouseover event handler
  var tipMouseover = function(d) {
    // var color = colorScale(d.manufacturer);
    var html1 =
      "Vendor Name: " +
      d.vendor_name +
      "<br/>" +
      "Dollars Obligated: $" +
      parseInt(d.dollars_obligated).toLocaleString() +
      "<br />" +
      "Description: " +
      d.description_of_contract_requirement;

    var html1 = `<p class = "b">Vendor Name:</p>${d.vendor_name}
                             <p class = "b">Dollars Obligated:</p> ${
                               d.dollars_obligated.toLocaleString()
                             } <br />
                             <p class = "b">Description:</p> ${
                               d.description_of_contract_requirement
                             }`;

    d3.select(this).attr("stroke-width", 1);
    d3.select(this).attr("stroke", "white");
    // d3.select(this).attr("stroke", "red");

    var visTool = document.getElementById("visTool");

    visTool.innerHTML = html1;

    var visD3 = d3
      .select("div#visTool")
      // .style("left", ()=>d3.select(this).attr("cx"))
      .style("top", () => `${d3.event.pageY + 10}px`)
      // .style("display", "absolute")
      .style("left", () => `${d3.event.pageX}px`)
      .transition()
      .duration(100) // ms
      .style("opacity", 0.95);
  };

  var tipMouseout = function(d) {
    var visD32 = d3
      .select("div#visTool")
      // .style("left", ()=>d3.select(this).attr("cx"))
      .style("top", () => `${d3.event.pageY + 10}px`)
      // .style("display", "absolute")
      .style("left", () => `${d3.event.pageX}px`);

    visD32
      .transition()
      .duration(300) // ms
      .style("opacity", 0);

    d3.select(this).attr("width", 6);
    d3.select(this).attr("stroke-width", 0);
    d3.select(this).attr("stroke", "none");

    // console.log("were out!!!")
  };

  //////////end tooltips

  data3.forEach(function(d) {
    d.dollars_obligated = +d.dollars_obligated;
  });

  const aircraft = data3.filter(
    d => d.product_or_service_code == "1510: AIRCRAFT, FIXED WING"
  );
  const support = data3.filter(
    d =>
      d.product_or_service_code ==
      "R425: SUPPORT- PROFESSIONAL: ENGINEERING/TECHNICAL"
  );
  const oper = data3.filter(
    d => d.product_or_service_code == "M181: OPER OF GOVT R&D GOCO FACILITIES"
  );
  const medical = data3.filter(
    d => d.product_or_service_code == "Q201: MEDICAL- GENERAL HEALTH CARE"
  );
  const combat = data3.filter(
    d => d.product_or_service_code == "1905: COMBAT SHIPS AND LANDING VESSELS"
  );

  // const nuclear = data3.filter(d=>d.product_or_service_code=="4470: NUCLEAR REACTORS");
  // const missiles = data3.filter(d=>d.product_or_service_code=="1410: GUIDED MISSILES");
  // const bombs = data3.filter(d=>d.product_or_service_code=="1325: BOMBS");
  // const fuel = data3.filter(d=>d.product_or_service_code=="9130: LIQUID PROPELLANTS AND FUELS, PETROLEUM BASE");

  const rotarywing = data3.filter(
    d => d.product_or_service_code == "1520: AIRCRAFT, ROTARY WING"
  );

  const telcom = data3.filter(
    d =>
      d.product_or_service_code ==
      "D399: IT AND TELECOM- OTHER IT AND TELECOMMUNICATIONS"
  );

  function createDot(el, data) {
    const vendorDotsvg = d3
      .select(el)
      .append("svg")
      .attr("width", 1100)
      .attr("height", 100)
      .style("background", "#262626");

    const vendorDotG = vendorDotsvg.append("g");

    vendorDotsvg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("rect")
      .attr("y", 37)
      .attr("x", 0)

      .attr("width", 6)
      .attr("height", 14)
      .attr("opacity", 0.4)
      .attr("stroke-width", 0.3)
      .attr("fill", function(d) {
        return d.beltwayMetro == "inBeltway" ? "red" : "lightblue";
      })
      .on("mouseover", tipMouseover)
      .on("mouseout", tipMouseout)
      .transition()
      .delay((d, i) => i * 20)
      .attr("x", d => dotX(d.dollars_obligated));

    vendorDotsvg
      .append("text")

      .attr("x", 20)
      .attr("y", 19)
      .text(data[1].product_or_service_code.substring(5))
      .attr("class", "annoDarkRect");

    vendorDotsvg
      .append("text")

      .attr("y", 65)
      .attr("x", dotX(1000000))
      .text("$1 million")
      .attr("class", "annoItal");

    // vendorDotsvg.append('text')

    //     .attr("y", 65)
    //     .attr("x", dotX(100000000))
    //     .text("$100 million" )
    //     .attr("class", "annoItal")

    vendorDotsvg
      .append("text")

      .attr("y", 65)
      .attr("x", dotX(400000000))
      .text("$500 million")
      .attr("class", "annoItal");

    vendorDotsvg
      .append("text")

      .attr("y", 65)
      .attr("x", dotX(1000000000))
      .text("$1 billion")
      .attr("class", "annoItal");
  }

  function executeDots() {
    createDot("#productDot1", aircraft);
    createDot("#productDot2", support);
    createDot("#productDot3", oper);
    createDot("#productDot4", medical);
    createDot("#productDot5", combat);

    // // createDot("#productDot6", nuclear)
    // createDot("#productDot7", missiles)
    createDot("#productDot8", rotarywing);
    createDot("#productDot9", telcom);
  }

  var controller2 = new ScrollMagic.Controller();

  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#productTrigger",
    duration: 100
  })

    .addTo(controller2)
    // .setClassToggle("#bars", "fade")
    .on("start", function() {
      executeDots();
    });

  scene3.reverse(false);
});

////////////PRODUCT DOT END////////

////////////BELTWAY BAR ////////

// d3.csv("data/gcGroupMetroBeltway.csv", function (data2) {

//   data2.forEach(function(d){
// d.total =+d.total;
// d.metroBeltPercent =+d.metroBeltPercent

//   })

// data2.sort(function (a,b) {return (b.total-a.total)})

// // ag = data2.filter(d=>d.maj_fund_agency_cat =="1200: Department of Agriculture")
// // vet = data2.filter(d=>d.maj_fund_agency_cat =="3600: Department of Veterans Affairs")

// const beltPercentX = d3.scaleLinear().range([0,1100]).domain([0,239955928306.92])

//   const beltPercent = d3.select('#beltPercent').append('svg')
//     .attr('height', 2000)
//     .attr('width', 1100)

//   const beltPercentG = beltPercent.append('g');

//   const beltPercentGSelect =

//     beltPercentG
//     .selectAll('rect')
//     .data(data2)
//     .enter()

// var first = beltPercentGSelect
//   .append('rect')
//     .attr('x', 20)
//     .attr('y', (d,y) =>y*25)
//     .attr('height', 22)
//     .attr("width", d=>beltPercentX(d.total))
//     .attr("fill", "purple")

// // var t = textures.lines()
// //   .thicker();

// //  first.call(t)
// //   .style("fill", t.url());

//  beltPercentGSelect
//   .append('rect')
//     .attr("x", 20)
//     .attr('y', (d,i) =>i*25)
//     .attr('height', 22)
//     .attr("width", d=>beltPercentX(d.total)*d.metroBeltPercent)
//     .attr("fill", "pink")

//  beltPercentGSelect
//   .append('text')
//     .attr("x", 25)
//     .attr('y', (d,i) =>(i*25)+18)
//         .text( d=>d.maj_fund_agency_cat)
//         .attr("class", "annoItal")

// })

////////////BELTWAY BAR  END////////

////////////////BELTWAY CIRCLES //////////////////////////

// d3.csv("data/gcGroupMetroBeltway.csv", function (data2) {

//   data2.forEach(function(d){
// d.total =+d.total;
// d.metroBeltPercent =+d.metroBeltPercent

//   })

// data2.sort(function (a,b) {return (b.total-a.total)})

// // ag = data2.filter(d=>d.maj_fund_agency_cat =="1200: Department of Agriculture")
// // vet = data2.filter(d=>d.maj_fund_agency_cat =="3600: Department of Veterans Affairs")

// const beltPercentX = d3.scaleLinear().range([0,10000]).domain([0,239955928306.92])

//   const beltPercent = d3.select('#beltCircle').append('svg')
//     .attr('height', 2000)
//     .attr('width', 1100)

//   const beltPercentG = beltPercent.append('g');

//   const beltPercentGSelect =

//     beltPercentG
//     .selectAll('circle')
//     .data(data2)
//     .enter()

// var first = beltPercentGSelect
//   .append('circle')
//     .attr('cx', 400)
//     .attr('cy', (d,y) =>y*75+150)
//     .attr("r", d=>Math.sqrt(beltPercentX(d.total)))
//     .attr("stroke-width", 22)
//     .attr("stroke-color", "red")
//     .attr("fill", "purple")
//     .attr("opacity", .3)

// // var t = textures.lines()
// //   .thicker();

// //  first.call(t)
// //   .style("fill", t.url());

//  beltPercentGSelect
//   .append('circle')
//     .attr("cx", 400)
//     .attr('cy', (d,i) =>i*75+150)
//     .attr("r", d=>Math.sqrt(beltPercentX(d.total)*d.metroBeltPercent))
//     .attr("fill", "lightpink")
// .attr("opacity", .3)

// beltPercentGSelect
//   .append('text')
//     .attr("x", 500)
//     .attr('y', (d,i) =>i*75+150)
//         .text( d=>d.maj_fund_agency_cat)
//         .attr("class", "annoItal")
//         .style("fill", "white")

// })

////////////////BELTWAY CIRCLES END //////////////////////////

var vendorCircleSvg = d3
  .select("#vendorCircle")
  .append("svg")
  .attr("width", 100)
  .attr("height", 100)
  .append("g");

d3.csv("data/agencySummaryPie.csv", function(agData) {
  d3.csv("data/gcAgencyCombined20180701.csv", function(ag5Data) {
    ag5Data.forEach(function(d) {
      return (d.pTotal = +d.pTotal);
    });

    console.log("AG DATA");
    console.log(agData);

    console.log("AG5 DATA");
    console.log(ag5Data);

    const agSelect = d3.select("#agencySelect");

    ////////update function

    agSelect.on("change", function dog() {
      // var agency;
      console.log("DA VALUE");
      console.log(d3.event.target.value);

      //////THIS WORKS
      d3.event.target.value == null
        ? (agency = "Department of Defense")
        : (agency = d3.event.target.value);

      // d3.event.target.value;

      agencySummary = agData.filter(d => d.majAgency == agency);
      agencyTop5 = ag5Data.filter(d => d.majAgency == agency);

      console.log("INITAIONAL SUMMAR");
      console.log(agencySummary);

      const agencyTop5Product = agencyTop5.filter(
        d => d.attribute == "product"
      );
      const agencyTop5Vendor = agencyTop5.filter(d => d.attribute == "vendor");
      const agencyTop5vLocation = agencyTop5.filter(
        d => d.attribute == "vLocation"
      );

      agencyTop5vLocation.sort(function(a, b) {
        return b.pTotal - a.pTotal;
      });
      agencyTop5Vendor.sort((a, b) => b.pTotal - a.pTotal);
      agencyTop5Product.sort((a, b) => b.pTotal - a.pTotal);

      // console.log(agencyTop5);
      console.log("VVENDRO");
      console.log(agencyTop5Vendor);

      function updateAgency(agency) {
        // console.log(agencySummary);
        // console.log(agencyTop5);

        var localizeString = parseInt(agencySummary[0].num).toLocaleString();

        console.log("updating agency");
        // d3.select('.agencyName')
        //   // .append('text')
        //   .text(agency)

        d3.select("#numContracts")
          // .append('text')
          .text(localizeString);

        d3.select("#valContracts")
          // .append('text')
          .text(`$${(agencySummary[0].total / 1000000000).toFixed(2)}B`);

        d3.selectAll("ul").remove();

        var listVendor = d3.select("#vendors5").append("ul");

        listVendor
          .selectAll("li")
          .data(agencyTop5Vendor)
          .enter()
          .append("li")
          .text(d => d.desc)
          .attr("class", "annoDark");

        var listProduct = d3.select("#products5").append("ul");

        listProduct
          .selectAll("li")
          .data(agencyTop5Product)
          .enter()
          .append("li")
          // .text(d=>(d.desc).substring(5))
          .text(d => toTitleCase(d.desc.substring(5)))

          .attr("class", "annoDark");

        var listvLocation = d3.select("#vlocations5").append("ul");

        listvLocation
          .selectAll("li")
          .data(agencyTop5vLocation)
          .enter()
          .append("li")
          .text(d => d.desc)
          .attr("class", "annoDark");

        // .append('text')
        // .text(JSON.stringify(agencyTop5Vendor))
        // .text(agencyTop5Vendor)
        // .text(agencyTop5vLocation)

        pieSvg
          .selectAll("g")
          // .data(pieData)
          // .exit()
          .remove();

        // var pieSvgG = pieSvg.append('g')

        // circleSvgG.selectAll('circle')
        //   .data(circleData)
        //   .exit()
        //   .remove();

        vendorCircleSvg
          .selectAll("circle")
          // .data(agencyTop5Vendor)
          // .exit()
          .remove();

        vendorCircleSvg
          .selectAll("circle")
          .data(agencyTop5Vendor)
          .enter()
          .append("circle")
          .attr("cx", 100)
          .attr("cy", 100)
          .attr("r", d => d.pTotal / 100000000)
          .attr("stroke", "red")
          .attr("stroke-width", 0.3)
          .attr("fill", "none");

        //////////////barwith

        // var vbarData = [];

        vbarSvgG
          .selectAll("rect")
          // .data(agencyTop5Vendor)
          // // .exit()
          //   .transition()
          // .duration(800)
          // .ease(d3.easeExp)

          .remove();

        vbarSvgG
          .selectAll("text")
          // .data(agencyTop5Vendor)
          // .exit()
          //   .transition()
          // .duration(800)
          // .ease(d3.easeExp)

          .remove();

        vbarSvgG
          .selectAll("line")
          // .data(agencyTop5Vendor)
          // .exit()
          .remove();

        // var currentDistrict = e.features[0].properties.gcplace_of_performance_congressional_district;
        // var currentData = top5Agency.filter(ag => ag.district == currentDistrict);

        var vcdEx = d3.extent(agencyTop5Vendor, d => d.pTotal);
        var vcdMax = d3.max(agencyTop5Vendor, d => d.pTotal);

        console.log("EXTED");
        console.log(vcdEx);

        const vbarX = d3
          .scaleLinear()
          .domain([0, vcdMax])
          .range([0, 800]);

        // console.log("cd");
        // console.log(currentDistrict);
        // console.log(currentData);

        // barData.push(currentData);
        // barData[0].sort((a,b)=>b.agencySum-a.agencySum)

        // console.log("sorted data");
        // console.log(barData);
        // barData.d3.descending(a.agencySum, b.agencySum)

        // console.log("BARDATA");
        // console.log(barData);

        vbarSvgG
          .selectAll("rect")
          .data(agencyTop5Vendor)
          .enter()
          .append("rect")
          .attr("x", 280)
          .attr("y", (d, i) => i * 18 + 20)
          .attr("height", 9)
          .attr("width", (d, i) => i * 160)
          .attr("opacity", 0.9)
          .attr("fill", "white")
          .transition()
          .duration(800)
          .ease(d3.easeExp)
          // .delay((d,i)=> i*150)
          .attr("width", d => vbarX(d.pTotal));

        vbarSvgG
          .selectAll("text")
          .data(agencyTop5Vendor)
          .enter()
          .append("text")
          .attr("x", 270)
          .attr("y", (d, i) => i * 18 + 28)
          .attr("text-anchor", "end")
          // .text(d=>d.desc.substring(0,28).toLowerCase())
          .text(d => toTitleCase(d.desc.substring(0, 28)))
          .attr("class", "barAxis");

        formatValue = d3.format(".2s");

        vbarSvgG
          .append("g")
          .attr("class", "barAnno")
          .call(
            d3
              .axisBottom(vbarX)
              .ticks(3)

              // .tickFormat(function(d) { return formatValue(d).replace('G', 'B'); }))
              // .tickFormat(function(d) { return formatValue(d)})
              // .tickFormat(d3.format(".0s")))

              .tickFormat(function(d) {
                return formatValue(d).replace("G", "B");
              })
          )

          .attr("transform", "translate(" + 280 + "," + 120 + ")");

        // vbarSvgG.append('text')
        //           .text("feres")
        //           .attr("x","290")
        //           .attr("y","150")
        //           .attr('class', "barAnno")

        vbarSvgG
          .append("text")
          .attr("x", 590)
          .attr("y", 165)
          // .text("District's Top Five Contracting Departments")
          .text(d => `Contract Value in Dollars`)
          .attr("class", "barAxis");

        //             .tickFormat(function(d) { return formatValue(d).replace('G', 'B'); }))

        // // .tickFormat(d3.format(".0s")))
        //   .attr("transform",
        //   "translate(" + 205 + "," + 170 + ")")

        ////////////////bar within end///

        /////////////CIRCLE///////////////

        // agencySummary

        var pieData = [];

        var pieData1 = {};
        var pieData2 = {};

        pieData1.value = agencySummary[0].metroBeltSpendPercent;
        pieData2.value = agencySummary[0].nonMetroSpend;

        console.log("PIEDdatw1");
        console.log(pieData1);

        pieData.push(pieData1, pieData2);

        console.log("PIEDAYA");
        console.log(pieData);

        // var radius = 50;
        // var width = 200;
        // var height= 200;
        // var thickness = 20;

        // var color = d3.scaleOrdinal(d3.schemeCategory10);

        // var pieSvg = d3.select("#pie")
        // .append('svg')
        // // .attr('class', 'pie')
        // .attr('width', width)
        // .attr('height', height);

        var pieSvgG = pieSvg
          .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var arc = d3
          .arc()
          .innerRadius(radius - thickness)
          .outerRadius(radius);

        var pie = d3
          .pie()
          .value(function(d) {
            return d.value;
          })
          .sort(null);

        pieSvgG
          .selectAll("path")
          // .data(pieData)
          // .exit()
          .remove();

        var path = pieSvgG
          .selectAll("path")
          .data(pie(pieData))
          .enter()
          .append("g")
          // .on("mouseover", function(d) {
          //       let g = d3.select(this)
          //         .style("cursor", "pointer")
          //         .style("fill", "black")
          //         .append("g")
          //         .attr("class", "text-group");

          //       g.append("text")
          //         .attr("class", "name-text")
          //         .text(`${d.data.name}`)
          //         .attr('text-anchor', 'middle')
          //         .attr('dy', '-1.2em');

          //       g.append("text")
          //         .attr("class", "value-text")
          //         .text(`${d.data.value}`)
          //         .attr('text-anchor', 'middle')
          //         .attr('dy', '.6em');
          //     })
          //   .on("mouseout", function(d) {
          //       d3.select(this)
          //         .style("cursor", "none")
          //         .style("fill", color(this._current))
          //         .select(".text-group").remove();
          //     })
          .append("path")
          .attr("d", arc)
          .attr("fill", (d, i) => colorCustom(i));

        var totalLength = path.node().getTotalLength();

        console.log("TOTALLENG");
        console.log(totalLength);

        path
          .attr("stroke-dasharray", totalLength + " " + totalLength)
          .attr("stroke-dashoffset", totalLength)
          .transition()
          .duration(2000)
          .ease(d3.easeExp)
          .attr("stroke-dashoffset", 0)
          .attr("stroke-dashoffset", totalLength);

        // .on("mouseover", function(d) {
        //     d3.select(this)
        //       .style("cursor", "pointer")
        //       .style("fill", "black");
        //   })
        // .on("mouseout", function(d) {
        //     d3.select(this)
        //       .style("cursor", "none")
        //       .style("fill", color(this._current));
        //   })
        // .each(function(d, i) { this._current = i; });

        /////////////////////circle end//////////
      }

      updateAgency(agency);

      // Create the event
      // var event = new CustomEvent(updateAgency, "Department of Agriculture");

      // Dispatch/Trigger/Fire the event
      document.dispatchEvent(event);
    });

    var agency = "Department of Energy";

    var sel1 = document.querySelector("#agencySelect");

    // console.log("SEL1");
    // console.log(sel1.onchange);

    // sel1.onchange;

    // var sEl = document.querySelector('select');

    // console.log(sEl);

    // sEl.onchange("Department of Energy");

    // var event = new Event('change');

    // sEl.onchange();

    var agency = "Department of Agriculture";

    var element = document.getElementById("agencySelect");
    var event = new Event("change", { bubbles: true });
    element.dispatchEvent(event);

    // // Dispatch it.
    // sEl.dispatchEvent(event);
    // sEl.onchange("Department of Agriculture");

    // dog("Department of Defense")

    // agSelect.onchange('Department of Agriculture');

    // agSelect.call(dog, "Department of Defense")

    // d3.select(window).on("load", updateAgency("Department of Defense"));

    // d3.select('#next')
    //   .attr('selected', 'selected')
  });
});

// var typed1 = new Typed('#typed1', {
//     strings: ["MODIFICATION ESTABLISHES A UCA IN SUPPORT OF ITEMS 1001, 1005, 1012...",
// "ACAT I C-130J MYPC II, FY14 - FY18 AIRCRAFT BUY", "OPTION EXERCISE FOR B-52 CONECT FULL FLEET UPGRADE CONTRACT",
// "THE PURPOSE OF THIS MODIFICATION IS TO REVISE FUNDING ON THE LRIP 9 UCA AIRCRAFT CLINS.",
// "NRCS APPLICATION DEVELOPMENT AND SUPPORT SERVICES IGF::OT::IGF",
// "PROVIDES HEALTHCARE REGION DESIGNATED MANAGED CARE SUPPORT SERVICES FOR THE DEPARTMENT OF DEFENSE'S TRICARE PROGRAM.",
// "WORLD TRADE CENTER HEALTH CARE PROGRAM",
// "MODIFY CONTRACTEXTEND POP OF CONTRACT- 7/1/15-6/30/16 IGF::OT::IGF;TO EXERCISE OPTION 4, 7/1/2016-06/30/2017",
// "THE MAJORITY OF WORK UNDER THIS CONTRACT SHALL BE IN SUPPORT OF MISSIONS OF THE GSFC. "],
//     typeSpeed: 1,
//     backSpeed: 0,
//     cursorChar: '_',
//     shuffle: true,
//     smartBackspace: false,
//     loop: true
//   });
