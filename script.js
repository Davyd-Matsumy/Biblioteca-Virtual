// Relógio digital
function updateClock() {
    const clockElement = document.getElementById('digital-clock');
    if (!clockElement) return;
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString('pt-BR', { hour12: false });
}
setInterval(updateClock, 1000);
updateClock();

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const bookItems = document.querySelectorAll('.book-item');

    // garante que nenhum livro comece escondido
    bookItems.forEach(b => b.style.display = 'flex');

    // Função para mostrar livro com animação
    function showBook(book) {
        book.style.display = 'flex';  // garante que esteja no layout
        book.classList.remove('hidden'); // animação de aparecer
    }

    // Função para esconder livro com animação
    function hideBook(book) {
        book.classList.add('hidden'); // animação de sumir
        // Só aplica display:none se ainda estiver escondido
        book.addEventListener('transitionend', () => {
            if (book.classList.contains('hidden')) {
                book.style.display = 'none';
            }
        }, { once: true });
    }

    // Função principal de filtro + pesquisa
    function filterAndSearch() {
        const term = searchBar.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

        bookItems.forEach(book => {
            const title = book.querySelector('h3').textContent.toLowerCase();
            const author = book.querySelector('p').textContent.toLowerCase();
            const category = book.dataset.category;

            const matchesSearch = title.includes(term) || author.includes(term);
            const matchesFilter = activeFilter === 'all' || category === activeFilter;

            if (matchesSearch && matchesFilter) {
                showBook(book);
            } else {
                hideBook(book);
            }
        });
    }

    // Executa enquanto digita na barra de pesquisa
    searchBar.addEventListener('input', filterAndSearch);

    // Troca de filtro ao clicar nos botões
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');
            filterAndSearch();
        });
    });

    // Filtra tudo ao carregar a página
    filterAndSearch();
});
