let crocheting_button = document.getElementById('crocheting-button');
crocheting_button.addEventListener('click', () => {
    let current_href = window.location.href;
    let new_location;
    if (current_href.search(''))
    window.location.href = current_href.replace('/index.html')
});