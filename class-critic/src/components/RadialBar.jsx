import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const RadialBar = (props) => {
  

  const scorePercent = ((props.score / 5) * 100).toFixed(2);
  const score = props.score;
  console.log("---------",score)

  useEffect(() => {}, [score]);
  useEffect(() => {}, []);

  let state = {
    options: {
      plotOptions: {
        radialBar: {
          size: undefined,
          inverseOrder: false,
          startAngle: -180,
          endAngle: 180,
          offsetX: 0,
          offsetY: 0,

          track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: "#f2f2f2",
            strokeWidth: "97%",
            opacity: 1,
            margin: 3,
            dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              blur: 3,
              opacity: 0.5,
            },
          },
          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: "22px",
              fontFamily: undefined,
              color: undefined,
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: "14px",
              fontFamily: undefined,
              color: undefined,
              offsetY: 0,
              //   formatter: "22"
              //   function (val) {
              //     return val + "%";
              //   }
              // ,
            },
            total: {
              show: true,
              label: "Score",
              color: "#373d3f",
              formatter: function (w) {
                return (
                    // w.globals.seriesTotals.reduce((a, b) => {
                    //   return a + b;
                    // }, 0) /
                      (w.globals.series *5 /100).toFixed(2)                
                );
              },
            },
          },
        },
      },
    },

    series: [scorePercent],
  };

  return (
    <div className="donut">
      <Chart
        options={state.options}
        series={state.series}
        type="radialBar"
        width="180"
      />
    </div>
  );
};

export default RadialBar;
