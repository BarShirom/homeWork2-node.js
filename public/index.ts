const output = document.getElementById("output")
async function handleGetAllUsers(){
    try {
      //@ts-ignore
      const { data } = await axios.get("/api/v1/users")
      if (!data) throw new Error("No data from server on client get all users")
      console.log(data)
      output.innerHTML = JSON.stringify(data)
    } catch (error) {
      console.error(error.messasge)
    }
  }
  
  async function handleGetUserById(event){
    try {
      event.preventDefault()
      const id = event.target.elements.userByIdInput.value
      //@ts-ignore
      const { data } = await axios.get(`/api/v1/users/${id}`)
      console.log(data)
      output.innerHTML = JSON.stringify(data)
    } catch (error) {
      console.error(error.message)
    }
  }
  async function handleAddNewUser(event){
    try {
      event.preventDefault()
      const firstName = event.target.elements.firstNameInput.value
      const lastName = event.target.elements.lastNameInput.value
      const age = event.target.elements.ageInput.value
      const id = event.target.elements.idInput.value
      const address = event.target.elements.addressInput.value
      //@ts-ignore
      const { data } = await axios.post("/api/v1/users", {firstName, lastName, age, id, address})
      console.log(data)
      output.innerHTML = JSON.stringify(data)

    } catch (error) {
      console.error(error.messasge)
    }
  }
  
  async function handleDeleteUserByName(event) {
    try {
      event.preventDefault()
      const firstName = event.target.elements.deleteUserInput.value
      //@ts-ignore
      const { data } = await axios.delete(`/api/v1/users/${firstName}`)
      console.log(data)
      output.innerHTML = JSON.stringify(data)

    } catch (error) {
      console.error(error.messasge)
    }
  }

   async function handleUpdateUser(event) {
    try {
      event.preventDefault()
      const newFirstName = event.target.elements.newFirstName.value
      const newLastName = event.target.elements.newLastName.value
      const newAge = event.target.elements.newAge.value
      const newId = event.target.elements.newId.value
      const newAddress = event.target.elements.newAddress.value
      const idUser = event.target.elements.userIdInput.value
      //@ts-ignore
      const { data } = await axios.put(`/api/v1/users/${idUser}`, {newFirstName, newLastName, newAge, newId, newAddress})
      console.log(data)
      output.innerHTML = JSON.stringify(data)
      
    } catch (error) {
      console.error(error.messasge)
    }
  }
  
  // async function handleUpdateUser(event) {
  //   try {
  //     event.preventDefault()
  //     const newFirstName = event.target.elements.newNameInput.value
  //     const idUser = event.target.elements.userIdInput.value
  //     //@ts-ignore
  //     const { data } = await axios.patch(`/api/v1/users/${idUser}`, {newFirstName})
  //     console.log(data)
      
  //   } catch (error) {
  //     console.error(error.messasge)
  //   }
  // }