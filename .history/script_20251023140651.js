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
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const filterButtons = document.querySelectorAll('.filter-btn');    
    const bookList = document.querySelector('.book-list');
    const paginationControls = document.getElementById('pagination-controls');

    // Estado da Paginação
    let currentPage = 1;
    const booksPerPage = 20;
    let currentFilteredBooks = [...booksData];

    // Função para gerar os livros na página
    function renderBooks() {
    function renderBooks(booksToRender, page = 1) {
        if (!bookList) return;
        bookList.innerHTML = ''; // Limpa a lista antes de adicionar os livros

        booksData.forEach(book => {
        const start = (page - 1) * booksPerPage;
        const end = start + booksPerPage;
        const paginatedBooks = booksToRender.slice(start, end);

        paginatedBooks.forEach(book => {
            const bookElement = document.createElement('a');
            bookElement.href = book.pdf;
            bookElement.target = '_blank';
            bookElement.className = 'book-item';
            bookElement.dataset.category = book.category;

            // Cria a imagem com um fallback para o caso de não ser encontrada
            const img = document.createElement('img');
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
    }

    renderBooks(); // Gera os livros
    // Função para configurar a paginação
    function setupPagination(totalBooks) {
        if (!paginationControls) return;
        paginationControls.innerHTML = '';
        const pageCount = Math.ceil(totalBooks / booksPerPage);

        if (pageCount <= 1) return; // Não mostra controles se só houver uma página

        const prevButton = document.createElement('button');
        prevButton.textContent = 'Anterior';
        prevButton.className = 'pagination-btn';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderBooks(currentFilteredBooks, currentPage);
                setupPagination(totalBooks);
            }
        });

        const pageInfo = document.createElement('span');
        pageInfo.id = 'page-info';
        pageInfo.textContent = `Página ${currentPage} de ${pageCount}`;

        const nextButton = document.createElement('button');
        nextButton.textContent = 'Próximo';
        nextButton.className = 'pagination-btn';
        nextButton.disabled = currentPage === pageCount;
        nextButton.addEventListener('click', () => {
            if (currentPage < pageCount) {
                currentPage++;
                renderBooks(currentFilteredBooks, currentPage);
                setupPagination(totalBooks);
            }
        });

        paginationControls.append(prevButton, pageInfo, nextButton);
    }

    // Agora que os livros foram criados, podemos selecioná-los
    let bookItems = document.querySelectorAll('.book-item');
    // let bookItems = document.querySelectorAll('.book-item'); // Não é mais necessário aqui
    
    // Função para mostrar livro com animação suave
    function showBook(book) {
        book.style.display = 'flex';
        requestAnimationFrame(() => {
            book.classList.remove('hidden');
        });
    }

    // Função para esconder livro com animação suave
    function hideBook(book) {
        book.classList.add('hidden');
        setTimeout(() => {
            if (book.classList.contains('hidden')) {
                book.style.display = 'none';
            }
        }, 300);
    }

    // Função principal de filtro + pesquisa
    function filterAndSearch() {
        const term = searchBar.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

        document.querySelectorAll('.book-item').forEach(book => {
            const title = book.querySelector('h3').textContent.toLowerCase();
            const author = book.querySelector('p').textContent.toLowerCase();
            const category = book.dataset.category;

        currentFilteredBooks = booksData.filter(book => {
            const title = book.title.toLowerCase();
            const author = book.author.toLowerCase();
            const category = book.category;
            
            const matchesSearch = title.includes(term) || author.includes(term);
            const matchesFilter = activeFilter === 'all' || category === activeFilter;

            if (matchesSearch && matchesFilter) {
                showBook(book);
            } else {
                hideBook(book);
            }
            return matchesSearch && matchesFilter;
        });

        currentPage = 1; // Reseta para a primeira página a cada novo filtro/busca
        renderBooks(currentFilteredBooks, currentPage);
        setupPagination(currentFilteredBooks.length);
        generateRatings(); // Re-aplica as estrelas para os livros visíveis
    }

    // Debounce para melhor performance
    let searchTimeout;
    searchBar.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(filterAndSearch, 150);
    });

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

    // Adiciona efeito de hover nos livros
    bookItems.forEach(book => {
        book.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        book.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
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

    generateRatings(); // Executa a função ao carregar a página

    // Filtra tudo ao carregar a página
    filterAndSearch();
});
