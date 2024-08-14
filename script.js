document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const countWithSpaces = document.getElementById('countWithSpaces');
    const countWithoutSpaces = document.getElementById('countWithoutSpaces');

    textInput.addEventListener('input', function () {
        const text = textInput.value;
        countWithSpaces.textContent = text.length;
        countWithoutSpaces.textContent = text.replace(/\s/g, '').length;
    });
});
