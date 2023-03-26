const container = document.createElement("div");
container.setAttribute("class", "container");
const row = document.createElement("div");
row.setAttribute("class", "row");
const head1 = document.createElement("h1");
head1.setAttribute("class", "head1");
head1.innerHTML = "World of Breaking Bad!!!";
const btn1 = document.createElement("button");
btn1.setAttribute("type", "button");
btn1.setAttribute("class", "btn btn-outline-warning");
btn1.innerHTML = "Characters";
btn1.addEventListener("click", characters);
const btn2 = document.createElement("button");
btn2.setAttribute("type", "button");
btn2.setAttribute("class", "btn btn-outline-warning");
btn2.innerHTML = "Episodes";
btn2.addEventListener("click", episodes);
const btn3 = document.createElement("button");
btn3.setAttribute("type", "button");
btn3.setAttribute("class", "btn btn-outline-warning");
btn3.innerHTML = "Quotes";
btn3.addEventListener("click", quotes);
const btn4 = document.createElement("button");
btn4.setAttribute("type", "button");
btn4.setAttribute("class", "btn btn-outline-warning");
btn4.innerHTML = "Deaths";
btn4.addEventListener("click", deaths);
const br1 = document.createElement("br");


container.append(head1, br1, btn1, btn2, btn3, btn4, row);
document.body.append(container);

async function characters() {
  let data1 = await fetch("https://breakingbadapi.com/api/characters");
  let data2 = await data1.json();
  console.log(data2);
  for (let i = 0; i < data2.length; i++) {
    let columns = document.createElement("div");
    columns.setAttribute("class", "col-md-4");
    columns.innerHTML = `<br><div class="card" style="width: 18rem;">
        <img src="${data2[i].img}" class="card-img-top" alt="Photo" height="300px">
        <div class="card-body">
          <h3>${data2[i].name}</h3>
          <h5>${data2[i].occupation[0]}</h5>
          <sm>Portrayed:</sm><h5>${data2[i].portrayed}</h5>
        </div>
      </div>`
    row.append(columns);
  }
}

async function episodes() {
  let data1 = await fetch("https://breakingbadapi.com/api/episodes");
  let data2 = await data1.json();
  console.log(data2);
  for (let i = 0; i < data2.length; i++) {
    let columns = document.createElement("div");
    columns.setAttribute("class", "col-md-4");
    columns.innerHTML = `<br><div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
        <div class="card-header">Episode : ${data2[i].episode_id}</div>
        <div class="card-body">
          <h5 class="card-title">${data2[i].title}</h5>
          <div><i>Season</i> : ${data2[i].season}</div>
          <div><i>Aired Date</i> : ${data2[i].air_date}</div>
          <div><i>Characters</i> :</div>
          <sm>${data2[i].characters}</sm>
        </div>
      </div>`
    row.append(columns);
  }
}

async function quotes() {
  let data1 = await fetch("https://breakingbadapi.com/api/quotes");
  let data2 = await data1.json();
  console.log(data2);
  for (let i = 0; i < data2.length; i++) {
    let columns = document.createElement("div");
    columns.setAttribute("class", "col-md-12");
    columns.innerHTML = `<br><div class="card text-black bg-light mb-3" style="max-width: 100%;">
        <div class="card-header">Breaking Bad Quotes : ${data2[i].quote_id}</div>
        <div class="card-body">
          <h5 class="card-title"><q>${data2[i].quote}</q></h5>
          <p class="card-text"> - ${data2[i].author}</p>
        </div>
      </div>`
    row.append(columns);
  }
}

async function deaths() {
  let data1 = await fetch("https://breakingbadapi.com/api/deaths");
  let data2 = await data1.json();
  console.log(data2);
  for (let i = 0; i < data2.length; i++) {
    let columns = document.createElement("div");
    columns.setAttribute("class", "col-md-4");
    columns.innerHTML = `<br><div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">Death Id : ${data2[i].death_id}</div>
        <div class="card-body">
        <div>Died : ${data2[i].death}</div>
        <div>Reason : ${data2[i].cause}</div>
        <div>Responsible : ${data2[i].responsible}</div>
        <div>No of Deaths : ${data2[i].number_of_deaths}</div>
        <div>Died in Season : ${data2[i].season}</div>
        <div>Episode : ${data2[i].episode}</div>
        </div>
      </div>`
    row.append(columns);
  }
}