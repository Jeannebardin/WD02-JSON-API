import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'




export function getMaoriProverb() {
  return request.get(`${serverURL}/MaoriProverb`).then((response) => response.body)
}

