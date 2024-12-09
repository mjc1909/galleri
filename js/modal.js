let modal = document.querySelector('#modal')
let btnClose = document.querySelector('.close');
let img = document.querySelectorAll('.img')
let imgInModal = document.querySelector('#modal-img')

// Når der klikkes på et billede, bliver billedets src føjet til <img> i modal'en. Modal bliver display block i stedet for display none
img.forEach(element => {
    element.addEventListener('click', (e) => {
        let imgSrc = e.target.getAttribute('src');
        console.log(imgSrc);
        imgInModal.setAttribute('src', imgSrc)
        modal.style.display = 'block';

    })
})

function closeModal(){
    modal.style.display = 'none';
}

btnClose.addEventListener('click', closeModal)

function windowCloseModal(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

window.addEventListener('click', windowCloseModal)



let btn = document.querySelector('.btn')

function reloadPage(){
    location.reload();
}

btn.addEventListener('click', reloadPage)