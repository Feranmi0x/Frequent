const accordion = document.getElementsByClassName('content-container');

for ( let i = 0; i < accordion.length; i++ ) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
 
};


document.querySelector(".tryme").addEventListener('click', function () {
    alert('hurray youve made it to Feranmi 4th working webpage');
});