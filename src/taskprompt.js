

export default function toggle(){
    const blur = document.getElementById('blur');
    blur.classList.toggle('active')
    const container = document.getElementById('taskform')
    container.classList.toggle('invisible')
    const cancel = document.getElementById('cancel')
    cancel.addEventListener('click', toggle)
}