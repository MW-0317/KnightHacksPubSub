const express = require("express");
const app = express();
const axios = require("axios");

var config = {
	method: "get",
	url: "https://services.publix.com/api/v1/storelocation?types=R,G,H,N,S&option=&count=15&includeOpenAndCloseDates=true&isWebsite=true&zipCode=32816",
	headers: {
		Referer: "https://www.publix.com/",
		Origin: "https://www.publix.com",
		Cookie: "_abck=74B3E4B0AC28424E0209D5891014417E~-1~YAAQ3QHorDEaXBp8AQAATxspHgbWH7mbHwK1sLTVN0uAGSQa7hXeKGcLklJrST+g5g2OEc6sbfKZP1ilNx9SYs9MoDY5XJXsMPG4wRNbgwcwtWQG8j+nEtA7OSl1cN7pz2P1ditu6OQCfHR3nTm7jrxfyaL02DlPJJs4nTidxF/uHJ78joU9vNEN6c9GqbxZo/RQ1+bgnETwBXpdmOzCnh0C+Fobou5MfZFmvgAFI6rXDwPuOQXFRANN8CPDIeZx/ACn8/SP/l/yBha+jFfE+7tORBy+xOAYHY3k9UzxNE/HJo0AZoRjQIVpe7tdCllQ6uKkobBOnRRJDqn2XJ5olZpcHJAyjl5zmRULuxpBp0V1Z2mq+0f7BwI=~-1~-1~1632597069; bm_sz=95E54BE7F385193645278CC0D9BC9C97~YAAQ3QHorDIaXBp8AQAATxspHg24GuOljFL0/50zliBfFwyc7zcWzmIJSuV0DWUbHZ7Kzooi9I39R/PlcUqzvqsdDJJf6EP7/DAD4RNR53KQV1vkTQE0SkkIjNRQ8FCB2GUD5SkQJlDhpTXRYt0z/Fw8kc4uGowArEFEbkM96HgEBh12P054gwbHMBfi3L8GXttWx3+ufpw76sdVzlWZWAdMfslfuKxrTUDLu7GdccWeHlVAMHrA3fADme24yUXq+uQGdu8BsGBhzV8FUQwTzShtAfTzd85ASFq1uaDpzjQPXiY=~3551539~3160372",
	},
};

app.get("/", (reqq, res) => {
	axios(config)
		.then(function (response) {
			res.send(JSON.stringify(response.data));
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.listen(8080);
