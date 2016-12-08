generate_smiley = function()
{
          var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        radius = 100;

        var circles = d3.range(1).map(function() {
        return {
        x: width/2,
        y: height/2
        };
        });

        var color = d3.scaleOrdinal()
        .range(d3.schemeCategory20);
        var g = svg.append("g")
                   .attr("transform","translate("+width/2+","+height/2+")");

         g.append("circle")
          .attr("cx", function(d) { return 0; })
          .attr("cy", function(d) { return 0; })
          .attr("r", radius)
          .style("fill", function(d, i) { return "yellow"; })
          .style("stroke","black")
          .style("stroke-width","2")

         g.append("circle")
          .attr("cx",-radius/2)
          .attr("cy",-radius/3)
          .attr("r",radius/5)
          .style("fill", "white")
          .style("stroke","black")
          .style("stroke-width","2")

          g.append("circle")
           .attr("cx",radius/2)
           .attr("cy",-radius/3)
           .attr("r",radius/5)
           .style("fill", "white")
           .style("stroke","black")
           .style("stroke-width","2")

      var line = d3.line()
                   .curve(d3.curveBasis)
                   .x(function(d) { return d.x; })
                   .y(function(d) { return d.y; });

      arr = [{x : -radius/2, y : radius/3 },
             {x:0,y:radius/1.5},
             {x : radius/2,y : radius/3}

           ]

     g.append("path")
     .datum(arr)
     .attr("class", "line")
     .attr("d", line)
     .style("fill","white")
     .style("stroke","black")
     .style("stroke-width","2")

     g.append("line")
      .attr("x1",radius/2)
      .attr("y1",radius/3)
      .attr("x2",-radius/2)
      .attr("y2",radius/3)
      .style("stroke","black")
      .style("stroke-width","2")

      g.append("text")
       .attr("x",0)
       .attr("y",radius+50)
       .attr("text-anchor","middle")
       .style("font-size","20px")
       .text(function(){return "CONFIRMATION MIL GAYA"})



}
