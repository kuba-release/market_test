fetch('../DefaultElements/header.html')
    .then(response => {
        return response.text();
    })
    .then(html => {
        document.body.insertAdjacentHTML('afterbegin', html);
        setTimeout(() => {
            const header = document.querySelector('.navbar');
            if (header) header.classList.add('loaded');
        }, 10);
    });