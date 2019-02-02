var svg = d3.select("#venue-svg");

// $("#set-groups-button").click(setGroups);
// $("#add-tables-button").click(addTables);
// $("#add-reservations-button").click(addReservations);

svg
  .append("rect")
  .attr("width", 600)
  .attr("height", 300)
  .style("fill", "none")
  .style("pointer-events", "all")
  .call(
    d3
      .zoom()
      .scaleExtent([1 / 2, 4])
      .on("zoom", zoomed)
  );

function zoomed() {
  g.attr("transform", d3.event.transform);
}

var g = svg.append("g");

var tables = g
  .selectAll("g")
  .data(venueBooths)
  .enter()
  .append("g")
  .attr("transform", function(d) {
    return "translate(" + d.x + " " + d.y + ")";
  });

var tableRects = tables
  .append("rect")
  .attr("stroke", "steelblue")
  .attr("stroke-width", "2px")
  .attr("width", function(d) {
    return d.w;
  })
  .attr("height", function(d) {
    return d.h;
  })
  .attr("fill", "none");

tableRects.attr("fill", function(d) {
  return $.isEmptyObject(d.reservation) ? "none" : "#FF5733";
});

tables
  .append("text")
  .text(function(d) {
    return d.reservation.orgName;
  })
  .attr("dy", 20)
  .attr("dx", 5)
  .attr("font-size", "12px");
