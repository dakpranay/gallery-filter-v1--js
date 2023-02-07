(function(){
    let button=document.querySelectorAll('button');
    let image=document.querySelectorAll('img');
    console.log(image);

button.forEach((button)=>{
    button.addEventListener('click',function(){
        
      if(button.classList.contains('all')){
        for(let x of image){
            console.log(x)
            if(x.classList.contains('all')){
                x.style.display=''
            }
            else{
                x.style.display='none';
            }
        }
        
      }

      else if(button.classList.contains('bag')){
        for(let x of image){
            console.log(x)
            if(x.classList.contains('bag')){
                x.style.display=''
            }
            else{
                x.style.display='none';
            }
        }
       
      }
      else if(button.classList.contains('shoes')){
        for(let x of image){
            console.log(x)
            if(x.classList.contains('shoes')){
                x.style.display=''
            }
            else{
                x.style.display='none';
            }
        }
      }

      else if(button.classList.contains('watch'))for(let x of image){
        console.log(x)
        if(x.classList.contains('watch')){
            x.style.display=''
        }
        else{
            x.style.display='none';
        }
    }
        
    })

})
})()
