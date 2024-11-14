let data1 = "Homelander"; //Erster Post - Keyword
let data2 = "Homelander löscht New York aus, zum Spaß"; //Alle Anworten danach
let data = { data1 }


let options = {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-type": "application/json"
  }
}

  fetch(`http:/localhost:5000/api/option/0`, options)
  .then((response) => response.json())
  .then((json) => console.log(json))
  
  fetch(`http:/localhost:5000/api/image/0`, options)
  .then((response) => response.json())
  .then((json) => console.log(json))

//////////////////////////////////////////////////