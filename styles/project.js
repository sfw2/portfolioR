// ПРОЕКТЫ

const gallery = document.querySelector('.gallery');
        const containers = gallery.querySelectorAll('.image-container');
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modal-image');
        const modalText = document.getElementById('modal-text');
        const closeModal = document.getElementById('close-modal');

        function rotateToLeft() {
            containers.forEach(container => {
                if (container.classList.contains('center')) {
                    container.classList.remove('center');
                    container.classList.add('right');
                } else if (container.classList.contains('left')) {
                    container.classList.remove('left');
                    container.classList.add('center');
                } else if (container.classList.contains('right')) {
                    container.classList.remove('right');
                    container.classList.add('left');
                }
                container.style.transition = 'transform 0.5s ease, z-index 0.5s ease';
            });
        }


        document.addEventListener('DOMContentLoaded', () => {
            const element = document.querySelector('.modal'); 
            let lastScrollPosition = window.scrollY;
        
            window.addEventListener('scroll', () => {
                const currentScrollPosition = window.scrollY;
        
                if (lastScrollPosition - currentScrollPosition >= 5) {
                    element.style.display = 'none';
                }
        
                lastScrollPosition = currentScrollPosition;
            });
        });



        function rotateToRight() {
            containers.forEach(container => {
                if (container.classList.contains('center')) {
                    container.classList.remove('center');
                    container.classList.add('left');
                } else if (container.classList.contains('right')) {
                    container.classList.remove('right');
                    container.classList.add('center');
                } else if (container.classList.contains('left')) {
                    container.classList.remove('left');
                    container.classList.add('right');
                }
                container.style.transition = 'transform 0.5s ease, z-index 0.5s ease';
            });
        }

        containers.forEach(container => {
            container.addEventListener('click', () => {
                if (container.classList.contains('left')) {
                    rotateToLeft();
                } else if (container.classList.contains('right')) {
                    rotateToRight();
                }
            });

            container.querySelector('.details').addEventListener('click', (e) => {
                e.stopPropagation();
                const img = container.querySelector('img');
                modalImage.src = img.src;
                modal.style.display = 'block';
            });
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });