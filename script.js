var threeDot = document.querySelector("#threeDot");
var box = document.querySelector(".box");
var mainPage = document.querySelector("#logo");
var video = document.querySelector("#videoSection > video ");
var tl = gsap.timeline();

if (true) {

  threeDot.addEventListener("click", ()=>{
    box.style.display = "flex";
      tl.from(".box", {
        x: 1000,
        duration: 0.3,
        delay: 0.1,
        yoyo: true,
      });
      tl.from("nav > h1", {
        scale: 0.4,
        opacity: 0,
        duration: 0.3,
        stagger: 0.2,
        delay: 0.1,
        yoyo: true,
      });
  });

  mainPage.addEventListener("click",()=> {
    box.style.display = "none";
  })
  setTimeout(()=>{
    video.addEventListener("play",(e)=>{
      console.info('playing');
    })
  },2000);
  
        // video.style. = "flex";
      //   tl.from(".box", {
      //     x: 1000,
      //     duration: 0.3,
      //     delay: 0.1,
      //     yoyo: true,
      //   });
  
      //   tl.from("nav > h1", {
      //     scale: 0.4,
      //     opacity: 0,
      //     duration: 0.3,
      //     stagger: 0.2,
      //     delay: 0.1,
      //     yoyo: true,
      //   });
      // });
  // threeDot.addEventListener("mouseenter", () => {
  //     box.style.display = "flex";
  //     tl.from(".box", {
  //       x: 1000,
  //       duration: 0.3,
  //       delay: 0.1,
  //       yoyo: true,
  //     });

  //     tl.from("nav > h1", {
  //       scale: 0.4,
  //       opacity: 0,
  //       duration: 0.3,
  //       stagger: 0.2,
  //       delay: 0.1,
  //       yoyo: true,
  //     });
  //     threeDot.addEventListener("mouseleave", () => {
  //       box.style.display = "none";
  //     });
    
  //     box.addEventListener("mouseleave", () => {
  //       box.style.display = "none";
  //     });
    
  // });

  // box.addEventListener("mouseenter", () => {
  //   box.style.display = "flex";
  // });

}