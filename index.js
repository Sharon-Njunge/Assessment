
document.addEventListener('DOMContentLoaded', () => {
    const fetchDataButton = document.getElementById('fetch-data');
    const dataContainer = document.getElementById('data-container');
    fetchDataButton.addEventListener('click', () => {
        fetchData();
    });
    function fetchData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                displayData(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                dataContainer.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
            });
    }
    function displayData(data) {
        dataContainer.innerHTML = '';
        const html = data.map(item => {
            return `
                <div class="post">
                    <h2>${item.title}</h2>
                    <p>${item.body}</p>
                </div>
            `;
        }).join('');
        dataContainer.innerHTML = html;
    }
});
