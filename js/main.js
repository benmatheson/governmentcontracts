mapboxgl.accessToken = 'pk.eyJ1IjoiYmVubWF0aGVzb24iLCJhIjoiY2lmZDhyZXVxNTI5eHNtbHgyOTYwbHJtMyJ9.Ch8JQXvunpUrv6tGpeJMCA'




var map0 = new mapboxgl.Map({
  container: 'map0',
  // style: 'mapbox://styles/mapbox/light-v9',
  // style: 'mapbox://styles/mapbox/dark-v9',
  // style: 'mapbox://styles/benmatheson/cjhcx9p8f1gmp2srs3jzhgcu3',
  // style: 'mapbox://styles/benmatheson/cjhcu2hpg1bhd2spnlx6sdxeo',
  style: 'mapbox://styles/benmatheson/cjhebfhpm2se32rozggixu3np',

"pitch": 0,

"transition": {
  "duration": 1300,
  "delay": 0
},
  // style: 'mapbox://styles/benmatheson/cjh2yaf301jjm2sru7r1uz7n7',

  
 center: [-100, 40],
  zoom: 3.7,

//   "transition": {
//   "duration": 800,
//   "delay": 0
// }
});

// var red = './data/ras_ak_red.geojson';
var gc1 = './data/ny.geojson';
var navy = './data/navy.geojson';
var navyLine = './data/navyLine.geojson';
// var ak_simple_fake = './data/alaska_simplified_fake.geojson';

map0.on('load', function() {


// map.addSource('gc1', {
//   type: 'geojson',
//   // data: 'https://rawgit.com/benmatheson/2011_test/master/ras_ak_red.geojson'
//   data: gc1
// });


// map.addSource('navy', {
//   type: 'geojson',
//   // data: 'https://rawgit.com/benmatheson/2011_test/master/ras_ak_red.geojson'
//   data: navy
// });
// map.addSource('navyLine', {
//   type: 'geojson',
//   // data: 'https://rawgit.com/benmatheson/2011_test/master/ras_ak_red.geojson'
//   data: navyLine
// });



       


  // map0.addLayer({
  //       "id": "gc1",
  //       "type": "line",
  //     "source": "gc1",

  //   'paint': {
           
  //          "line-color": "rgba(100,200,100,.5)"
  //           }
  

  //     })





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





        })

      //       // "icon-image": "{icon}-11",
      //       // "text-field": "{title}",
      //       "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      //       "text-offset": [0, 0.6],
      //       "text-anchor": "top"
      //   }
  
map0.scrollZoom.disable();










var map = new mapboxgl.Map({
  container: 'map1',
  // style: 'mapbox://styles/mapbox/light-v9',
  // style: 'mapbox://styles/mapbox/dark-v9',
  style: 'mapbox://styles/benmatheson/cjhcx9p8f1gmp2srs3jzhgcu3',
  // style: 'mapbox://styles/benmatheson/cjh2yaf301jjm2sru7r1uz7n7',

  "pitch": 0,

 center: [-100, 40],
  zoom: 3.7,
//   "transition": {
//   "duration": 800,
//   "delay": 0
// }
});

// var red = './data/ras_ak_red.geojson';
var gc1 = './data/ny.geojson';
var navy = './data/navy.geojson';
var navyLine = './data/navyLine.geojson';
// var ak_simple_fake = './data/alaska_simplified_fake.geojson';

map.on('load', function() {


// map.addSource('gc1', {
//   type: 'geojson',
//   // data: 'https://rawgit.com/benmatheson/2011_test/master/ras_ak_red.geojson'
//   data: gc1
// });


// map.addSource('navy', {
//   type: 'geojson',
//   // data: 'https://rawgit.com/benmatheson/2011_test/master/ras_ak_red.geojson'
//   data: navy
// });
// map.addSource('navyLine', {
//   type: 'geojson',
//   // data: 'https://rawgit.com/benmatheson/2011_test/master/ras_ak_red.geojson'
//   data: navyLine
// });



       


  // map.addLayer({
  //       "id": "gc1",
  //       "type": "line",
  //  		"source": "gc1",

		// 'paint': {
           
  //          "line-color": "rgba(100,200,100,.5)"
  //           }
  

  //  		})





  // map.addLayer({
  //       "id": "navyLine",
  //       "type": "line",
  //     "source": "navyLine",

  //   'paint': {
           
  //          "line-color": "rgba(200,100,100,.05)",
  //           'line-width': 3,
  //           }
  

  //     })




  // map.addLayer({
  //       "id": "navy",
  //       "type": "circle",
  //     "source": "navy",

  //   'paint': {
           
  //          "circle-color": "rgba(100,200,200,.1)"
  //           }
  

  //     })





        })

      //       // "icon-image": "{icon}-11",
      //       // "text-field": "{title}",
      //       "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      //       "text-offset": [0, 0.6],
      //       "text-anchor": "top"
      //   }
	
map.scrollZoom.disable();



function toggleStyle (sty) {

    map.setStyle(sty);
    console.log("setting style");


}



function toggleDotStyle (sty) {

    map0.setStyle(sty);
    console.log("setting style");


}




const dotX = d3.scaleLinear().domain([1000000,500000000]).range([50,1100]);

console.log(dotX(500000000));

// const vendorDotsvg =  d3.select('#vendorDot')
//                         .append('svg')
//                         .attr("width", 900)
//                         .attr ("height", 100)


d3.csv("data/top100VendorOutput.csv", function(data1){


data1.forEach(function (d){

  d.dollars_obligated = +d.dollars_obligated;

  })


const boeing = data1.filter(d=>d.vendor_name=="BOEING COMPANY, THE");
const boat = data1.filter(d=>d.vendor_name=="ELECTRIC BOAT CORPORATION");
const hunt = data1.filter(d=>d.vendor_name=="HUNTINGTON INGALLS INCORPORATED");
const lockheed = data1.filter(d=>d.vendor_name=="LOCKHEED MARTIN CORPORATION");
const mc = data1.filter(d=>d.vendor_name=="MCKESSON CORPORATION");



console.log(boeing);

function createDot (el, data) {


const vendorDotsvg =  d3.select(el)
                        .append('svg')
                        .attr("width", 1100)
                        .attr ("height", 140);

const vendorDotG = vendorDotsvg.append('g');



vendorDotsvg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr("cx", d=> dotX(d.dollars_obligated))
  .attr("cy", 37)
  .attr("r", 8)
  .attr("opacity", .4)
  .attr("stroke-width", .3)
  .attr("fill", function(d){
    return d.beltwayMetro == "inBeltway" ? "purple" : "orange"

  });

vendorDotsvg.append('text')
    
    .attr("x", 3)
    .attr("y", 19)
    .text((data[1].vendor_name).toLowerCase())
    .attr("class", "anno")



vendorDotsvg.append('text')
    
    .attr("y", 65)
    .attr("x",  dotX(1000000))
    .text("$1 million" )
    .attr("class", "annoItal")



vendorDotsvg.append('text')
    
    .attr("y", 65)
    .attr("x", dotX(100000000))
    .text("$100 million" )
    .attr("class", "annoItal")



vendorDotsvg.append('text')
    
    .attr("y", 65)
    .attr("x",  dotX(400000000))
    .text("$500 million" )
    .attr("class", "annoItal")





}










createDot("#vendorDot1", boeing)
createDot("#vendorDot2", boat)
createDot("#vendorDot3", hunt)
createDot("#vendorDot4", lockheed)
createDot("#vendorDot5", mc)


})



///////////PRODUCT DOT

d3.csv("data/top100ProductOutput.csv", function(data3){


data3.forEach(function (d){

  d.dollars_obligated = +d.dollars_obligated;

  })


const aircraft = data3.filter(d=>d.product_or_service_code =="1510: AIRCRAFT, FIXED WING");
const support = data3.filter(d=>d.product_or_service_code=="R425: SUPPORT- PROFESSIONAL: ENGINEERING/TECHNICAL");
const oper = data3.filter(d=>d.product_or_service_code=="M181: OPER OF GOVT R&D GOCO FACILITIES");
const medical = data3.filter(d=>d.product_or_service_code=="Q201: MEDICAL- GENERAL HEALTH CARE");
const combat = data3.filter(d=>d.product_or_service_code=="1905: COMBAT SHIPS AND LANDING VESSELS");




function createDot (el, data) {


const vendorDotsvg =  d3.select(el)
                        .append('svg')
                        .attr("width", 1100)
                        .attr ("height", 140);

const vendorDotG = vendorDotsvg.append('g');


vendorDotsvg.selectAll('circle')
  .data(data)
  .enter()
  .append('rect')
  .attr("x", d=> dotX(d.dollars_obligated))
  .attr("y", 37)
  .attr("width", 6)
  .attr("height", 14)
  .attr("opacity", .4)
  .attr("stroke-width", .3)
  .attr("fill", function(d){
    return d.beltwayMetro == "inBeltway" ? "red" : "lightblue"

  });

vendorDotsvg.append('text')
    
    .attr("x", 3)
    .attr("y", 19)
    .text((data[1].product_or_service_code).toLowerCase())
    .attr("class", "anno")



vendorDotsvg.append('text')
    
    .attr("y", 65)
    .attr("x",  dotX(1000000))
    .text("$1 million" )
    .attr("class", "annoItal")



vendorDotsvg.append('text')
    
    .attr("y", 65)
    .attr("x", dotX(100000000))
    .text("$100 million" )
    .attr("class", "annoItal")



vendorDotsvg.append('text')
    
    .attr("y", 65)
    .attr("x",  dotX(400000000))
    .text("$500 million" )
    .attr("class", "annoItal")





}







createDot("#productDot1", aircraft)
createDot("#productDot2", support)
createDot("#productDot3", oper)
createDot("#productDot4", medical)
createDot("#productDot5", combat)


})




////////////////////






d3.csv("data/gcGroupMetroBeltway.csv", function (data2) {

  data2.forEach(function(d){
d.total =+d.total;
d.metroBeltPercent =+d.metroBeltPercent

  })


data2.sort(function (a,b) {return (b.total-a.total)})

// ag = data2.filter(d=>d.maj_fund_agency_cat =="1200: Department of Agriculture")
// vet = data2.filter(d=>d.maj_fund_agency_cat =="3600: Department of Veterans Affairs")


const beltPercentX = d3.scaleLinear().range([0,1100]).domain([0,239955928306.92])





  const beltPercent = d3.select('#beltPercent').append('svg')
    .attr('height', 2000)
    .attr('width', 1100)


  const beltPercentG = beltPercent.append('g');

  const beltPercentGSelect = 
    
    beltPercentG
    .selectAll('rect')
    .data(data2)
    .enter()

var first = beltPercentGSelect
  .append('rect')
    .attr('x', 20)
    .attr('y', (d,y) =>y*25)
    .attr('height', 22)
    .attr("width", d=>beltPercentX(d.total))
    .attr("fill", "purple")


// var t = textures.lines()
//   .thicker();

//  first.call(t)
//   .style("fill", t.url());



 beltPercentGSelect
  .append('rect')
    .attr("x", 20)
    .attr('y', (d,i) =>i*25)
    .attr('height', 22)
    .attr("width", d=>beltPercentX(d.total)*d.metroBeltPercent)
    .attr("fill", "pink")


 beltPercentGSelect
  .append('text')
    .attr("x", 25)
    .attr('y', (d,i) =>(i*25)+18)
        .text( d=>d.maj_fund_agency_cat)
        .attr("class", "annoItal")





})








