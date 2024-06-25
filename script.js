    const headings = document.querySelectorAll('h2');
    console.log(headings)
    headings.forEach(function(heading) {
        heading.addEventListener('click', function() {
            let nextElement = heading.nextElementSibling;
            if (nextElement && nextElement.tagName.toLowerCase() === 'p') {
                if (nextElement.style.display === 'none') {
                    nextElement.style.display = 'block';
                } else {
                    nextElement.style.display = 'none';
                }
            }
        });
    });