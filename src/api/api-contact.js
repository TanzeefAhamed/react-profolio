const create = async (contact) => {
  try {
    let response = await fetch('/api/contacts', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(contact)
    })
    return await response.json()
  } catch (err) { console.log(err) }
}
export { create }