
document.addEventListener("DOMContentLoaded",()=>{
const btn = document.getElementById("jobdone");

btn.addEventListener("click",sendData,false);
btn.addEventListener("touchstart",sendData,false);

});

async function sendData(e){
  e.preventDefault();
  let foods = document.querySelector('input[name="dinns"]:checked').value;
  let othfoods = document.getElementById("otherDin").value;
  let funs = document.querySelector('input[name="funns"]:checked').value;
  let othfuns = document.getElementById("otherFun").value;
  let desserts = document.querySelector('input[name="dess"]:checked').value;
  let othdess = document.getElementById("otherDes").value;
  let dateT = document.getElementById("datet").value;
  let hands = document.querySelector('input[name="handshold"]:checked').value;
  //let valueArr = [foods,"",funs,"",desserts,"",dateT,handshold];
  
var now = new Date();
  var value =`{"dinns":"${foods}","othdinn":"${othfoods}","funns":"${funs}","othfunn":"${othfuns}","dess":"${desserts}","othdess":"${othdess}","datet":"${dateT}","handshold":"${hands}","timeSubmit":"${now}"}`;
    console.log("test");
   console.log(value);
  await fetch("https://sheetdb.io/api/v1/dnpf760w49nib", {
  method: "POST",
  body: value,
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
  window.location.reload();
  document.getElementById("formdonemsg").style.display ="block";
}
