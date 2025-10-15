function updateClock() {
    const clockElement = document.getElementById('digital-clock');
    if (!clockElement) return;

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);

// --- Funcionalidade de Pesquisa e Filtro ---
document.addEventListener('DOMContentLoaded', () => {
    const bookListContainer = document.querySelector('.book-list');

    // 1. Gera a lista de livros dinamicamente a partir do arquivo books.js
    if (typeof books !== 'undefined') {
        books.forEach(book => {
            const bookElement = document.createElement('a');
            bookElement.href = `preview.html?id=${book.id}`;
            bookElement.classList.add('book-item');
            bookElement.dataset.category = book.category;
            bookElement.innerHTML = `
                <img src="${book.img}" alt="Capa do livro ${book.title}">
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                </div>
            `;
            bookListContainer.appendChild(bookElement);
        });
    }

    const searchBar = document.getElementById('search-bar');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // 🔧 Correção principal: buscar os livros dentro da função de filtro
    function filterAndSearch() {
        const bookItems = document.querySelectorAll('.book-item');
        const searchTerm = searchBar.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

        bookItems.forEach(book => {
            const title = book.querySelector('h3').textContent.toLowerCase();
            const author = book.querySelector('p').textContent.toLowerCase();
            const category = book.dataset.category;

            const matchesSearch = title.includes(searchTerm) || author.includes(searchTerm);
            const matchesFilter = (activeFilter === 'all') || (category === activeFilter);

            if (matchesSearch && matchesFilter) {
                book.classList.remove('hidden'); // Mostra o livro
                // Usa um pequeno delay para garantir que o 'display' seja aplicado antes da animação
                // Primeiro, garante que o elemento esteja no fluxo do layout
                book.style.display = 'flex';
                setTimeout(() => book.classList.remove('hidden'), 10);
                // Em seguida, remove a classe 'hidden' para iniciar a animação de fade-in
                // Usamos um pequeno timeout para permitir que o navegador processe a mudança de display
                setTimeout(() => {
                    book.classList.remove('hidden');
                }, 10);
            } else {
                book.classList.add('hidden'); // Esconde o livro
                book.classList.add('hidden');
                // Após a animação de 'fade-out', esconde o elemento para o grid reorganizar
                book.addEventListener('transitionend', () => {
                    book.style.display = 'none';
                }, { once: true }); // O evento é chamado apenas uma vez
                // Após a animação de fade-out, define display: none para que o grid se reorganize corretamente
                book.addEventListener('transitionend', () => { book.style.display = 'none'; }, { once: true });
            }
        });
    }

    // Executa a filtragem enquanto o usuário digita
    searchBar.addEventListener('input', filterAndSearch);

    // Executa a filtragem quando o usuário muda de categoria
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            button.classList.add('active');
            filterAndSearch();
        });
    });

    // Chama a função uma vez ao carregar
    filterAndSearch();
});
