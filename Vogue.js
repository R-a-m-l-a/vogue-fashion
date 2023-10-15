const throttleFunction=(func, delay)=>{
    let prev = 0;
    return (...args) => {
      let now = new Date().getTime();
      if(now - prev> delay){
        prev = now;
        return func(...args); 
      }
    }
  }


  document.querySelector("#center").addEventListener("mousemove", throttleFunction((axis)=>{
    //your less repeatition code
   var div= document.createElement("div"); //create a div inside big div
   div.classList.add('imagediv'); //give that div class imagediv
   div.style.left=axis.clientX+"px"; //to move that div along x axis
   div.style.top=axis.clientY+"px"; 
   var img=document.createElement("img"); //create image
   img.setAttribute("src","https://images.unsplash.com/photo-1622220835869-5e3e9bc89136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"); //create src
   div.appendChild(img); //add image in that div
   gsap.to(img,
      {
          y:"0",
          duration:.6,
          ease:Power1,

      })
      gsap.to(img,
          {
              y:"100%",
              delay:.6, 
              ease:Power2,
  
          })
  

   document.body.appendChild(div); //add that div inside body of html file
   
   setTimeout(function()
   {
      div.remove(); //to make that div dissapear after 1 s
   },1000);

  }, 250));