// This file talks to the Backend to log you in
const signin = async (user) => {
  try {
    let response = await fetch('http://localhost:3000/auth/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    return await response.json()
  } catch(err) {
    console.log(err)
    return { error: "Could not sign in." }
  }
}

const signout = async () => {
  try {
    let response = await fetch('http://localhost:3000/auth/signout', { method: 'GET' })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

export { signin, signout }