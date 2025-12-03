const list = async () => {
  try {
    let response = await fetch('/api/qualifications', { method: 'GET' })
    return await response.json()
  } catch(err) { console.log(err) }
}
const create = async (params, credentials, item) => {
  try {
    let response = await fetch('/api/qualifications', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + credentials.t },
      body: JSON.stringify(item)
    })
    return await response.json()
  } catch(err) { console.log(err) }
}
const remove = async (params, credentials) => {
  try {
    let response = await fetch('/api/qualifications/' + params.qualificationId, {
      method: 'DELETE',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + credentials.t }
    })
    return await response.json()
  } catch(err) { console.log(err) }
}
export { list, create, remove }