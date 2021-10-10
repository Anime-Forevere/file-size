/*

I created this mainly for myself
But you can use it!

*/

const url = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/core.js" // put url here
request({
  url: url,
  method: "HEAD"
},async function(err, response, body) {
  if(err) return console.error(err)
  let size = response.headers["content-length"]
  console.log(`The file from URL has size of ${size} bytes!`)
  process.exit(0)
})
