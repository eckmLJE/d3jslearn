// booth list

var boothList = $("#booth-list");
venueBooths.forEach(function(booth) {
  var orgAppend = booth.reservation.orgName
    ? " - " + booth.reservation.orgName
    : "";
  boothList.append(
    "<li class='list-group-item'>" + booth.id + orgAppend + "</li>"
  );
});

// d3 drawing

var svg = d3.select("#venue-svg");

// $("#set-groups-button").click(setGroups);
// $("#add-tables-button").click(addTables);
// $("#add-reservations-button").click(addReservations);

svg
  .append("rect")
  .attr("width", "100%")
  .attr("height", "100%")
  .style("fill", "none")
  //   .style("stroke", "rgba(0,0,0,.125)")
  //   .style("stroke-width", "1px")
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
  .attr("fill", "none")
  .attr("fill", function(d) {
    return $.isEmptyObject(d.reservation) ? "none" : "#FF5733";
  })
  .attr("id", function(d) {
    return "table-" + d.id;
  });

tables
  .append("text")
  .text(function(d) {
    return d.reservation.orgName ? d.reservation.orgName : "Available";
  })
  .attr("dy", 15)
  .attr("dx", 5)
  .attr("font-size", "10px");
