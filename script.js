let itemCount = 1; 
function addItemsToList(count) {
    const list = document.getElementById('infi-list');
    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${itemCount}`; 
        itemCount++; 
        list.appendChild(li); 
    }
}
addItemsToList(10); 
function checkScroll() {
    const list = document.getElementById('infi-list');
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        addItemsToList(2); 
    }
}
document.getElementById('infi-list').addEventListener('scroll', checkScroll);