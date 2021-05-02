
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const url = 'mongodb+srv://eyal:87654321@blogscheme.qukhk.mongodb.net/'
const databaseName = 'blog'

const dbInteract = (collection, contentObg) =>{

MongoClient.connect(url, { useNewUrlParser: true}, (error, client)=>{
  if (error){return console.log('error indeed')}
  
  const db = client.db(databaseName)
  
  if (collection === 'posts' || collection === 'comments'){
    db.collection(collection).insertOne(contentObg)
  }
  client.close();

  console.log('done')
})

}

// dbInteract('posts', {
//   postID : 1,
//   postCreator : 1,
//   postContent : {
//     title : 'lala',
//     content : 'lalalala'
//   }
// })

// dbInteract('comments', {
//   commentID : 4,
//   commentCreator : 1,
//   commentContent : 'lalalala'
// })