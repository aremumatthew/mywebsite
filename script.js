function showSideBar(){
  const sidebar = document.querySelector('.sidebar');
sidebar.style.display = 'flex';
const menuBtn = document.querySelector('.menu-btn');
 menuBtn.style.display = 'none';
}

 function hideSideBar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = "none";
  const menuBtn = document.querySelector('.menu-btn');
  menuBtn.style.display = 'flex';
 }
  function hideReaction(){
    const reaction = document.querySelector('.reaction-div');
    reaction.style.display = 'flex';
    const showbtn = document.querySelector('.expand-div');
    showbtn.style.display = 'none';
    const clear = document.querySelector('.expand-div2');
    clear.style.display = 'flex';


  }

  function showHappyFace(){
    const happyFace = document.querySelector('.satisfy-box');
     happyFace.style.display = 'block';
     const reaction = document.querySelector('.reaction-div');
       reaction.style.display = 'none';
       const clear = document.querySelector('.expand-div2');
       clear.style.display = 'flex';
  }
  function showSadFace(){
    const sadFace = document.querySelector('.unsatisfy-box');
     sadFace.style.display = 'block';
     const reaction = document.querySelector('.reaction-div');
       reaction.style.display = 'none';
       const clear = document.querySelector('.expand-div2');
       clear.style.display = 'flex';
  }
   function HideAll(){
    const reaction = document.querySelector('.reaction-div');
    reaction.style.display = 'none';
    const sadFace = document.querySelector('.unsatisfy-box');
     sadFace.style.display = 'none';
     const happyFace = document.querySelector('.satisfy-box');
      happyFace.style.display = 'none';
      const showbtn = document.querySelector('.expand-div');
      showbtn.style.display = 'flex';
      const clear = document.querySelector('.expand-div2');
      clear.style.display = 'none';
   }