let foodEl = document.querySelector(".food");

let Indian = document.getElementById("Indian");
let Canadian = document.getElementById("Canadian");
let American = document.getElementById("American");
let Thai = document.getElementById("Thai");
let British = document.getElementById("British");
let Rassian = document.getElementById("Rassian");

let searchEl = document.getElementById("search");

const fetchData = async (area) => {
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  const data = await api.json();

  const recipi = data.meals;

  showRecipi(recipi);
};

let showRecipi = (recipi) => {
  foodEl.innerHTML = recipi
    .map(
      (meal) => `
  <div class="text-center">
    <div>
      <img src="${meal.strMealThumb}" class="img"/>
      <h1 class="fs-5 mt-2">${meal.strMeal}</h1>
    </div>  
  </div>
`
    )
    .join(""); // Add .join('') to convert the array to a string
};

Indian.addEventListener("click", () => {
  fetchData("Indian");
});
Canadian.addEventListener("click", () => {
  fetchData("Canadian");
});
American.addEventListener("click", () => {
  fetchData("American");
});
Thai.addEventListener("click", () => {
  fetchData("Thai");
});
British.addEventListener("click", () => {
  fetchData("British");
});
Rassian.addEventListener("click", () => {
  fetchData("Rassian");
});

fetchData("Canadian");

let searchRecipe = () => {
  searchEl.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      let inputValue = searchEl.value;
      console.log(inputValue);

      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
      );
      const data = await api.json();
      const recipi = data.meals;
      showRecipi(recipi);
    }
  });
};

searchRecipe();
