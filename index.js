var venue = d3.select(".venue");

var groups = venue
  .selectAll("g")
  .data(venueBooths)
  .enter()
  .append("g");

var booths = groups
  .selectAll("rect")
  .data(venueBooths)
  .enter()
  .append("rect")
  .attr("x", function(d) {
    return d.x;
  })
  .attr("y", function(d) {
    return d.y;
  })
  .attr("width", function(d) {
    return d.w;
  })
  .attr("height", function(d) {
    return d.h;
  })
  .attr("fill", "none")
  .attr("stroke-width", "2px")
  .attr("stroke", "black");

groups.append('text')
  .attr('x', )


// var width = 420,
//   barHeight = 20;

// var x = d3
//   .scaleLinear()
//   .domain([0, d3.max(data)])
//   .range([0, width]);

// var chart = d3
//   .select(".chart")
//   .attr("width", width)
//   .attr("height", barHeight * data.length);

// var bar = chart
//   .selectAll("g")
//   .data(data)
//   .enter()
//   .append("g")
//   .attr("transform", function(d, i) {
//     return "translate(0," + i * barHeight + ")";
//   });

// bar
//   .append("rect")
//   .attr("width", x)
//   .attr("height", barHeight - 1);

// bar
//   .append("text")
//   .attr("x", function(d) {
//     return x(d) - 3;
//   })
//   .attr("y", barHeight / 2)
//   .attr("dy", ".35em")
//   .text(function(d) {
//     return d;
//   });
