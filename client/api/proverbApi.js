import request from 'superagent'

export function getMaoriProverb() {
  return request
    .get('https://eda-te-reo.herokuapp.com/api/proverbs')
    .then((res) => res.body.current_proverb)
}
