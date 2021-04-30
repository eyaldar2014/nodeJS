const fs = require('fs');

let data = JSON.parse(fs.readFileSync('./data.json'))
let users = data.users

let currentID
if(users.length > 0){
  currentID = (users[users.length - 1]).id + 1
}else{ currentID = 1}

console.log(data.users)
console.log("next user id will be " + currentID)

// tryConnection
const tryConnection = (req, res)=>{
  console.log('tryConnection request received')

  return res.send("tryConnection request received")
}

// Functions :
const validateActive = (id) => {
  let result = 1

  console.log(users[id - 1].IsActive)
  if (users[id - 1].IsActive === false) {
    result = 0
  }

  return result
}

const filterByCash = (min, max, active) => {
  let result = []

  users.forEach(u => {
    if (u.cash >= min && u.cash <= max) {
      if (active) {
        if (u.IsActive) {
          result.push(u)
        }
      }
      else {
        result.push(u)
      }
    }
  });

  return result
}

const validateId = (id) => {
  let result = 0
  users.forEach(u => {
    if (u.id === id) {
      result = 1
    }
  });
  return result
}

const validatePassportExist = (user) => {
  let result = 0
  users.forEach(u => {
    if (u.passport === user.passport) {
      result = 1
    }
  });
  return result
}

const addUser = (req, res) => {
  console.log('post request received: add user')

  const { user } = req.body;

  // creteria validation
  if (!user.passport) { return res.send("Error : please add passport") }

  // passport validation
  else if (validatePassportExist(user) === 1) {
    res.send("Error : passport already has account, please add new passport")
  }
  // create account
  else {
    let newUser = {
      "id": currentID,
      "passport": user.passport,
      "cash": 0,
      "credit": 0,
      "IsActive": false
    }
    users.push(newUser)
    data.users = users

    const writeData = JSON.stringify(data);
    fs.writeFileSync('./data.json', writeData);

    return res.send("new account created, your account id is " + currentID)
  }
}

const activateUser = (req, res) => {
  console.log('post request received: activate user')

  const { user } = req.body;

  // creteria validation
  if (!user.id) { return res.send("Error : please send id") }

  // id validation
  else if (validateId(user.id) !== 1) {
    res.send("Error : ID doesn't exist")
  }
  // active validation
  else if (validateActive(user.id) !== 0) {
    res.send("Error : user already active")
  }
  else {
    let currentUser = users[user.id - 1]

    currentUser = {
      "id": currentUser.id,
      "passport": currentUser.passport,
      "cash": currentUser.cash,
      "credit": currentUser.credit,
      "IsActive": true
    }
    users[user.id - 1] = currentUser
    data.users = users

    const writeData = JSON.stringify(data);
    fs.writeFileSync('./data.json', writeData);

    return res.send("action completed, activated")
  }
}

const depositing = (req, res) => {
  console.log('post request received: deposit cash')

  const { user } = req.body;

  // creteria validation 
  if (!user.id) { return res.send("Error : please send id") }
  else if (!user.amount) { return res.send("Error : please send cash") }
  // id validation
  else if (validateId(user.id) !== 1) {
    res.send("Error : ID doesn't exist")
  }
  // cash amount validation
  else if (user.amount < 0) {
    res.send("Error : cash must be positive")
  }
  // active validation
  else if (validateActive(user.id) !== 1) {
    res.send("Error : user is not active")
  }
  // deposit cash
  else {
    let currentUser = users[user.id - 1]

    currentUser = {
      "id": currentUser.id,
      "passport": currentUser.passport,
      "cash": currentUser.cash + user.amount,
      "credit": currentUser.credit,
      "IsActive": true
    }
    users[user.id - 1] = currentUser
    data.users = users

    const writeData = JSON.stringify(data);
    fs.writeFileSync('./data.json', writeData);

    return res.send("deposit completed, your balance is " + currentUser.cash)
  }
}

const updateCredit = (req, res) => {
  console.log('post request received: update credit')

  const { user } = req.body;

  // creteria validation 
  if (!user.id) { return res.send("Error : please send id") }
  else if (!user.credit) { return res.send("Error : please send new credit") }
  // cash credit amount validation
  else if (user.credit < 0) {
    res.send("Error : credit must be positive number")
  }
  // id validation
  else if (validateId(user.id) !== 1) {
    res.send("Error : ID doesn't exist")
  }
  // active validation
  else if (validateActive(user.id) !== 1) {
    res.send("Error : user is not active")
  }
  // update credit
  else {
    let currentUser = users[user.id - 1]

    currentUser = {
      "id": currentUser.id,
      "passport": currentUser.passport,
      "cash": currentUser.cash,
      "credit": user.credit,
      "IsActive": true
    }
    users[user.id - 1] = currentUser
    data.users = users

    const writeData = JSON.stringify(data);
    fs.writeFileSync('./data.json', writeData);

    return res.send("deposit completed, your new credit is " + currentUser.credit)
  }
}
// Withdraw money
const withdraw = (req, res) => {
  console.log('post request received: withdraw')

  const { user } = req.body;

  // creteria validation 
  if (!user.id) { return res.send("Error : please send id") }
  else if (!user.amount) { return res.send("Error : please send new amount") }
  // id validation
  else if (validateId(user.id) !== 1) {
    res.send("Error : ID doesn't exist")
  }
  // cash amount validation
  else if (user.amount < 0) {
    res.send("Error : cash must be positive")
  }
  // balance validation
  else if ((users[user.id - 1].cash + users[user.id - 1].credit) - user.amount < 0) {
    res.send("Error : credit allows only " + (users[user.id - 1].cash + users[user.id - 1].credit))
  }
  // active validation
  else if (validateActive(user.id) !== 1) {
    res.send("Error : user is not active")
  }
  // withdraw execution
  else {
    let currentUser = users[user.id - 1]

    currentUser = {
      "id": currentUser.id,
      "passport": currentUser.passport,
      "cash": currentUser.cash - user.amount,
      "credit": currentUser.credit,
      "IsActive": true
    }
    users[user.id - 1] = currentUser
    data.users = users

    const writeData = JSON.stringify(data);
    fs.writeFileSync('./data.json', writeData);

    return res.send("withdraw completed, your new balance " + currentUser.cash)
  }
}

// Transferring
const transfer = (req, res) => {
  console.log('post request received: transfer credit')

  const { user } = req.body;

  // creteria validation 
  if (!user.giverID) { return res.send("Error : please send giver ID") }
  else if (!user.takerID) { return res.send("Error : please send new taker ID") }
  else if (!user.amount) { return res.send("Error : please send amount") }

  // id validation
  else if (validateId(user.giverID) !== 1) {
    res.send("Error : giver ID doesn't exist")
  }
  else if (validateId(user.takerID) !== 1) {
    res.send("Error : taker ID doesn't exist")
  }
  // cash amount validation
  else if (user.amount < 0) {
    res.send("Error : cash must be positive")
  }
  // // balance validation
  else if ((users[user.giverID - 1].cash + users[user.giverID - 1].credit) - user.amount < 0) {
    res.send("Error : credit allows only " + (users[user.giverID - 1].cash + users[user.giverID - 1].credit))
  }
  // active validation
  else if (validateActive(user.giverID) !== 1) {
    res.send("Error : user is not active")
  }
  else if (validateActive(user.takerID) !== 1) {
    res.send("Error : user is not active")
  }
  // transfer execution
  else {
    let giverUser = users[user.giverID - 1]
    let takerUser = users[user.takerID - 1]

    giverUser = {
      "id": giverUser.id,
      "passport": giverUser.passport,
      "cash": giverUser.cash - user.amount,
      "credit": giverUser.credit,
      "IsActive": true
    }
    takerUser = {
      "id": takerUser.id,
      "passport": takerUser.passport,
      "cash": takerUser.cash + user.amount,
      "credit": takerUser.credit,
      "IsActive": true
    }
    users[user.giverID - 1] = giverUser
    users[user.takerID - 1] = takerUser
    data.users = users

    const writeData = JSON.stringify(data);
    fs.writeFileSync('./data.json', writeData);

    return res.send("transfer completed, giver new balance " + giverUser.cash + ' receiver new balance ' + takerUser.cash)
  }
}
// Show user details 
const showUserDetails = (req, res) => {
  console.log('user details request received')

  const { user } = req.body;

  // creteria validation 
  if (!user.id) { return res.send("Error : please send id") }
  // id validation
  else if (validateId(user.id) !== 1) {
    res.send("Error : giver ID doesn't exist")
  }
  // active validation
  else if (validateActive(user.id) !== 1) {
    res.send("Error : user is not active")
  }
  // execute request
  else {
    return res.send("user " + JSON.stringify(users[user.id - 1]))
  }
}

// Show All Users Details
const showAllUsersDetails = (req, res) => {
  console.log('ALL users details request received')

  return res.send({ 'users': users })
}

// Filter the users by cash
const cashFilter = (req, res) => {
  console.log('Cash filter request received')

  const { searchMinimumAmount, searchMaximumAmount, areActive } = req.body;

  // creteria validation 
  if (!searchMinimumAmount || typeof searchMinimumAmount !== 'number') { return res.send("Error : please add valid minimum amount to search") }
  if (!searchMaximumAmount || typeof searchMaximumAmount !== 'number') { return res.send("Error : please add valid maximum amount to search") }
  else {
    const richUsers = filterByCash(searchMinimumAmount, searchMaximumAmount, areActive)

    return res.send("user that has more than this amount are " + JSON.stringify(richUsers))
  }
}

module.exports = {
  addUser,
  depositing,
  updateCredit,
  withdraw,
  transfer,
  showUserDetails,
  showAllUsersDetails,
  cashFilter,
  activateUser,
  tryConnection
}
