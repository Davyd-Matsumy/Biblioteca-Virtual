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

    // Função para gerar os livros na página
    function renderBooks() {
        if (!bookList) return;
        bookList.innerHTML = ''; // Limpa a lista antes de adicionar os livros

        booksData.forEach(book => {
            const bookElement = document.createElement('a');
            bookElement.href = book.pdf;
            bookElement.target = '_blank';
            bookElement.className = 'book-item';
            bookElement.dataset.category = book.category;

            bookElement.innerHTML = `
                <img src="${book.image}" alt="Capa do livro ${book.title}">
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p>${book.author} (${book.year})</p>
                    <div class="rating" data-rating="${book.rating}">
                        <!-- Estrelas serão geradas aqui -->
                    </div>
                </div>
            `;
            bookList.appendChild(bookElement);
        });
    }

    renderBooks(); // Gera os livros

    // Agora que os livros foram criados, podemos selecioná-los
    let bookItems = document.querySelectorAll('.book-item');
    
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

            const matchesSearch = title.includes(term) || author.includes(term);
            const matchesFilter = activeFilter === 'all' || category === activeFilter;

            if (matchesSearch && matchesFilter) {
                showBook(book);
            } else {
                hideBook(book);
            }
        });
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
