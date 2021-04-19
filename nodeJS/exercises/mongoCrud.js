const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const url = 'mongodb://127.0.0.1:27017'
const databaseName = 'findMyRestaurantsVS'


const uri = "mongodb+srv://87654321:<password>@findmyrestaurant.w92vj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  // console.log()
  client.close();
});


// MongoClient.connect(url, { useNewUrlParser: true}, (error, client)=>{
//   if (error){return console.log('error indeed')}
  
//   const db = client.db(databaseName)

//   db.collection('restaurant').insertMany([
//     {
//       name: "bombay",
//       address: {
//         city: "Holon",
//         street: "Herzel 15",
//         coordinates: [-77.46574, 40.6774],
//       },
//       cuisine: "indian",
//       kosher: true,
//       reviews: [
//         {
//           date: new Date("2016-01-01"),
//           score: 7,
//         },
//         {
//           date: new Date("2019-01-01"),
//           score: 3,
//         },
//         {
//           date: new Date("2018-01-01"),
//           score: 8,
//         },
//       ],
//     },
//     {
//       name: "falafel 5 shekels",
//       address: {
//         city: "Bat-Yam",
//         street: "Histradrut 85",
//         coordinates: [-70.46574, 10.6774],
//       },
//       cuisine: "street food",
//       kosher: false,
//       reviews: [
//         {
//           date: new Date("2019-01-01"),
//           score: 3,
//         },
//         {
//           date: new Date("2016-01-01"),
//           score: 8,
//         },
//         {
//           date: new Date("2020-01-01"),
//           score: 4,
//         },
//       ],
//     },
//     {
//       name: "asian delight",
//       address: {
//         city: "Tel Aviv",
//         street: "Balfur 15",
//         coordinates: [-10.46574, 30.6774],
//       },
//       cuisine: "asian",
//       kosher: true,
//       reviews: [
//         {
//           date: new Date("2020-01-01"),
//           score: 3,
//         },
//         {
//           date: new Date("2018-01-01"),
//           score: 8,
//         },
//         {
//           date: new Date("2016-01-01"),
//           score: 9,
//         },
//       ],
//     },
//     {
//       name: "coconut jam",
//       address: {
//         city: "Tel Aviv",
//         street: "Stam Adress 15",
//         coordinates: [20.46574, -40.6774],
//       },
//       cuisine: "african",
//       kosher: true,
//       reviews: [
//         {
//           date: new Date("2017-01-01"),
//           score: 10,
//         },
//         {
//           date: new Date("2016-01-01"),
//           score: 8,
//         },
//         {
//           date: new Date("2019-01-01"),
//           score: 6,
//         },
//       ],
//     },
//     {
//       name: "rice and noodles",
//       address: {
//         city: "Holon",
//         street: "Bla Bla 15",
//         coordinates: [20.46574, 10.6774],
//       },
//       cuisine: "asian",
//       kosher: false,
//       reviews: [
//         {
//           date: new Date("2016-01-01"),
//           score: 1,
//         },
//         {
//           date: new Date("2019-01-01"),
//           score: 6,
//         },
//         {
//           date: new Date("2019-01-01"),
//           score: 2,
//         },
//       ],
//     },
//     {
//       name: "thailand paradise",
//       address: {
//         city: "Holon",
//         street: "Bla 13",
//         coordinates: [-77.46574, 40.6774],
//       },
//       cuisine: "asian",
//       kosher: false,
//       reviews: [
//         {
//           date: new Date("2020-01-01"),
//           score: 7,
//         },
//         {
//           date: new Date("2019-01-01"),
//           score: 6,
//         },
//         {
//           date: new Date("2020-01-01"),
//           score: 2,
//         },
//       ],
//     },
//   ])
// })






// console.log(mongodb)