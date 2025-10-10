function updateClock() {
    const clockElement = document.getElementById('digital-clock');
    if (!clockElement) return;

    const now = new Date();
    
    // Formata os números para terem sempre dois dígitos (ex: 09 em vez de 9)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Chama a função uma vez para exibir o relógio imediatamente ao carregar a página
updateClock();

// Atualiza o relógio a cada segundo (1000 milissegundos)
setInterval(updateClock, 1000);

// --- Funcionalidade de Pesquisa e Filtro ---

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const bookList = document.querySelectorAll('.book-item');

    function filterAndSearch() {
        const searchTerm = searchBar.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

        bookList.forEach(book => {
            const title = book.querySelector('h3').textContent.toLowerCase();
            const author = book.querySelector('p').textContent.toLowerCase();
            const category = book.dataset.category;

            const matchesSearch = title.includes(searchTerm) || author.includes(searchTerm);
            const matchesFilter = (activeFilter === 'all') || (category === activeFilter);

            if (matchesSearch && matchesFilter) {
                book.classList.remove('hidden');
            } else {
                book.classList.add('hidden');
            }
        });
    }

    // Event listener para a barra de pesquisa
    searchBar.addEventListener('input', filterAndSearch);

    // Event listener para os botões de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' do botão antigo
            document.querySelector('.filter-btn.active').classList.remove('active');
            // Adiciona a classe 'active' ao botão clicado
            button.classList.add('active');
            
            // Chama a função principal de filtro
            filterAndSearch();
        });
    });
});