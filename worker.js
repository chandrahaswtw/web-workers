this.addEventListener("message", ()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(json => this.postMessage(json));
})

