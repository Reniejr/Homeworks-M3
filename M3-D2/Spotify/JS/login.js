const loginBtn = document.getElementById('login-btn')
const client_id = '6cee7a5f42ec413c8af5c31b8038445e';
const secret = '4f9d04fc510e49c5b228e904da1adfd1'
const redirect_uri = `http%3A%2F%2F127.0.0.1%3A5500%2Fcallback.html`

const authentication = () => {
    const scopes = 'user-read-private user-read-email user-top-read'
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=${scopes}&state=34fFs29kd09&show_dialog=true`
}

window.onload = ()=>{
    loginBtn.addEventListener('click', authentication)
}