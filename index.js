/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const metricRender = [
    {
        text: "Length (Meter/Feet)",
        metric: "meters",
        imperial: "feet",
        conversion: 3.281
    },
    {
        text: "Volume (Liters/Gallons)",
        metric: "liters",
        imperial: "gallons",
        conversion: 0.264
    },
    {
        text: "Mass (Kilograms/Pounds)",
        metric: "kilos",
        imperial: "pounds",
        conversion: 2.204
    }
]

const btnConvert = document.getElementById("btn-convert")
let inputUnitValue = document.getElementById("input-unit").value
const foot = document.getElementById("footer")

function renderMetricsDetail() {
    let allMetricsHTML = ""
    for (i = 0; i < metricRender.length; i++) {
        allMetricsHTML += `
        <div class="conversion-tab">
            <h2>${metricRender[i].text}</h2>
            <p>${inputUnitValue} ${metricRender[i].metric} = ${converter(inputUnitValue, metricRender[i].conversion)} ${metricRender[i].imperial} |
             ${inputUnitValue} ${metricRender[i].imperial} = ${reverter(inputUnitValue, metricRender[i].conversion)} ${metricRender[i].metric}</p>
        </div>
        `
    }
    foot.innerHTML = allMetricsHTML;
}

function converter(metric, imperial) {
    return (metric * imperial).toFixed(3)
}

function reverter(metric, imperial) {
    return (metric / imperial).toFixed(3)
}

btnConvert.addEventListener("click", function(){
    inputUnitValue = document.getElementById("input-unit").value
    renderMetricsDetail()
})

renderMetricsDetail()
