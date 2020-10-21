

//taking user input 
let year;
const form = document.querySelector('form');
  
    
 
form.addEventListener('submit', (e)=>{
  year = form.elements.year.value;
  e.preventDefault()
  fetch(`/eco?year=${year}`)
    .then(data => data.json())
    // .then(data=>data.text()) //<————————————-
// .then(json=>console.log(json))
    .then(visualizeData4Dyn)
})

function visualizeData4Dyn(data)
{
  document.querySelector("#dynamic-economy-bowlers").innerHTML="", visualizeEconomyBowlersDynamic(data, year)
  return;
}

function visualizeEconomyBowlersDynamic(data, year)
{
  Highcharts.chart("dynamic-economy-bowlers", {
    chart: {
      type: "column"
    },
    title: {
      text: ` Top 10 economical bowlers of ${year}`
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy Rate"
      }
    },
    tooltip: {
      pointFormat: 'Economy Bowlers: <b>{point.y:.2f}</b>'
  },
    series: [{
      name: 'Economic Bowlers',
      data: data,
      dataLabels: {
          enabled: true,
          rotation: 0,
          color: '#FFFFFF',
          align: 'center',
          format: '{point.y:.2f}', // one decimal
          y: 25, // 10 pixels down from the top
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  }]
  });
}



function fetchAndVisualizeData_played() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData_played);
}

fetchAndVisualizeData_played();

function visualizeData_played(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "1.Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData,
        dataLabels: {
          enabled: true,
          rotation: 0,
          color: '#FFFFFF',
          align: 'center',
          format: '{point.y:.0f}', // one decimal
          y: 25, // 10 pixels down from the top
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
      }
    ]
  });
}
















function fetchAndVisualizeData_won() {
  fetch("./data_won.json")
    .then((r) => r.json())
    .then(visualizeData_won);
}
fetchAndVisualizeData_won();
function visualizeData_won(data_won) {
  // visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchesWonEachTeamYear(data_won.matchesWon);
  /*visualizeMatchesEachTeamConcededExtraRun(
    data_won.matchesEachTeamConcededExtraRun
  );*/
  return;
}
function visualizeMatchesWonEachTeamYear(matchesWon) {
  const kkr = [];
  const rcb = [];
  const csk = [];
  const kxp = [];
  const rr = [];
  const dd = [];
  const mi = [];
  const dc = [];
  const ktk = [];
  const pw = [];
  const nr = [];
  const sh = [];
  const rps = [];
  const gl = [];
  const dcl = [];
  for (let year in matchesWon) {
    kkr.push(matchesWon[year]["Kolkata Knight Riders"]);
    rcb.push(matchesWon[year]["Royal Challengers Bangalore"]);
    csk.push(matchesWon[year]["Chennai Super Kings"] || 0);
    kxp.push(matchesWon[year]["Kings XI Punjab"]);
    rr.push(matchesWon[year]["Rajasthan Royals"] || 0);
    dd.push(matchesWon[year]["Delhi Daredevils"] || 0);
    mi.push(matchesWon[year]["Mumbai Indians"] || 0);
    dc.push(matchesWon[year]["Deccan Chargers"] || 0);
    ktk.push(matchesWon[year]["Kochi Tuskers Kerala"] || 0);
    pw.push(matchesWon[year]["Pune Warriors"] || 0);
    nr.push(matchesWon[year][""] || 0);
    sh.push(matchesWon[year]["Sunrisers Hyderabad"] || 0);
    rps.push(matchesWon[year]["Rising Pune Supergiants"] || 0);
    gl.push(matchesWon[year]["Gujarat Lions"] || 0);
    dcl.push(matchesWon[year]["Delhi Capitals"] || 0);
  }
  // console.log(dd);
  // console.log(csk);
  // console.log(matchesWonEachTeamYear);
  Highcharts.chart("matchesWon", {
    chart: {
      type: "column",
    },
    title: {
      text: "2.Number of matches won by each team over all the year of IPL",
    },
    subtitle: {
      text: "Source:ipl.com",
    },
    xAxis: {
      categories: [
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches won",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Kolkata Knight Riders",
        data: kkr,
      },
      {
        name: "Royal Challengers Bangalore",
        data: rcb,
      },
      {
        name: "Chennai Super Kings",
        data: csk,
      },
      {
        name: "Kings XI Punjab",
        data: kxp,
      },
      {
        name: "Rajasthan Royals",
        data: rr,
      },
      {
        name: "Delhi Daredevils",
        data: dd,
      },
      {
        name: "Mumbai Indians",
        data: mi,
      },
      {
        name: "Deccan Chargers",
        data: dc,
      },
      {
        name: "Kochi Tuskers Kerala",
        data: ktk,
      },
      {
        name: "Pune Warriors",
        data: pw,
      },
      {
        name: "no result",
        data: nr,
      },
      {
        name: "Sunrisers Hyderabad",
        data: sh,
      },
      {
        name: "Rising Pune Supergiants",
        data: rps,
      },
      {
        name: "Gujarat Lions",
        data: gl,
      },
      {
        name: "Delhi Capitals",
        data: dcl,
      },
    ],
  });
}







function fetchAndVisualizeData_extraRuns() {
  fetch("./data_extraRuns.json")
    .then(r => r.json())
    .then(visualizeData_extraRuns);
}

fetchAndVisualizeData_extraRuns();

function visualizeData_extraRuns(data_extraRuns) {
  visualizeExtraRunsConceded(data_extraRuns.extraRunsConceded);
  return;
}

function visualizeExtraRunsConceded(extraRunsConceded) {
  const seriesData_runs = [];
  for (let extra_runs in extraRunsConceded) {
    seriesData_runs.push([extra_runs, extraRunsConceded[extra_runs]]);
  }

  Highcharts.chart("extra-runs-conceded", {
    chart: {
      type: "column"
    },
    title: {
      text: "3.Extra Runs Conceded by each Team"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category",
      
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs"
      }
    },
    series: [
      {
        name: "extra_runs",
        data: seriesData_runs,
        dataLabels: {
          enabled: true,
          rotation: 0,
          color: '#FFFFFF',
          align: 'center',
          format: '{point.y:.0f}', // one decimal
          y: 25, // 10 pixels down from the top
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
      }
    ]
  });
}










function fetchAndVisualizeData_EconomicRate() {
  fetch("./data_economicRate.json")
    .then(r => r.json())
    .then(visualizeData_econmicRate_2015);
}

fetchAndVisualizeData_EconomicRate();

function visualizeData_econmicRate_2015(data_economicRate) { 
  visualizeEconomicRate(data_economicRate.economicRate1);  
  return;
}



function visualizeEconomicRate(economicRate) {
  console.log(economicRate);
  Highcharts.chart("economical-rate-of2015", {
    chart: {
        type: 'column'
    },
    title: {
        text: '4.Top Economic Bowlers in 2015 season'
    },
    subtitle: {
        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Economy'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Economy: <b>{point.y:.2f}</b>'
    },
    series: [{
        name: 'Economic Bowlers',
        data: economicRate,
        dataLabels: {
            enabled: true,
            rotation: 0,
            color: '#FFFFFF',
            align: 'center',
            format: '{point.y:.2f}', // one decimal
            y: 25, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
}







function fetchAndVisualizeData_eden_gardens() {
  fetch("./data_eden_garden_won.json")
    .then(r => r.json())
    .then(visualizeData_venue);
}

fetchAndVisualizeData_eden_gardens();

function visualizeData_venue(data_eden_garden_won) {
  visualizeEdenGardens(data_eden_garden_won.edenGardensmatches);
  return;
}

function visualizeEdenGardens(eden) 
{
  var team1=[];
  var win=[];
 for(let team in eden)
  {
    
   
    team1.push(team);
    win.push(eden[team]);
  }                      
  console.log(team1);
  console.log(win)
  Highcharts.chart('eden-garden-analysis', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '5.Story:No of Matches Won by Each team at Eden Gardens '
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{ 
        name: 'No of matches won', 
        colorByPoint: true,
        data: [{
          name: 'Kolkata Knight Riders', 
          y: win[0],
          sliced: true,
          selected: true
      }, {
          name: 'Gujarat Lions',
          y: win[1],
      }, {
          name: 'Rising Pune Supergiant',
          y: win[2],
      }, {
          name: 'Mumbai Indians',
          y: win[3],
      }, {
          name: 'Chennai Super Kings',
          y: win[4],
      }, {
          name: 'Rajasthan Royals',
          y: win[5],
      },{
        name: 'Kings XI Punjab',
        y: win[6],
    },{
      name: 'Kochi Tuskers Kerala',
      y: win[7],
  },{
    name: 'Royal Challengers Bangalore',
    y: win[8],
},{
  name: 'Delhi Daredevils',
  y: win[9],
},{
  name: 'Sunrisers Hyderabad',
  y: win[10],
},{
  name: 'Delhi Capitals',
  y: win[11],
}
    ]
    }]
});

}

