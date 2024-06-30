document.getElementById('apply-btn').addEventListener('click', updateData);
document.getElementById('clear-btn').addEventListener('click', clearData);

const statusChartCtx = document.getElementById('status-chart').getContext('2d');
const statusChart = new Chart(statusChartCtx, {
    type: 'doughnut',
    data: {
        labels: ['Running', 'Scheduled', 'Success', 'Error'],
        datasets: [{
            data: [3299, 32, 456, 3],
            backgroundColor: ['blue', 'orange', 'green', 'red'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});

function updateData() {
    const filterValue = document.getElementById('filter-dropdown').value;
    let emailsCount, smsCount, printCount, statusData, batches, filterText;

    if (filterValue === 'last7days') {
        filterText = 'Last 7 days';
        emailsCount = 30;
        smsCount = 1243;
        printCount = 6457;
        statusData = {
            running: 3299,
            scheduled: 32,
            success: 456,
            error: 3,
            total: 45034
        };
        batches = [
            { name: 'Alpha_Genesis', id: '37291856', status: 'PROCESSING', processed: 103, total: 9500 },
            { name: 'Prime_Apex', id: '48562739', status: 'FINISHED', processed: 485, total: 9340 },
            { name: 'Genesis_Zenith', id: '92743108', status: 'PROCESSING', processed: 372, total: 6800 },
            { name: 'Apex_Stellar', id: '56829314', status: 'FINISHED', processed: 514, total: 4340 },
            { name: 'Summit_Vanguard', id: '75913285', status: 'PROCESSING', processed: 13, total: 9502 },
            { name: 'Vanguard_Quantum', id: '19457682', status: 'FINISHED', processed: 123, total: 3247 },
            { name: 'Zenith_Infinity', id: '67245390', status: 'FINISHED', processed: 421, total: 1340 },
            { name: 'Stellar_Alpha', id: '10384672', status: 'FINISHED', processed: 234, total: 9340 },
            { name: 'Quantum_Prime', id: '83560721', status: 'FINISHED', processed: 453, total: 1250 }
        ];
    } else if (filterValue === 'last30days') {
        filterText = 'Last 30 days';
        emailsCount = 100;
        smsCount = 5000;
        printCount = 20000;
        statusData = {
            running: 8000,
            scheduled: 100,
            success: 2000,
            error: 50,
            total: 150000
        };
        batches = [
            { name: 'Alpha_Genesis', id: '37291856', status: 'PROCESSING', processed: 500, total: 20000 },
            { name: 'Prime_Apex', id: '48562739', status: 'FINISHED', processed: 1000, total: 20000 },
            { name: 'Genesis_Zenith', id: '92743108', status: 'PROCESSING', processed: 800, total: 18000 },
            { name: 'Apex_Stellar', id: '56829314', status: 'FINISHED', processed: 1500, total: 16000 },
            { name: 'Summit_Vanguard', id: '75913285', status: 'PROCESSING', processed: 100, total: 20000 },
            { name: 'Vanguard_Quantum', id: '19457682', status: 'FINISHED', processed: 400, total: 8000 },
            { name: 'Zenith_Infinity', id: '67245390', status: 'FINISHED', processed: 1600, total: 6000 },
            { name: 'Stellar_Alpha', id: '10384672', status: 'FINISHED', processed: 1000, total: 20000 },
            { name: 'Quantum_Prime', id: '83560721', status: 'FINISHED', processed: 1500, total: 8000 }
        ];
    } else if (filterValue === 'lastYear') {
        filterText = 'Last Year';
        emailsCount = 1000;
        smsCount = 50000;
        printCount = 200000;
        statusData = {
            running: 90000,
            scheduled: 3000,
            success: 50000,
            error: 200,
            total: 500000
        };
        batches = [
            { name: 'Alpha_Genesis', id: '37291856', status: 'PROCESSING', processed: 10000, total: 200000 },
            { name: 'Prime_Apex', id: '48562739', status: 'FINISHED', processed: 20000, total: 200000 },
            { name: 'Genesis_Zenith', id: '92743108', status: 'PROCESSING', processed: 18000, total: 180000 },
            { name: 'Apex_Stellar', id: '56829314', status: 'FINISHED', processed: 15000, total: 160000 },
            { name: 'Summit_Vanguard', id: '75913285', status: 'PROCESSING', processed: 20000, total: 200000 },
            { name: 'Vanguard_Quantum', id: '19457682', status: 'FINISHED', processed: 8000, total: 80000 },
            { name: 'Zenith_Infinity', id: '67245390', status: 'FINISHED', processed: 16000, total: 60000 },
            { name: 'Stellar_Alpha', id: '10384672', status: 'FINISHED', processed: 20000, total: 200000 },
            { name: 'Quantum_Prime', id: '83560721', status: 'FINISHED', processed: 8000, total: 80000 }
        ];
    } else if (filterValue === 'allTime') {
        filterText = 'All Time';
        emailsCount = 5000;
        smsCount = 200000;
        printCount = 1000000;
        statusData = {
            running: 400000,
            scheduled: 15000,
            success: 250000,
            error: 5000,
            total: 5000000
        };
        batches = [
            { name: 'Alpha_Genesis', id: '37291856', status: 'PROCESSING', processed: 50000, total: 2000000 },
            { name: 'Prime_Apex', id: '48562739', status: 'FINISHED', processed: 100000, total: 2000000 },
            { name: 'Genesis_Zenith', id: '92743108', status: 'PROCESSING', processed: 90000, total: 1800000 },
            { name: 'Apex_Stellar', id: '56829314', status: 'FINISHED', processed: 80000, total: 1600000 },
            { name: 'Summit_Vanguard', id: '75913285', status: 'PROCESSING', processed: 200000, total: 2000000 },
            { name: 'Vanguard_Quantum', id: '19457682', status: 'FINISHED', processed: 40000, total: 800000 },
            { name: 'Zenith_Infinity', id: '67245390', status: 'FINISHED', processed: 160000, total: 600000 },
            { name: 'Stellar_Alpha', id: '10384672', status: 'FINISHED', processed: 100000, total: 2000000 },
            { name: 'Quantum_Prime', id: '83560721', status: 'FINISHED', processed: 80000, total: 800000 }
        ];
    } else {
        return;
    }

    document.getElementById('emails-count').innerText = emailsCount;
    document.getElementById('sms-count').innerText = smsCount;
    document.getElementById('print-count').innerText = printCount;

    const statusChart = Chart.getChart('status-chart');
    if (statusChart) {
        statusChart.options.plugins.legend.display = false;
        statusChart.data.datasets[0].data = [statusData.running, statusData.scheduled, statusData.success, statusData.error];
        statusChart.update();
    }

    document.getElementById('status-running').innerText = `${statusData.running} (${Math.round((statusData.running / statusData.total) * 100)}%)`;
    document.getElementById('status-scheduled').innerText = `${statusData.scheduled} (${Math.round((statusData.scheduled / statusData.total) * 100)}%)`;
    document.getElementById('status-success').innerText = `${statusData.success} (${Math.round((statusData.success / statusData.total) * 100)}%)`;
    document.getElementById('status-error').innerText = `${statusData.error} (${Math.round((statusData.error / statusData.total) * 100)}%)`;

    const tableBody = document.getElementById('batch-table-body');
    tableBody.innerHTML = ''; 

    batches.forEach(batch => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${batch.name} <span class="copy-icon" title="Copy"></span></td>
            <td>${batch.id} <span class="copy-icon" title="Copy"></span></td>
            <td class="status ${batch.status.toLowerCase()}">${batch.status}</td>
            <td>${batch.processed}</td>
            <td>${batch.total}</td>
        `;
        tableBody.appendChild(row);
    });
}


function clearData() {
    document.getElementById('filter-dropdown').selectedIndex = 0;
    updateData();
}

document.addEventListener('DOMContentLoaded', () => {
    const applyButton = document.querySelector('.controls button.apply');

    if (applyButton) {
        applyButton.addEventListener('click', () => {
            applyButton.classList.toggle('active');
        });
    }
});
