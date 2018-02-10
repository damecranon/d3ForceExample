/* start out the d3 layout */
var width = 1100;
var height = 800;

var nodes = [
    {"name": "Lillian", "sex": "F"},
    {"name": "Gordon", "sex": "M"},
    {"name": "Sylvester", "sex": "M"},
    {"name": "Mary", "sex": "F"},
    {"name": "Helen", "sex": "F"},
    {"name": "Jamie", "sex": "M"},
    {"name": "Jessie", "sex": "F"},
    {"name": "Ashton", "sex": "M"},
    {"name": "Duncan", "sex": "M"},
    {"name": "Evette", "sex": "F"},
    {"name": "Mauer", "sex": "M"},
    {"name": "Fray", "sex": "F"},
    {"name": "Duke", "sex": "M"},
    {"name": "Baron", "sex": "M"},
    {"name": "Infante", "sex": "M"},
    {"name": "Percy", "sex": "M"},
    {"name": "Cynthia", "sex": "F"}

];

var svg = d3.select('body').append('svg').attr('width', width).attr('height', height);

//the simulation(force layout)


//first we will set up the simulation
var simulation = d3.forceSimulation()
  .force("link", d3.forceLink().id(function(d){return d.id;}))
  .force("charge", d3.forceManyBody())
  .force("center", d3.forceCenter(width / 2, height /2));



var node = svg.append('svg:g')
    .attr("class", "nodes")
    .selectAll("g")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("r", 10)
    .attr("fill", circlecolor);

simulation.on("tick", ticked)
    .nodes(nodes);

console.log(node);




function ticked(){
  //update circle positions each tick of simulation

    node.attr("cx", function(d){return d.x})
        .attr("cy", function(d){return d.y});
}


function circlecolor(d){
    if (d.sex == "M"){
        return "blue";
    } else {
        return "pink";
    }
}