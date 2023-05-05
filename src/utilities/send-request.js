export default async function sendRequest(url, method = 'GET', payload = null, payloadIsFormData = false) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, specifiy the method, etc.
  const options = { method };
  if (payload) {
    options.headers = payloadIsFormData ? {} : { 'Content-Type': 'application/json' };
    options.body = payloadIsFormData ? payload : JSON.stringify(payload);
  }
  const res = await fetch(url, options);
  // if res.ok is false then something went wrong
  if (res.ok) return res.json();
  const error = await res.json();
  throw error;
}