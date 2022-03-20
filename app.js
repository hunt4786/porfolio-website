const sections = document.querySelectorAll('.section');
const sect_buttons = document.querySelectorAll('.controls');
const sect_button = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function page_transition() {
    //button click active class
    for(let i = 0; i < sect_button.length; i++) {
            // do not use arrow function if you want to use "this" keyword
        sect_button[i].addEventListener('click', function() {
            let current_button = document.querySelectorAll('.active-btn');
            current_button[0].className = current_button[0].className.replace('active-btn', '');
            // this is referring to the function page-transition
            this.className += ' active-btn';
        })
    }

    //Sections Active
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id; 
        if(id) {
            //remove selected from the other buttons
            sect_buttons.forEach((button) =>{
                button.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach(section=>{
                section.classList.remove('active')
            })
            //wtv id is coming from the dataset will be inside element var
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

page_transition();

 