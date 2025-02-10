// СЕТКА

document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector('.grid-container');

    function createGrid() {
        gridContainer.innerHTML = ''; 

        const cellSize = 20;
        const cols = Math.floor(window.innerWidth / cellSize) - 1; 
        const rows = Math.ceil(window.innerHeight / cellSize); 

        for (let x = 0; x < cols; x++) {
            for (let y = 0; y < rows; y++) {
                const gridCell = document.createElement('div');
                gridCell.className = 'grid';
                gridCell.style.left = `${x * cellSize}px`;
                gridCell.style.top = `${y * cellSize}px`;
                gridContainer.appendChild(gridCell);
            }
        }
    }

    createGrid(); 

    window.addEventListener('resize', createGrid);

    document.addEventListener('mousemove', (event) => {
        const gridCells = document.querySelectorAll('.grid');
        gridCells.forEach(cell => {
            const rect = cell.getBoundingClientRect();
            if (
                event.clientX >= rect.left - 25 &&
                event.clientX <= rect.right + 25 &&
                event.clientY >= rect.top - 25 &&
                event.clientY <= rect.bottom + 25
            ) {
                cell.classList.add('active');
                setTimeout(() => {
                    cell.classList.remove('active');
                }, 700);
            }
        });
    });
});