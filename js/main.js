let pList = document.querySelector('#portfolio a img');


let pImage = document.querySelector('.project1-img img');

pImage.addEventListener("mouseover", () => {
    document.querySelector('.portfolio-img img').style.display = 'none';
})

pImage.addEventListener("mouseout", ()=>{
    document.querySelector('.portfolio-img img').style.display = 'block';    
})


