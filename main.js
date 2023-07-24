
document.addEventListener("DOMContentLoaded",()=>{
const btn = document.getElementById("submit");

btn.addEventListener("change",sendData,false);
btn.addEventListener("click",sendData,false);
btn.addEventListener("touchstart",sendData,false);
btn.addEventListener("touchend",sendData,false);

});

async function sendData(e){
  e.preventDefault();
  let foods = document.querySelector('input[name="dinns"]:checked').value;
  let funs = document.querySelector('input[name="funns"]:checked').value;
  let desserts = document.querySelector('input[name="dess"]:checked').value;
  let dateT = document.getElementById("datet").value;
  let hands = document.querySelector('input[name="handshold"]:checked').value;
  //let valueArr = [foods,"",funs,"",desserts,"",dateT,handshold];
  

  var value =`{"dinns":"${foods}","othdinn":"","funns":"${funs}","othfunn":"","dess":"${desserts}","othdess":"","datet":"${dateT}","handshold":"${hands}"}`;
console.log("test");
   console.log(value);
  await fetch("http://127.0.0.1:8090/api/collections/date/records", {
  method: "POST",
  body: value,
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
  window.location.reload();
}
