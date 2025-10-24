// Relógio digital com animação
function updateClock() {
    const clockElement = document.getElementById('digital-clock');
    if (!clockElement) return;
    const now = new Date();
    const timeString = now.toLocaleTimeString('pt-BR', { hour12: false });
    
    if (clockElement.textContent !== timeString) {
        clockElement.style.transform = 'scale(1.05)';
        setTimeout(() => {
            clockElement.textContent = timeString;
            clockElement.style.transform = 'scale(1)';
        }, 150);
    }
}
setInterval(updateClock, 1000);
updateClock();

// Header scroll effect
let isScrolling;
window.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        // Executa a lógica de scroll dentro de um requestAnimationFrame para melhor performance
        window.requestAnimationFrame(() => {
            const header = document.querySelector('header');
            if (header) {
                header.classList.toggle('scrolled', window.pageYOffset > 50);
            }
        });
    }, 100); // Um pequeno delay para não disparar a cada pixel
});

document.addEventListener('DOMContentLoaded', () => {
    // Seleção de elementos do DOM
    const searchBar = document.getElementById('search-bar');
    const filterButtons = document.querySelectorAll('.filter-btn');    
    const bookList = document.querySelector('.book-list');
    const paginationControls = document.getElementById('pagination-controls');
    const pageInfo = document.getElementById('page-info');
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');

    // Estado da Paginação
    let currentPage = 1;
    const booksPerPage = 20; // Mantido o valor original
    let currentFilteredBooks = [...booksData];

    // Função para gerar os livros na página
    function renderBooks(booksToRender, page = 1) {
        if (!bookList) return;
        bookList.innerHTML = ''; // Limpa a lista antes de adicionar os livros

        const start = (page - 1) * booksPerPage;
        const end = start + booksPerPage;
        const paginatedBooks = booksToRender.slice(start, end);

        paginatedBooks.forEach((book, index) => {
            const bookElement = document.createElement('a');
            bookElement.href = book.pdf;
            bookElement.target = '_blank';
            bookElement.className = 'book-item';
            bookElement.dataset.category = book.category;

            // Cria a imagem com um fallback para o caso de não ser encontrada
            // Adiciona lazy loading para melhorar a performance de carregamento inicial
            const img = document.createElement('img');
            img.loading = 'lazy'; // Lazy loading nativo do navegador
            img.src = book.image;
            img.alt = `Capa do livro ${book.title}`;
            img.onerror = function() {
                // Se a imagem falhar, usa um placeholder
                this.onerror = null; // Previne loops infinitos se o placeholder também falhar
                this.src = 'img/placeholder.svg';
                this.classList.add('image-placeholder'); // Adiciona classe para estilo opcional
            };

            const bookInfo = document.createElement('div');
            bookInfo.className = 'book-info';
            bookInfo.innerHTML = `
                <h3>${book.title}</h3>
                <p>${book.author} (${book.year})</p>
                <div class="rating" data-rating="${book.rating}">
                    <!-- Estrelas serão geradas aqui -->
                </div>
            `;
            bookElement.append(img, bookInfo);
            bookList.appendChild(bookElement);
        });
        // Após renderizar, aplica as avaliações
        generateRatings();
    }

    // Função para ATUALIZAR a paginação (mais eficiente)
    function updatePagination(totalBooks) {
        if (!paginationControls || !pageInfo || !prevButton || !nextButton) return;
        
        const totalPages = Math.ceil(totalBooks / booksPerPage);

        // Mostra ou esconde os controles de paginação
        if (totalPages <= 1) {
            paginationControls.style.display = 'none';
            return;
        }
        
        paginationControls.style.display = 'flex';
        pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
    }

    // Função para mudar de página
    function changePage(direction) {
        const totalPages = Math.ceil(currentFilteredBooks.length / booksPerPage);
        currentPage += direction;

        // Garante que a página atual não saia dos limites
        if (currentPage < 1) currentPage = 1;
        if (currentPage > totalPages) currentPage = totalPages;

        renderBooks(currentFilteredBooks, currentPage);
        updatePagination(currentFilteredBooks.length);
        window.scrollTo(0, 0); // Rola para o topo ao mudar de página
    }

    // Função principal de filtro + pesquisa
    function filterAndSearch() {
        const term = searchBar.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

        currentFilteredBooks = booksData.filter(book => {
            const title = book.title.toLowerCase();
            const author = book.author.toLowerCase();
            const category = book.category;
            
            const matchesSearch = title.includes(term) || author.includes(term);
            const matchesFilter = activeFilter === 'all' || category === activeFilter;

            return matchesSearch && matchesFilter;
        });

        currentPage = 1; // Reseta para a primeira página a cada novo filtro/busca
        renderBooks(currentFilteredBooks, currentPage);
        updatePagination(currentFilteredBooks.length);
    }

    // Debounce para melhor performance
    let searchTimeout;
    searchBar.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(filterAndSearch, 150);
    });

    // Adiciona eventos aos botões de paginação uma única vez
    if (prevButton) prevButton.addEventListener('click', () => changePage(-1));
    if (nextButton) nextButton.addEventListener('click', () => changePage(1));

    // Troca de filtro com animação
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const activeBtn = document.querySelector('.filter-btn.active');
            if (activeBtn !== btn) {
                activeBtn.classList.remove('active');
                btn.classList.add('active');
                
                // Adiciona feedback visual
                btn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    btn.style.transform = '';
                }, 100);
                
                filterAndSearch();
            }
        });
    });

    // --- Funcionalidade da Barra de Avaliação ---
    function generateRatings() {
        const ratings = document.querySelectorAll('.rating');

        ratings.forEach(rating => {
            // Limpa o conteúdo anterior
            rating.innerHTML = '';
            const initialRating = parseFloat(rating.dataset.rating || 0);

            for (let i = 1; i <= 5; i++) {
                const star = document.createElement('span');
                star.classList.add('star');
                star.innerHTML = '★';
                star.dataset.value = i;

                if (i <= Math.round(initialRating)) {
                    star.classList.add('selected');
                }

                rating.appendChild(star);
            }

            const stars = rating.querySelectorAll('.star');

            // Evento para quando o mouse sai da área de avaliação
            rating.addEventListener('mouseleave', () => {
                const currentRating = Math.round(parseFloat(rating.dataset.rating || 0));
                stars.forEach((star, index) => {
                    star.classList.toggle('selected', index < currentRating);
                });
            });

            stars.forEach(star => {
                // Evento para quando o mouse passa por cima de uma estrela
                star.addEventListener('mouseover', () => {
                    stars.forEach(s => s.classList.remove('selected')); // Limpa a seleção temporariamente
                    for (let i = 0; i < star.dataset.value; i++) {
                        stars[i].classList.add('selected');
                    }
                });

                // Evento de clique para definir a avaliação
                star.addEventListener('click', (e) => {
                    e.preventDefault(); // Impede a navegação ao clicar na estrela
                    e.stopPropagation(); // Impede que o evento se propague para o link do livro

                    const newRating = star.dataset.value;
                    rating.dataset.rating = newRating; // Atualiza o data-attribute com a nova nota

                    console.log(`Livro avaliado com ${newRating} estrelas!`); // Feedback no console
                });
            });
        });
    }

    // Filtra tudo ao carregar a página
    filterAndSearch();
});
