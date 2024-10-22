let crocheting_button = document.getElementById("crocheting-button");
crocheting_button.addEventListener("click", function () {
    window.location = './activities/activity.html?name=crocheting';
});

let new_sport_button = document.getElementById("new-sport-button");
new_sport_button.addEventListener("click", function () {
    window.location = './activities/activity.html?name=new-sport';
});

let photography_button = document.getElementById("photography-button");
photography_button.addEventListener("click", function () {
    window.location = './activities/activity.html?name=photography';
});

let car_maintenance_button = document.getElementById("car-maintenance-button");
car_maintenance_button.addEventListener("click", function () {
    window.location = './activities/activity.html?name=car-maintenance';
});
