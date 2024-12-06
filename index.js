
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [key, value] = cookie.trim().split('=');
        if (key === name) {
            return value;
        }
    }
    return null;
}
function showCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (!getCookie('cookieConsent')) {
        banner.style.display = 'block';
    }
}

function handleCookieConsent(consent) {
    setCookie('cookieConsent', consent, 365); // Sla keuze op voor 1 jaar
    const banner = document.getElementById('cookie-banner');
    banner.style.display = 'none';
}
document.getElementById('accept-cookies').addEventListener('click', () => {
    handleCookieConsent('accepted');
});

document.getElementById('reject-cookies').addEventListener('click', () => {
    handleCookieConsent('rejected');
});
document.addEventListener('DOMContentLoaded', showCookieBanner);
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
}
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        toggleButton.textContent = '☀️';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        toggleButton.textContent = '🌙';
    }
});
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.link');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
function showGreeting() {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    let greetingMessage = "Hallo";

    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = "Goedemorgen!";
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = "Goedemiddag!";
    } else if (currentHour >= 18 && currentHour < 22) {
        greetingMessage = "Goedenavond!";
    } else {
        greetingMessage = "Goedenacht!";
    }

    greetingElement.textContent = greetingMessage;
}
document.addEventListener('DOMContentLoaded', showGreeting);

