// Initial Data
let orderData = JSON.parse(localStorage.getItem('gpj_orders')) || [
    { id: 1, client: "Acme Corp", service: "Web Dev", amount: "$1200", status: "Pending" },
    { id: 2, client: "Nebula UI", service: "Design", amount: "$800", status: "In Progress" }
];
