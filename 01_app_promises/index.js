/*
  Created By Jay Gandhi. https://github.com/gandhi-jay
 */

const users = [{
  id:1,
  name : "Bruce Wayne",
  role : "Batman",
  team : "Justice leauge",
  teamId : 1
},{
  id:2,
  name : "Tony Stark",
  role : "Ironman",
  team : "Avengers",
  teamId : 2
}]

const grades = [{
  id : 1,
  teamId : 1,
  grade : 100
},{
  id : 2,
  teamId : 2,
  grade : 99
},{
  id : 1,
  teamId : 1,
  grade : 32
}]

const getUser = (id) => {
  return new Promise((resolve,reject) => {
    const user = users.find((user) => user.id === id)
    if(user) resolve(user)
    else reject(`Enable to find user ${id}`)
  })
}

const getGrades = (teamId) => {
  return new Promise((resolve,reject) => {
    resolve(grades.filter(grade => grade.teamId === teamId));
  })
}

getUser(2).then((user)=>console.log(user)).catch(e => console.log(e))
getGrades(1).then(grade => console.log(grade))
