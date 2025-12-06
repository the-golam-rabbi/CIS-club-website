// Get all filter buttons and event cards
const filterBtns = document.querySelectorAll('.filter-btn');
const eventCards = document.querySelectorAll('.past-event-card');

// Add click event to each filter button
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        // Get the filter value
        const filter = btn.getAttribute('data-filter');

        // Show/hide cards based on filter
        eventCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

