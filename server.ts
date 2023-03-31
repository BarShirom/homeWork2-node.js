import express from "express"
const app = express()
const port = 3000

app.use(express.json()) // to get body from client (body = data from client);
app.use(express.static("public")); // express knows static files exist on public folder

interface User {
  firstName: string
  lastName: string
  age: number
  id: number | string
  address: string
}

const users: User[] = [
 {firstName: "yarden",
  lastName: "shriber",
  age: 31,
  id: 111,
  address: "herzlia"},

  {firstName: "dan",
  lastName: "davidov",
  age: 32,
  id: 222,
  address: "brussels"},

  {firstName: "mari",
  lastName: "kravetz",
  age: 29,
  id: 333,
  address: "santiago"},

  {firstName: "alon",
  lastName: "hashmaliko",
  age: 33,
  id: 444,
  address: "tel aviv"},

  {firstName: "udi",
  lastName: "amiel",
  age: 35,
  id: 555,
  address: "london"},

]

app.get("/api/v1/users", (req, res) => {
  res.send({ success: true, users })
  
})

app.get("/api/v1/users/:id", (req, res) => {
  console.log(req.params)
  let { id } = req.params

  console.log(id)
  const user = users.find((el) => el.id == id)
  console.log(user)
  res.send({ success: true, user })
})

app.post("/api/v1/users", (req, res) => {
  try {
    const {firstName, lastName, age, id, address} = req.body;
    if (!firstName || !lastName || !age || !id || !address) throw new Error("One of the following fields is missing: first name, last name, age, id, address (`/api/v1/users`")
    users.push({firstName, lastName, age, id, address})
    res.send({ success: true, users })
  } catch (error){
    res.status(500).send({ success: false, error })
  }
})

app.delete("/api/v1/users/:firstName", (req, res) => {
  let { firstName } = req.params
  console.log(firstName)
  const userUpdated = users.filter((el) => el.firstName != firstName)
  console.log(userUpdated);
  res.send({ success: true, userUpdated })
})

app.put("/api/v1/users/:id", (req, res) => {
  let { id } = req.params
  const {newFirstName, newLastName, newAge, newId, newAddress} = req.body
  users.forEach((user) => {
      if (user.id == id) {
          user.firstName = newFirstName
          user.lastName = newLastName
          user.age = newAge
          user.id = newId
          user.address = newAddress
      }
  })

  res.send({ success: true, users })
})


// app.patch("/api/v1/users/:id", (req, res) => {
//   let { id } = req.params
//   const {newFirstName} = req.body
//   users.forEach((user) => {
//       if (user.id == id) {
//           user.firstName = newFirstName
//       }
//   })

//   res.send({ success: true, users })
// })



app.listen(port, () =>{
    console.log(`server is running on port: ${port}`)
})