let models = [

    {
        name  : 'Bmw 116d',
        image : 'image/bmw.jpg',
        link  : 'https://twitter.com/l3ekirerdem'
    },
    {
        name  : 'Mazda CX-3',
        image : 'image/mazda.jpg',
        link  : 'https://twitter.com/l3ekirerdem'
    },
    {
        name  : 'Volvo S-60',
        image : 'image/volvo.jpg',
        link  : 'https://twitter.com/l3ekirerdem'
    },
    {
        name  : 'Skoda Superb',
        image : 'image/skoda.jpg',
        link  : 'https://twitter.com/l3ekirerdem'
    },
    {
        name  : 'Honda Civic',
        image : 'image/honda.jpg',
        link  : 'https://twitter.com/l3ekirerdem'
    }

];

let index = 0;
let slaytCount = models.length;
let interval;

let settings={
    duration : '2000',
    random : false
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener
('click',function () {
    
    index--;
    showSlide(index);
    console.log(index); 


});

document.querySelector('.fa-arrow-circle-right').addEventListener
('click',function () {
    
    index++;
    showSlide(index);
    console.log(index);

}); 

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
});

function init(settings) {

    let prev;
    interval=setInterval(function(){

        if (settings.random){

            // Random index
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;

        }else {

            // Artan index
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;

        }
        
    },settings.duration)

}

function showSlide(i) {

    index = i;

    if(i<0) {
        index = slaytCount - 1;
    }
    if(i >= slaytCount) {
        index =0;
    }
    
    document.querySelector('.card-title').textContent = models[index].name;
    
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);

}