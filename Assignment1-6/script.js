
        // JavaScript for FAQ toggle functionality
        document.addEventListener("DOMContentLoaded", function() {
            const faqItems = document.querySelectorAll('.FAQs div');

            faqItems.forEach(item => {
                item.addEventListener('click', () => {
                    // Toggle 'active' class on click
                    item.classList.toggle('active');
                });
            });
        });
