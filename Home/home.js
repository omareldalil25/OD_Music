var dropdownTimeout;

function toggleDropdown() {
    var dropdown = document.getElementById('userDropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

function closeDropdown() {
    dropdownTimeout = setTimeout(function () {
        var dropdown = document.getElementById('userDropdown');
        dropdown.style.display = 'none';
    }, 100000); // ضع تأخيرًا قابلًا للتعديل حسب الحاجة
}

function clearTimeout() {
    clearTimeout(dropdownTimeout);
}



