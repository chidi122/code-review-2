


let people =[
  {
  name: "text 1",
  priority: 1,
  img: "fish.webp"
  }, {
    name: "text 2",
    priority: 3,
    img: "fish.webp"
  },{
    name: "text 3",
    priority: 10,
    img: "fish.webp"
  },{
    name: "text 4",
    priority: 0,
    img: "fish.webp"},
    {
      name: "text 5",
      priority: 5,
      img: "fish.webp"},
      {
        name: "text 6",
        priority: 2,
        img: "fish.webp"},
        {
          name: "text 7",
          priority: 1,
          img: "fish.webp"},
          {
            name: "text 8",
            priority: 1,
            img: "fish.webp"},
            {
              name: "text 9",
              priority: 1,
              img: "fish.webp"}
  ]




  for (let val of people) {
    document.getElementById("result").innerHTML += `
    <div class="my-2" style="border: 2px solid black">
    <img src="${val.img}" width="100%">
    <p>${val.name}</p>
    <p class="priority">${val.priority}</p>
    <button class="btn btn-danger mybtn">priority</button>
    </div>
     `;
  }
  let btn =document.querySelectorAll (".mybtn");
  btn.forEach((element, i) => {
    element.addEventListener("click", function () {
      if (people[i].priority < 5) {
        people[i].priority++;
        document.querySelectorAll(".priority")[i].innerHTML = people[i].priority;
      }
  });
});













