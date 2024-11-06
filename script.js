const wrapper = document.querySelector('.wrapper');
const registerlink = document.querySelector('.registerlink');
const logInLink = document.querySelector('.login-link');

registerlink.onclick = () => {
    wrapper.classList.add('active');
}

logInLink.onclick = () => {
    wrapper.classList.remove('active');
}