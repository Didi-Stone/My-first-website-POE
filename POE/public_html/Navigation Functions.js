

var navlink = document.getElementById("navlink");
            
        function openMenu(){
            navlink.style.right = "0";
        }
        function exitMenu(){
            navlink.style.right = "-200px";
        }

const nav = document.querySelector('nav');
const header = document.querySelector('header');
          
        const options = {
            rootMargin: '-230px'
          };
          
const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                nav.classList.remove('changeColor');
            }
            else{
                nav.classList.add('changeColor');
            }
        });
        }, options);
        observer.observe(header);
