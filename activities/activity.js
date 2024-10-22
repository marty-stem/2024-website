let url = document.location.href, params = url.split('?')[1].split('&'), data = {}, tmp;
for (let i = 0, l = params.length; i < l; i++) {
    tmp = params[i].split('=');
    data[tmp[0]] = tmp[1];
}

const activity_name = data.name;

window.onload = function () {
    console.log("Loading activity:", activity_name);
    let activity_iframe = document.getElementById('activity-iframe');
    activity_iframe.src = `./${activity_name}/${activity_name}.html`;
}


