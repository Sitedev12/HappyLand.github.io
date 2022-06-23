clickboardInput.onclick = () => {
    navigator.clipboard.writeText('happyland.20tps.ru')
    successMessage.classList.add('active')
    setTimeout(() => successMessage.classList.remove('active'), 2000)
}
