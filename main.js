
var myWorker = new Worker("./worker.js");

function btnClick(e) {
    e.preventDefault();
    myWorker.postMessage("");
}

myWorker.addEventListener("message", (ev)=>{
    let section = document.getElementById("apiData");
    section.innerText = JSON.stringify(ev.data, null, 2)
})

myWorker.addEventListener("error", (err)=>{
    console.log(err.message);
})


