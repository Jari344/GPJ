const formatTable = (data) => `
    <table>
        <thead><tr><th>Client</th><th>Service</th><th>Amount</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
            ${data.map((o, index) => `
                <tr>
                    <td>${o.client}</td>
                    <td>${o.service}</td>
                    <td>${o.amount}</td>
                    <td><span class="status-pill">${o.status}</span></td>
                    <td>
                        <button onclick="updateStatus(${index}, 'Completed')">Done</button>
                        <button onclick="deleteOrder(${index})">Delete</button>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    </table>
`;

const toggleVisibility = (id) => {
    const el = document.getElementById(id);
    el.style.display = (el.style.display === 'none') ? 'block' : 'none';
};
