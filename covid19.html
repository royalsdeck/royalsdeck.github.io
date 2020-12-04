<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="https://cdn.lineicons.com/2.0/LineIcons.css" rel="stylesheet">
     <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin=""/>
    <title>Covid 19</title>
  </head>
  <style>
    th,td{
        padding:10px;
        border:1px solid #3498DB;
        color:white;
    }
    tr{
        border:1px solid #3498DB;
    }
    table{
        width:100%;
    }
     #mapid { height: 400px; }
  </style>
  <body style="background-color:#2E4053;">
    <span style="color:white;"><center>Created By : <a style="color:white;" href="https://royalsdeck.com">RoyalsDeck.com</a></center></span>
    <h3 style="color:#3498DB;margin:30px 100px;"><i style="color:white;" class="lni lni-signal"></i> Royals <span style="color:white;">Covid19</span> <i><small style="font-size:15px;color:white;">dashboard</small></i></h3>
    <div class="container" style="border:2px solid #3498DB;margin-top:30px;padding:20px;">
        <div class="row">
            <div class="col-md-4">
                <center>
                    <h3 style="color:#3498DB;"><i class="lni lni-network"></i> Total Confirmed</h3>
                <h3 id="tconfirmed" style="color:white;"></h3><br>
                </center>
            </div>
            <div class="col-md-4">
                <center>
                    <h3 style="color:#3498DB;"><i class="lni lni-reload"></i> Total Recovered</h3>
                <h3 id="trecovered" style="color:white;"></h3><br>
                </center>
            </div>
            <div class="col-md-4">
                <center>
                    <h3 style="color:#3498DB;"><i class="lni lni-users"></i> Total Deaths</h3>
                <h3 id="tdeaths" style="color:white;"></h3><br>
                </center>
            </div>
        </div>
        <div id="mapid"></div><br>
            <div class="row">
            <div class="col-md-4">
                <center>
                    <p style="color:red;"> > 1000000 Cases</p>
                </center>
            </div>
            <div class="col-md-4">
                <center>
                    <p style="color:yellow;">> 100000, < 1000000 Cases</p>
                </center>
            </div>
            <div class="col-md-4">
               <center>
                    <p style="color:#138D75;">> 1000, < 100000 Cases</p>
                </center>
            </div>
        </div>
        <br>
        <div style="height:400px;overflow-y:scroll;">
            <table id="country">
                <tr>
                    <th>Flag</th>
                    <th>Name</th>
                    <th>Total Confirmed</th>
                    <th>Total Recovered</th>
                    <th>Total Deaths</th>
                </tr>
            </table>
        </div>
    </div>
<br><br>
  </body>
   <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
    integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
    crossorigin=""></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script>
    $(document).ready(function(){
        fetch(`https://api.covid19api.com/summary`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            displaymap(data);
            $("#tconfirmed").html(data.Global.TotalConfirmed);
            $("#trecovered").html(data.Global.TotalRecovered);
            $("#tdeaths").html(data.Global.TotalDeaths);
            for(var i=0;i<244;i++){
                document.getElementById("country").innerHTML += "<tr><td><img src='https://www.countryflags.io/"+data.Countries[i].CountryCode+"/shiny/64.png'/></td><td><p style='color:white;'>"+data.Countries[i].Country+"</p></td><td><p style='color:white;'>"+data.Countries[i].TotalConfirmed+"</p></td><td><p style='color:white;'>"+data.Countries[i].TotalRecovered+"</p></td><td><p style='color:white;'>"+data.Countries[i].TotalDeaths+"</p></td></tr>";
            }
            
            })
        .catch(err=>{
            console.log(err);
        });
        
    });
     function displaymap(d){
            console.log(d);
        var mymap = L.map('mapid').setView([51.505, -0.09], 2.5);
        const attribution = '&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
        const tile_url = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png';
                const tiles = L.tileLayer(tile_url,{attribution});
                tiles.addTo(mymap);
            var red = L.icon({
                        iconUrl: 'https://wpmobile.app/ripple.gif',
                        iconSize: [50,50],
                        iconAnchor: [25, 16],
                    });
            var moderate = L.icon({
                        iconUrl: 'https://www.drakemedoxcollege.ca/images/ripple.gif',
                        iconSize: [50,50],
                        iconAnchor: [25, 16],
                    });
             var green = L.icon({
                        iconUrl: 'https://www.euroswitch.com/wp-content/themes/euroswitch/images/ripple.gif',
                        iconSize: [50,50],
                        iconAnchor: [25, 16],
                    });
          fetch(`https://gist.githubusercontent.com/erdem/8c7d26765831d0f9a8c62f02782ae00d/raw/248037cd701af0a4957cce340dabb0fd04e38f4c/countries.json`)
           .then(res=>res.json())
           .then(data=>{
               console.log(data);
                    for(var i=0;i<d.Countries.length;i++){
                        if(d.Countries[i].TotalConfirmed>1000000){
                            console.log(d.Countries[i].CountryCode);
                            var code = d.Countries[i].CountryCode;
                            for(var j=0;j<data.length;j++){
                                if(data[j].country_code==code){
                                    L.marker([data[j].latlng[0],data[j].latlng[1]],{icon:red}).addTo(mymap);
                                }
                            }
                        }
                        else if(d.Countries[i].TotalConfirmed>100000&&d.Countries[i].TotalConfirmed<1000000){
                            console.log(d.Countries[i].CountryCode);
                            var code = d.Countries[i].CountryCode;
                            for(var j=0;j<data.length;j++){
                                if(data[j].country_code==code){
                                    L.marker([data[j].latlng[0],data[j].latlng[1]],{icon:moderate}).addTo(mymap);
                                }
                            }
                        }
                        else if(d.Countries[i].TotalConfirmed>1000&&d.Countries[i].TotalConfirmed<100000){
                            console.log(d.Countries[i].CountryCode);
                            var code = d.Countries[i].CountryCode;
                            for(var j=0;j<data.length;j++){
                                if(data[j].country_code==code){
                                    L.marker([data[j].latlng[0],data[j].latlng[1]],{icon:green}).addTo(mymap);
                                }
                            }
                        }
                    }         
           }).then(err=>console.log(err));          
        }
  </script>
</html>