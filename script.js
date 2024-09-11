document.getElementById('searchBox').addEventListener('input', function() {
    var searchValue = this.value.toLowerCase();
    var profiles = document.getElementsByClassName('profile');
    var found = false;
    for (var i = 0; i < profiles.length; i++) {
        var profile = profiles[i];
        var name = profile.getElementsByTagName('h2')[0].innerText.toLowerCase();
        if (name.includes(searchValue)) {
            profile.style.display = 'block';
            found = true;
        } else {
            profile.style.display = 'none';
        }
    }
    if (!found) {
        for (var i = 0; i < profiles.length; i++) {
            profiles[i].style.display = 'none';
        }
    }
});
