/*form submission*/
const form=document.getElementById("form");
const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const phoneInput=document.getElementById("phone");
const messageInput=document.getElementById("message");
function show(id){
    document.getElementById(id).classList.remove('hide');
}
function hide(id){
    document.getElementById(id).classList.add('hide');
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    show('sending-animation');

    const name=nameInput.value.trim();
    const email=emailInput.value.trim();
    const phone=phoneInput.value.trim();
    const message=messageInput.value.trim();
    const url="https://my-email-server.herokuapp.com/email";
    const data={
        name:name,
        email:email,
        phone:phone,
        message:message
    }
    fetch(url,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            mode: 'cors'
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
           hide('sending-animation');
           show('sent-msg');
           setTimeout(()=>hide('sent-msg'),3000);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
})
/*----------------scrolling nav link active--------------*/
const aboutlink=document.querySelector('a[href="#about"]');
const projectslink=document.querySelector('a[href="#projects"]');
const contactlink=document.querySelector('a[href="#contact"]');
window.onscroll = () => {

    const nav = document.querySelector('.nav');
    if(this.scrollY>=0 && this.scrollY <= 650) aboutlink.classList.add('white'); else aboutlink.classList.remove('white');
    if(this.scrollY>650 && this.scrollY <= 1500) projectslink.classList.add('white'); else projectslink.classList.remove('white');
    if(this.scrollY >1500) contactlink.classList.add('white'); else contactlink.classList.remove('white');
};
