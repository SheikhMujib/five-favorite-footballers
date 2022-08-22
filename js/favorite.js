function addToFavorite(element) {
    const favoritePlayer = element.parentNode.children[0].innerText;

    const favoriteFootballers = document.getElementById('favorite-five');

    const li = document.createElement('li');
    li.innerText = favoritePlayer;

    if (favoriteFootballers.childElementCount <= 4) {
        favoriteFootballers.appendChild(li);
    }
    else {
        alert('Hey! You cannot add more than 5 players.')
        return;
    }

    element.setAttribute("disabled", "");
}