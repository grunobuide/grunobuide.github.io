const toggleVisibility = function(divID) {
    if (divID.style.display === 'none' || divID.style.display === '') {
        divID.style.display = 'block';
    } else {
        divID.style.display = 'none';
    }
}
    
const nextElement = function (elem) {
    do {
        elem = elem.nextSibling;
    } while (elem && elem.nodeType !== 1);
    return elem;        
}

document.querySelectorAll('h2').forEach((heading) => {
    heading.addEventListener('click', function() {
        const divToToggle = nextElement(heading);
        if (divToToggle && divToToggle.tagName.toLowerCase() === 'div') {
            toggleVisibility(divToToggle);
        }
    });
});
