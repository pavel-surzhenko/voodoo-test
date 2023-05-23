export function showInfo() {
    const arrowBtn = document.getElementById('arrowBtn')

    arrowBtn?.addEventListener('click', () => {
        const hiddenInfo = document.getElementById('hiddenInfo')
        hiddenInfo?.classList.toggle('hidden')
        arrowBtn.classList.toggle('rotate-180')
    })
}