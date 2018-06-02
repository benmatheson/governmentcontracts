"change", function dog (){

var agency =  d3.event.target.value;



agencySummary= agData.filter(d=>d.majAgency == agency);
agencyTop5 = ag5Data.filter(d =>d.majAgency == agency);



const agencyTop5Product = agencyTop5.filter(d=>d.attribute=="product")
const agencyTop5Vendor = agencyTop5.filter(d=>d.attribute=="vendor")
const agencyTop5vLocation = agencyTop5.filter(d=>d.attribute=="vLocation")




console.log(agencyTop5);
console.log("VLCATOIN");
console.log(agencyTop5vLocation);



function updateAgency (agency) {

// console.log(agencySummary);
// console.log(agencyTop5);

console.log('updating agency');
d3.select('.agencyName')
  // .append('text')
  .text(agency)

  d3.select('#numContracts')
  // .append('text')
  .text(agencySummary[0].num)

  d3.select('#valContracts')
  // .append('text')
  .text(`$${(agencySummary[0].total/1000000).toFixed(2)}million`)
  

d3.selectAll('ul').remove();

 var listVendor = d3.select('#vendors5')
  .append('ul')


  listVendor.selectAll('li')
  .data(agencyTop5Vendor)
  .enter()
  .append('li')
  .text(d=>d.desc)
  .attr('class', "anno")



 var listProduct = d3.select('#products5')
  .append('ul')


  listProduct.selectAll('li')
  .data(agencyTop5Product)
  .enter()
  .append('li')
  .text(d=>d.desc)
  .attr('class', "anno")





 var listvLocation = d3.select('#vlocations5')
  .append('ul')


  listvLocation.selectAll('li')
  .data(agencyTop5vLocation)
  .enter()
  .append('li')
  .text(d=>d.desc)
  .attr('class', "anno")



  // .append('text')
  // .text(JSON.stringify(agencyTop5Vendor))
  // .text(agencyTop5Vendor)
  // .text(agencyTop5vLocation)




}

updateAgency(agency)




}