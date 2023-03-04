const loadMeals = async (category) => {
    const link = `https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`
    try {
        const res = await fetch(link)
        const data = await res.json()
        displayMeals(data.meals)
    } catch (error) {
        console.log(error);
    }
}



function displayMeals(data) {
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerHTML = '';
    data.forEach(meal => {
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col')

        mealDiv.innerHTML = `
            <div class="card h-100">
                <img src="${meal?.strMealThumb}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal?.strMeal}</h5>
                </div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#meal-details" onclick="loadMealDetails2(${meal?.idMeal})">
                    Details
                </button>
            </div>
        `
        mealsContainer.appendChild(mealDiv)
    });
}

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keyup', function (e) {
    if (e.code === 'Enter') {
        search()
    }
})


function search() {
    loadMeals(searchInput.value)
}

const loadMealDetails = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(mealDetails => displayMealDetails(mealDetails.meals[0]))
}

const loadMealDetails2 = async (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    try {
        const res = await fetch(url)
        const mealDetails = await res.json();
        displayMealDetails(mealDetails.meals[0])
    } catch (error) {
        console.log(error);
    }
}

const displayMealDetails = (mealDetails) => {
    const mealLabel = document.getElementById('meal-detailsLabel')
    const mealDesc = document.getElementById('meal-desc')

    mealLabel.innerText = mealDetails.strMeal
    mealDesc.innerHTML = `
        <img src="${mealDetails.strMealThumb}" class="img-fluid">
    `
}

loadMeals('fish')

const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));