function addOrder() {
    const newOrder = {
        id: Date.now(),
        client: document.getElementById('cName').value,
        service: document.getElementById('sName').value,
        amount: "$" + document.getElementById('pAmount').value,
        status: document.getElementById('statusSelect').value
    };
    orderData.push(newOrder);
    localStorage.setItem('gpj_orders', JSON.stringify(orderData));
    render();
    toggleVisibility('order-form');
}

function updateStatus(index, newStatus) {
    orderData[index].status = newStatus;
    localStorage.setItem('gpj_orders', JSON.stringify(orderData));
    render();
}

function deleteOrder(index) {
    orderData.splice(index, 1);
    localStorage.setItem('gpj_orders', JSON.stringify(orderData));
    render();
}

function render() {
    document.getElementById('table-container').innerHTML = formatTable(orderData);
}

function showView(viewName) {
    document.getElementById('view-title').innerText = viewName.charAt(0).toUpperCase() + viewName.slice(1);
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    render();
}

document.addEventListener('DOMContentLoaded', render);
