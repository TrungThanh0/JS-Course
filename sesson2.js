


let label01 = createLabel(1);
cover01.appendChild(label01);

function createImage(image){
    const image = document.createElement('img');
    image.scr = '';
    document.querySelector('.container').appendChild(image);
    
}
const link = document.getElementById('my-link')
link.addEventListener('click',event => {
    console.log(event.click);

})