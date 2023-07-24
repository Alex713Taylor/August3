
window.addEventListener("load",()=>{const form = document.getElementById("dateForm");

form.addEventListener("submit",async (e)=>{
  e.preventDefault();

    const data = new FormData(e.target);

   const value = Object.fromEntries(data.entries());

    console.log(JSON.stringify(value));
   await fetch("http://127.0.0.1:8090/api/collections/date/records", {
  method: "POST",
  body: JSON.stringify(value),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
    form.reset();
});
});
