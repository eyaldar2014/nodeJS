


// 2.2 - Write a MongoDb query to print all restaurant cities
// db.getCollection('restaurants').find().forEach( function(r) { print( "user: " + r.address.city ); } )

// 3.1 Query for restaurant names that start with a specific alphabet
// db.getCollection('restaurants').find({'name': /^b/})

// 3.2 - Query how many documents you have from the restaurantcollection.
// db.getCollection('restaurants').count()

// 3.3 - Write a MongoDb query to get restaurants that include reviews from a specific date
// db.getCollection('restaurants').aggregate([
//   {
//      $project: {
//         items: {
//            $filter: {
//               input: "$reviews",
//               as: "r",
//               cond: {  $eq: [ '$$r.date' ,'today' ] }
//            }
//         }
//      }
//   }
// ])

// 1.14 – Increment a specific restaurants score by 2
// db.getCollection('restaurants').update(
//   { name: "bombay" },
//   { $inc: { 'reviews.2.score' : 20 } }
// )