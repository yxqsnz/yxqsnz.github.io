const form = document.getElementById('searchForm');
const searchInput = document.getElementById('searchQuery');
const message = document.getElementById('message')
if (!form || !searchInput) alert('DEBUG: Using script in wrong page.');
const onFormSubmit = (event) => {
    const query = searchInput.value;
    if (!query) return alert("please tell me a query!");
    form.style.display = 'none';
    message.innerText = "Loading...";

    //window.open(`https://search.brave.com/search?q=${query}&source=web`, "_parent");
    window.open(`https://search.brave.com/search?q=${query}&source=web`);
    //event.preventDefault();
}
form.addEventListener('submit', onFormSubmit);
