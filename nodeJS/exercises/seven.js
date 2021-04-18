// • Fetch data using axios
// • fetch data using the request module
// • Fetch data using another 3rd party module

// const axios = require('axios')
const request = require('request')

const url = 'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'

// 1
// const sendGetRequest = async () => {
//   try {
//     const response = await axios.get(url)
//     console.log(response.data.people)
//   } catch (err) {
//       // Handle Error Here
//       console.error(err);
//   }
// };


// 2
// const sendGetRequest = () => {
//   request(url, function (error, response, body) {
//     console.error('error:', error);
//     console.log('statusCode:', response && response.statusCode); 
//     console.log('body:', JSON.parse(body).people);
//   });
// };

// sendGetRequest()



// const https = require("https")

// const answer = https
//   .request(url, res => {
//       let data = ""

//       res.on("data", d => {
//         data += d
//       })
//       res.on("end", () => {
//         console.log(JSON.parse(data).people)
//       })
//       .on("error", console.error)
//     }
//   )

//   answer.end()

