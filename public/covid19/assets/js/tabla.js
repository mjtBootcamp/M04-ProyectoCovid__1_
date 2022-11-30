// para la table

// importar datos para construir la tabla
import infoData from "./jsApi.js";

// funcion que se exportara
const datostabla = async () => {
  let arregloData = await infoData();
  // sort y funcion para odernar alfabeticamente por paises
  let data = arregloData.sort((a, b) => {
    if (a.country == b.country) {
      return 0;
    }
    if (a.country < b.country) {
      return -1;
    }
    return 1;
  });
  //creando la tabla que ira cambiando los paises.
  let body = "";
  for (let i = 0; i < data.length; i++) {
    body += `<tr class="tablat">
    <td>${data[i].country}</td>
    <td>${data[i].deaths}</td>
    <td>${data[i].recovered}</td>
    <td>${data[i].active}</td>
    <td>${data[i].confirmed}</td>
    <td><!-- Button to Open the Modal -->
    <button type="button" id="${i}"class="btn btn-primary botonn" data-toggle="modal" data-target="#myModal">
      Abrir Estad&iacute;stica 
    </button></td>
    </tr>`;
  }


  const impri = (e) => {
    let indexPieId = e.target.id;
    let paisInPie = data[indexPieId];

    const chartPie = (dataModelCountry) => {
      let chart = new CanvasJS.Chart("modalDetalle", {
        exportEnabled: false,
        animationEnabled: true,
        title: {
          text: `Estadísticas de Impacto Covid en ${dataModelCountry.country}`,
        },
        legend: {
          cursor: "pointer",
        },
        data: [
          {
            type: "pie",
            showInLegend: true,
            toolTipContent: "{name}: <strong>{y}%</strong>",
            indexLabel: "{name} - ({y})",
            //DATA POINTS RESULTOS ARRAY EN FUNCION INVOCADA
            dataPoints: [
              { name: "Fallecidos", y: `${dataModelCountry.deaths}` },
              { name: "Recuperados", y: `${dataModelCountry.recovered}` },
              { name: "Activos", y: `${dataModelCountry.active}` },
              { name: "Confirmados", y: `${dataModelCountry.confirmed}` },
            ],
          },
        ],
      });

      chart.render();
    };

    chartPie(paisInPie);
  };
  document.getElementById("cuerpoTabla").innerHTML = body;
  document
    .querySelectorAll(".tablat .botonn")
    .forEach((b) => b.addEventListener("click", impri));
  //Hito I INICIO requerimiento 4 grafico de barras
  //4. Desplegar debajo del gráfico de barras una tabla con la información de todos los países ordenados alfabéticamente por el nombre del país.
  //Ordena los paises segun sus casos activos de menor a mayor
  const comparadorMenorAMayor = (a, b) => {
    //Dentro de sort ordena de menor a mayor
    if (a.active) {
      //not null
      if (a.active > b.active) {
        return -1;
      }
      if (a.active < b.active) {
        return 1;
      }
      return 0;
    }
  };
  const ordenador = (dataModel, callbackComparador) => {
    dataModel.sort(callbackComparador);
    return dataModel;
  };
  let dataModel = arregloData;
  let dataModelOrdenada = ordenador(dataModel, comparadorMenorAMayor);
  //Cortar la data en 10 primeros paises
  const cortadora = (dataSet, a = 0, b = 10) => {
    let ds = dataSet.slice(a, b);
    return ds;
  };
  let dataModelOrdenadaCortada = cortadora(dataModelOrdenada, 0, 10);
  //Ordena datos para construir las series en grafico
  //Guardará la cifra mayor de la data para cortar el gráfico
  let mayorCifra;
  //Construye sòlo datapoints de la data para cada serie del grafico
  const dataPChartColumns = (dataModelOrdenadaCortada) => {
    let columnActive = [];
    let columnConfirmed = [];
    let columnDeaths = [];
    let columnRecovered = [];
    //Recorre el arreglo para redistribuir la construccion de series de datos
    dataModelOrdenadaCortada.forEach((pais) => {
      let colActive = {
        label: pais.country,
        indexLabel: `Casos Activos ${pais.country}`,
        indexLabelFontColor: "black",
        indexLabelOrientation: "vertical",
        indexLabelPlacement: "inside",
      };
      colActive.y = parseInt(pais.active);
      columnActive.push(colActive);

      let colConfirmed = { label: `${pais.country}` };
      colConfirmed.y = parseInt(pais.confirmed);
      columnConfirmed.push(colConfirmed);

      let colDeaths = { label: `${pais.country}` };
      colDeaths.y = parseInt(pais.deaths);
      columnDeaths.push(colDeaths);

      let colRecovered = { label: `${pais.country}` };
      colRecovered.y = parseInt(pais.recovered);
      columnRecovered.push(colRecovered);
    });
    //Se busca la cifra mayor del data set que contruirà el gràfico de barra para establecer su tamaño mayor
    let buscandoMayorCifra = [
      ...columnActive,
      ...columnConfirmed,
      ...columnDeaths,
      ...columnRecovered,
    ];
    mayorCifra = Math.max(...buscandoMayorCifra.map((element) => element.y));

    //Construye los datos necesarios para cada columna del objeto chart
    let cActive = dataChartColumns(columnActive, "Activos");
    let cConfirmed = dataChartColumns(columnConfirmed, "Confirmados");
    let cDeaths = dataChartColumns(columnDeaths, "Fallecidos");
    let cRecovered = dataChartColumns(columnRecovered, "Recuperados");
    return [cActive, cConfirmed, cDeaths, cRecovered].flat();
  };
  //Construye toda la data para cada serie del grafico
  const dataChartColumns = (dataCol, caseType) => {
    let tamagnoF = 15;
    let familiaF = "Montserrat";
    let data = [
      {
        type: "column",
        name: caseType,
        showInLegend: true,
        toolTipContent: `${caseType}`, //active, confirmed, deaths OR recovered
        indexLabel: caseType == "Activos" ? "{name}-({y})" : "",
        indexLabelFontSize: tamagnoF,
        indexLabelFontFamily: familiaF,
        dataPoints: dataCol,
      },
    ];
    return data;
  };
  //dataSet para construir grafico de barras de informaciòn de 10 paises con màs casos activos
  let datasForChart = dataPChartColumns(dataModelOrdenadaCortada);

  const chartColumn = (dataColumns) => {
    let fuenteFamilia = "Montserrat";
    let colorFuente = "#363245";
    let colorLineas = "#6b6488";
    let colorRojo = "#ff6384";
    let colorAmarillo = "#ffcd56";
    let colorGrisCeleste = "#c9cbcf";
    let colorCeleste = "#4bc0c0";
    let tamagnoTitulo = 40;
    let tamagnoSubTitulo = 30;
    let tamagnoPais = 19;
    let tamagnoY = 15;
    let tamagnoToolTip = 10;
    let colorLineasHor = "white";
    let bgColor = "white";
    let colorFondo1 = "#fbfbfb"; //251
    let colorFondo2 = "#fafafa"; //250
    let colorFondo3 = "#f9f9f9"; //249
    let colorFondo4 = "#f8f8f8"; //248
    let colorFondo5 = "#f7f7f7"; //247
    let colorFondo6 = "#f6f6f6"; //246
    let colorFondo7 = "#f5f5f5"; //245
    let colorFondo8 = "#f4f4f4"; //244
    let colorFondo9 = "#f3f3f3"; //243

    let colorGrisFondo = "#f0eded";
    //let color=;
    CanvasJS.addColorSet("Colors", [
      colorRojo,
      colorAmarillo,
      colorGrisCeleste,
      colorCeleste,
      "#90EE90",
    ]);
    let chart = new CanvasJS.Chart("graficoDiv", {
      height: 800,
      exportEnabled: false,
      title: {
        text: `10 paises con más casos activos`,
        fontFamily: fuenteFamilia,
        fontColor: colorFuente,
        horizontalAlign: "left",
        fontSize: tamagnoTitulo,
      },
      subtitles: [
        {
          text: "Estadísticas de Impacto Covid",
          fontFamily: fuenteFamilia,
          fontColor: colorFuente,
          fontSize: tamagnoSubTitulo,
        },
      ],
      axisY: {
        labelFontFamily: fuenteFamilia,
        labelFontColor: colorFuente,
        labelFontSize: tamagnoY,

        valueFormatString: "#,###,,.##M",

        tickLength: 10,
        gridColor: colorLineasHor,
        lineThickness: 0.2,

        maximum: mayorCifra,

        scaleBreaks: {
          spacing: 20, //
          color: "white", //
          lineColor: "gray", //
          lineThickness: 2, //
          type: "straight", //
          autoCalculate: true,
          collapsibleThreshold: "30%",
          maxNumberOfAutoBreaks: 3,
        },
      },
      axisX: {
        //title: "Paises",
        labelFontFamily: fuenteFamilia,
        labelFontColor: colorFuente,
        labelFontSize: tamagnoPais,
        gridThickness: 0,
        tickLength: 10,
        stripLines: [
          { startValue: 0.5, endValue: 1.5, color: colorFondo1 },
          { startValue: 1.5, endValue: 2.5, color: colorFondo2 },
          { startValue: 2.5, endValue: 3.5, color: colorFondo3 },
          { startValue: 3.5, endValue: 4.5, color: colorFondo4 },
          { startValue: 4.5, endValue: 5.5, color: colorFondo5 },
          { startValue: 5.5, endValue: 6.5, color: colorFondo6 },
          { startValue: 6.5, endValue: 7.5, color: colorFondo7 },
          { startValue: 7.5, endValue: 8.5, color: colorFondo8 },
          { startValue: 8.5, endValue: 9.5, color: colorFondo9 },
        ],
      },

      legend: {
        cursor: "pointer",
      },
      data: dataColumns,

      animationEnabled: true,
      animationDuration: 2000,

      colorSet: "Colors", //colores definidos al inicio de la funcion
      backgroundColor: bgColor,

      dataPointMaxWidth: 40,
      dataPointMinWidth: 5,
    });
    chart.render();
  };
  //Constructor de objeto heredero de la clases ChartJS
  chartColumn(datasForChart);

  //Hito I FIN requerimiento 4 grafico de barras
};
//exportando datos de la tabla.
datostabla();
