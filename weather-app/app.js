/*
○ Use yargs to parse a --city argument provided by the user.
○ Simulate fetching weather data by returning a hardcoded response for different cities.
○ Use chalk to style the output, emphasizing the city name and weather details.
*/
import yargs from "yargs"
const argv = yargs(process.argv.slice(2)).parse()
// console.log(argv["city"])

import chalk from "chalk"


import weaData from "./wea.js"
// We discovered that import doesnt actually look for the word that you pass second,
// it only looks for a "default" export. This means you must label something default then can rename it whatever you want here
// to import non default objects, use {}'s


async function printPrettyHeader(city){
    console.log(chalk.bgRed("                              "))
    console.log(chalk.bgYellow("                              "))
    console.log(chalk.white.bgGreen(`Weather for ${city}`+" ".repeat(30-(12+city.length))))
    console.log(chalk.bgBlue("                              "))
    console.log(chalk.bgMagenta("                              "))
}

async function printPrettyData(data){
    console.log(chalk.bgGreen("Currently:") + " " + data["Current Temp"] + "°, " + data["Condition"])
    console.log(chalk.bgRed("High:") + " " + data["High"] + "° " + chalk.bgBlue("Low:") + " " + data["Low"] + "° " + chalk.bgGreen("Avg:") + " " + (~~((data["High"]+data["Low"])/2))+"°")
    console.log(chalk.bgCyan("Humidity:") + " " + data["Humidity"] + "%")
}

function printWeather(city){
    let dat = weaData[city]
    setTimeout(printPrettyHeader,0,city)
    setTimeout(printPrettyData,2000,dat)
}

printWeather(argv["city"])
