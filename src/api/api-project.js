const list = async (signal) => {
  try {
    let response = await fetch('/api/projects', {
      method: 'GET',
      signal: signal
    })
    return await response.json()
  } catch(err) {
    console.log(err)
    return [] // <--- SAFETY: Returns an empty list instead of crashing if error
  }
}

const create = async (params, credentials, project) => {
  try {
    // Note: This assumes your backend route is just '/api/projects'
    let response = await fetch('/api/projects', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: JSON.stringify(project)
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const read = async (params, signal) => {
  try {
    let response = await fetch('/api/projects/' + params.projectId, {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const remove = async (params, credentials) => {
  try {
    let response = await fetch('/api/projects/' + params.projectId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

export { list, create, read, remove }