const fs = require('fs');
const fetch = require('node-fetch');

sheet_id="ovd0hzm";
let url = "https://spreadsheets.google.com/feeds/cells/1nzXUdaIWC84QipdVGUKTiCSc5xntBbpMpzLm6Si33zk/"+sheet_id+"/public/values?alt=json";

let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
	y = JSON.stringify(json);
	console.log(y);
	fs.writeFileSync('data.json', y);
	console.log("Written to data.js successfully!");
    });
