let allData = [];
let allDatas = [];
let allCategories = [];
let allIng = [];
let userInput = document.querySelector("#input1");
let userInput2 = document.querySelector("#input2");

function getData(type) {
    let myHttp = new XMLHttpRequest();

    myHttp.open("GET", `https://www.themealdb.com/api/json/v1/1/search.php?s=${type}`);
    myHttp.send();

    myHttp.addEventListener("readystatechange", function () {
        if (myHttp.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(myHttp.response).meals);
            let data = JSON.parse(myHttp.response);
            allData = data.meals;
            display();

            $(".text1").on("click", function () {
                $("#search").removeClass("d-none");
                $("#myData").addClass("d-none");
                $("#categories").addClass("d-none");
                $("#ing").addClass("d-none");
                $("#area").addClass("d-none");
                // $("#details").addClass("d-none");
                $("#contact").addClass("d-none");
                $(".meal-container").addClass("d-none");
                $("#input1").removeClass("d-none");
                $("#input2").removeClass("d-none");





            });
            $(".text2").on("click", function () {
                console.log("kkk")
                $("#categories").removeClass("d-none");
                $("#myData").addClass("d-none");
                $("#ing").addClass("d-none");
                $("#area").addClass("d-none");
                $("#search").addClass("d-none");
                $("#contact").addClass("d-none");

            });

            $(".text3").on("click", function () {
                console.log("kkk")
                $("#area").removeClass("d-none");
                $("#myData").addClass("d-none");
                $("#categories").addClass("d-none");
                $("#ing").addClass("d-none");
                $("#search").addClass("d-none");
                $("#contact").addClass("d-none");
            })

            $(".text4").on("click", function () {
                $("#ing").removeClass("d-none");
                $("#myData").addClass("d-none");
                console.log("lalal")
                $("#categories").addClass("d-none");
                $("#area").addClass("d-none");
                $("#search").addClass("d-none");
                $("#contact").addClass("d-none");

            })
            $(".text6").on("click", function () {
                $("#contact").removeClass("d-none");
                $("#myData").addClass("d-none");
                console.log("lalalkk")
                $("#categories").addClass("d-none");
                $("#ing").addClass("d-none");
                $("#area").addClass("d-none");
                $("#search").addClass("d-none");
            })

            // end

            document.querySelectorAll(".col-md-3").forEach(card => {
                card.addEventListener("click", () => {
                    console.log("hellozz")
                })
            })
        }
    })
}
getData('')

function display() {
    let cartona = ``;
    for (let i = 0; i < allData.length; i++) {
        cartona += `<div class="col-md-3 classes " onclick="getId('${allData[i].idMeal}')">
            <img src="${allData[i].strMealThumb}" class="w-100 imagess rounded" alt="${allData[i].strMeal}" >
    <div class="overlay">
      <div class="text">${allData[i].strMeal}</div>
        </div>
        </div>`;
    }

    document.querySelector("#myData").innerHTML = cartona;
}

// when click on icon
$(document).ready(function () {
    $('#class-i').on('click', function () {
        $("#setting .gear-box").removeClass("d-none");
        $("#class-x").removeClass("d-none");
        $("#class-i").addClass("d-none");
    });

    $('#class-x').on('click', function () {
        $("#setting .gear-box").addClass("d-none");
        $("#class-x").addClass("d-none");
        $("#class-i").removeClass("d-none");
    });
});

// end


// loader section
$(document).ready(function () {
    $(".loader").fadeOut(1000, function () {
        $("#setting").removeClass("d-none");
        $("#loading").slideUp(1000, function () {
            $("body").css("overflow", "auto");
        });
    });
});
// end

// when click show details
$(".col-md-3").on('click', function () {
    $("#myData").addClass("d-none", function () {
        $("#details").removeClass("d-none")
    })
})

// side bar functions
// search
$(".text1").on("click", function () {
    console.log("text1")
})

function getDatas(type) {
    let myHttp = new XMLHttpRequest();

    myHttp.open("GET", `https://www.themealdb.com/api/json/v1/1/search.php?s=${type}`);
    myHttp.send();

    myHttp.addEventListener("readystatechange", function () {
        if (myHttp.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(myHttp.response).meals);
            let data = JSON.parse(myHttp.response);
            allData = data.meals;
            displayFood();
        }
    });
}

function displayFood() {
    let cartona = ``;
    for (let i = 0; i < allData.length; i++) {
        cartona += `<div class="col-md-3"    onclick="getId('${allData[i].idMeal}')" >
        <img src="${allData[i].strMealThumb}" class="w-100 imagess rounded" alt="${allData[i].strMeal}" >
<div class="overlay">
  <div class="text">${allData[i].strMeal}</div>
    </div>
    </div>`;
    }

    document.querySelector("#myDatas").innerHTML = cartona;
}
userInput.addEventListener("blur", function (e) {
    const searchTerm = e.target.value.trim();
    if (searchTerm !== "") {
        getDatas(searchTerm);
    }
});

userInput2.addEventListener("blur", function (e) {
    console.log(e.target.value);
    const firstLetter = e.target.value.charAt(0);
    getDatas(firstLetter);
});

// end

// categories =/

function getAllCategories() {
    let myHttp = new XMLHttpRequest();

    myHttp.open("GET", "https://www.themealdb.com/api/json/v1/1/categories.php");
    myHttp.send();

    myHttp.addEventListener("readystatechange", function () {
        if (myHttp.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(myHttp.response).categories);
            let data = JSON.parse(myHttp.response);
            allCategories = data.categories;
            displayAllCategories();
        }
    });
}

function displayAllCategories() {
    let cartona = ``;
    for (let i = 0; i < allCategories.length; i++) {
        cartona += `<div class="col-md-3" id="carta "  onclick="getMealCat('${allCategories[i].strCategory}')">
        <img src="${allCategories[i].strCategoryThumb}" class="w-100 imagess rounded" >
<div class="overlay">
<div class="text5"><h2>${allCategories[i].strCategory}</h2> </div>
<br/>
<p>${allCategories[i].strCategoryDescription}</p>
    </div>
    </div>`;
    }

    document.querySelector("#myData3").innerHTML = cartona;
}
getAllCategories();

// end =/

// area 

function getAllAreas() {
    let myHttp = new XMLHttpRequest();

    myHttp.open("GET", "https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    myHttp.send();

    myHttp.addEventListener("readystatechange", function () {
        if (myHttp.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(myHttp.response).meals);
            let data = JSON.parse(myHttp.response);
            allareas = data.meals;
            displayAllAreas();
        }
    });
}

function displayAllAreas() {
    let cartona = ``;
    for (let i = 0; i < allareas.length; i++) {
        cartona += `<div class="col-md-3"          onclick="getMealArea('${allareas[i].strArea}')">
        <i class="fa-solid fa-house-laptop fa-3x text-center ms-3"></i>
                    <h2>${allareas[i].strArea}</h2>
                </div>`;
    }

    document.querySelector("#areas").innerHTML = cartona;
}
getAllAreas();
// end
//   ingreadients
function getAllIng() {
    let myHttp = new XMLHttpRequest();

    myHttp.open("GET", "https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    myHttp.send();

    myHttp.addEventListener("readystatechange", function () {
        if (myHttp.readyState == 4 && this.status == 200) {
            let data = JSON.parse(myHttp.response);
            console.log(data.meals);
            allIng = data.meals;
            displayAllIng();
        }
    });
}

function displayAllIng() {
    let cartona = ``;
    let displayCount = Math.min(30, allIng.length);

    for (let i = 0; i < displayCount; i++) {
        cartona += `<div class="col-md-3"    onclick="getMealIngr('${allIng[i].strIngredient}')">
                        <i class="fa-solid fa-drumstick-bite fa-3x text-center text-white ms-3"></i>
                        <h2 class="text-white">${allIng[i].strIngredient}</h2>
                        <p class="text-white">${allIng[i].strDescription}</p>
                    </div>`;
    }
    document.querySelector("#ingg").innerHTML = cartona;
}

getAllIng();

// end


// display parttt

// contact us section
function validateProductName() {
    var regex = /^[A-Z][a-z]{3,8}$/;
    if (regex.test(productName.value) == true) {
        productName.style.border = "none"
        document.getElementById("wrongName").classList.add("d-none");
        return true
    } else {
        productName.style.border = "5px solid red"
        document.getElementById("wrongName").classList.remove("d-none");
        return false
    }
}

function validateEmail() {
    var emailInput = document.getElementById("email");
    var errorElement = document.getElementById("wrongemail");
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regex.test(emailInput.value)) {
        emailInput.style.border = "none";
        errorElement.classList.add("d-none");
        return true;
    } else {
        emailInput.style.border = "5px solid red";
        errorElement.classList.remove("d-none");
        return false;
    }
}



function validatePhone() {
    var phoneInput = document.getElementById("phone");
    var errorElement2 = document.getElementById("wrongPhone");
    var regex2 = /^(\+20|20)?(\s|-)?\(?(1[0-9]{2})\)?(\s|-)?[0-9]{7}$/;
    if (regex2.test(phoneInput.value)) {
        phoneInput.style.border = "none";
        errorElement2.classList.add("d-none");
        return true;
    } else {
        phoneInput.style.border = "5px solid red";
        errorElement2.classList.remove("d-none");
        return false;
    }
}


function validateAge() {
    var ageInput = document.getElementById("age");
    var errorElement3 = document.getElementById("wrongAge");
    var regex3 = /^(1[8-9]|[2-9][0-9])$/;
    if (regex3.test(ageInput.value)) {
        ageInput.style.border = "none";
        errorElement3.classList.add("d-none");
        return true;
    } else {
        ageInput.style.border = "5px solid red";
        errorElement3.classList.remove("d-none");
        return false;
    }
}

function validatePassword() {
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmPassword");
    var errorElement4 = document.getElementById("wrongPassword");
    var errorElementConfirm = document.getElementById("wrongConfirmPassword");
    var regex4 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex4.test(passwordInput.value)) {
        passwordInput.style.border = "none";
        errorElement4.classList.add("d-none");
    } else {
        passwordInput.style.border = "5px solid red";
        errorElement4.classList.remove("d-none");
    }
    if (confirmPasswordInput.value === passwordInput.value && confirmPasswordInput.value.length >= 8) {
        confirmPasswordInput.style.border = "none";
        errorElementConfirm.classList.add("d-none");
        document.getElementById("submitButton").removeAttribute("disabled");
    } else {
        confirmPasswordInput.style.border = "5px solid red";
        errorElementConfirm.classList.remove("d-none");
    }
    return regex4.test(passwordInput.value) && confirmPasswordInput.value === passwordInput.value && confirmPasswordInput.value.length >= 8;
}
// end

function getId(myId) {
    console.log(myId)
    getMealDetails(myId);
}



async function getMealDetails(id) {
    const mealOptions = {
        method: 'GET'
    };
    let mealResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, mealOptions);
    mealResponse = await mealResponse.json();
    let mealData = mealResponse.meals[0];

    console.log(mealData);
    displayMealDet(mealData);

}


function displayMealDet(oneMeal) {
    document.querySelector("#input1").classList.add("d-none")
    document.querySelector("#input2").classList.add("d-none")


    let mealCartona = '';

    mealCartona += `
        <div class="container">
            <div class="meal-container">
                <div class="d-flex justify-content-between mt-3" id="lightBoxContainer">
                    
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <img src="${oneMeal.strMealThumb}" style="max-width: 100%; max-height: 100%; object-fit: cover;">
                        <h2 class="text-white">${oneMeal.strMeal}</h2>
                    </div>
                    <div class="col-md-9">
                    <h2 class="mb-4 text-white">Instructions</h2>
                    <p class="mb-4 text-white">${oneMeal.strInstructions}</p>
                        <h2 class="text-white">Area: ${oneMeal.strArea}</h2>
                        <h4 class="text-white">Category: ${oneMeal.strCategory} </h4>
                        <h4 class="text-white">Recipes:
                            <button type="button" class="btn btn-primary"
                                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                ${oneMeal.strIngredient1}
                            </button>
                            <button type="button" class="btn btn-primary"
                                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                ${oneMeal.strIngredient2}
                            </button>
                            <button type="button" class="btn btn-primary"
                                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                ${oneMeal.strIngredient4}
                            </button>
                            <button type="button" class="btn btn-primary"
                                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                ${oneMeal.strIngredient5}
                            </button>
                            <button type="button" class="btn btn-primary"
                                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                ${oneMeal.strIngredient6}
                            </button>
                        <h4/>
                        <h4 class="text-white">Tags:</h4>
                        <button type="button" class="btn btn-warning mb-3"
                                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                ${oneMeal.strTags}
                            </button>
                        <br/>
                        <a class="btn btn-success show-meal" id="meal" href="${oneMeal.strSource}" target="_blank"> source</a>

                        <a class="btn btn-danger show-meal" id="meal" href="${oneMeal.strYoutube}" target="_blank"> Youtube</a>
                    </div>
                </div>
            </div>
        </div> `;

    document.querySelector("#myData").innerHTML = mealCartona;
    document.querySelector("#myDatas").innerHTML = mealCartona;
    document.querySelector("#categories").innerHTML = mealCartona;
    document.querySelector("#area").innerHTML = mealCartona;
    document.querySelector("#ing").innerHTML = mealCartona;

}

function getCat(myId2) {
    console.log(myId2);
    getMealCat(myId2);
}

async function getMealCat(cat) {
    const mealCatOptions = {
        method: 'GET'
    };

    let catResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`, mealCatOptions);
    catResponse = await catResponse.json();
    let catData = catResponse.meals;

    console.log(catData);
    displayMealCat(catData);
}

function displayMealCat(oneMeal) {
    let mealCartona2 = '';
    mealCartona2 += `
        <div class="container">
            <div class="meal-container">
                <div class="d-flex justify-content-between mt-3" id="lightBoxContainer">
                </div>
                <div class="row gy-5">
                    ${oneMeal.map(meal => `
                    <div class="col-md-3 classes "   onclick="getId('${meal.idMeal}')" >
                    <img src="${meal.strMealThumb}" class="w-100 imagess rounded">
            <div class="overlay">
              <div class="   text5">${meal.strMeal}</div>
                </div>
                </div>
                    `).join('')}
                </div>
            </div>
        </div>`;

    document.querySelector("#categories").innerHTML = mealCartona2;
}


// search
function getAreaa(myId3) {
    console.log(myId3);
    getMealArea(myId3);
}

async function getMealArea(area) {
    const mealAreaOptions = {
        method: 'GET'
    };

    let areaResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`, mealAreaOptions);
    areaResponse = await areaResponse.json();
    let areaData = areaResponse.meals;

    console.log(areaData);
    displayMealArea(areaData);
}

function displayMealArea(oneArea) {
    let mealCartona3 = '';
    mealCartona3 += `
        <div class="container">
            <div class="meal-container">
                <div class="d-flex justify-content-between mt-3" id="lightBoxContainer">
                </div>
                <div class="row gy-5">
                    ${oneArea.map(meal => `
                        <div class="col-md-3 classes" onclick="getMealDetails('${meal.idMeal}')">
                            <img src="${meal.strMealThumb}" class="w-100 imagess rounded">
                            <div class="overlay">
                                <div class="text5">${meal.strMeal}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>`;

    document.querySelector("#areas").innerHTML = mealCartona3;
}
// end





function getIngr(myId4) {
    console.log(myId4);
    getMealIngr(myId4);
}

async function getMealIngr(ingr) {
    const mealIngrOptions = {
        method: 'GET'
    };

    let ingrResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingr}`, mealIngrOptions);
    ingrResponse = await ingrResponse.json();
    let ingrData = ingrResponse.meals;

    console.log(ingrData);
    displayMealIngr(ingrData);
}

function displayMealIngr(oneIngr) {
    let mealCartona4 = '';
    
    mealCartona4 += `
        <div class="container">
            <div class="meal-container">
                <div class="d-flex justify-content-between mt-3" id="lightBoxContainer">
                </div>
                <div class="row gy-5">
                    ${oneIngr.map(meal => `
                        <div class="col-md-3 classes" onclick="getMealDetails('${meal.idMeal}')">
                            <img src="${meal.strMealThumb}" class="w-100 imagess rounded">
                            <div class="overlay">
                                <div class="text5">${meal.strMeal}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>`;
    document.querySelector("#ingg").innerHTML = mealCartona4;
}