var svg = d3.select("#venue-svg");
var tables;
var tableRects;

$("#set-groups-button").click(setGroups);
$("#add-tables-button").click(addTables);
$("#add-reservations-button").click(addReservations);

function setGroups() {
  tables = svg
    .selectAll("g")
    .data(venueBooths)
    .enter()
    .append("g")
    .attr("transform", function(d) {
      return "translate(" + d.x + " " + d.y + ")";
    });
}

function addTables() {
  tableRects = tables
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
}

function addReservations() {
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
}
