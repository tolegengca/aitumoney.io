// Highlight the active link in the navigation
$(document).ready(function () {
    var currentLocation = window.location.href;
    $('.navbar-nav a').each(function () {
        var link = $(this).attr('href');
        if (currentLocation.includes(link)) {
            $(this).closest('.nav-item').addClass('active');
        }
    });
});

// Example data for the line chart
const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
        label: 'Dataset 1',
        data: [10, 20, 15, 25, 30],
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
        fill: false,
    }]
};

// Example data for the pie chart
const pieChartData = {
    labels: ['Category 1', 'Category 2', 'Category 3'],
    datasets: [{
        data: [30, 45, 25],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(255, 205, 86)'],
    }]
};

// Example data for the bar chart
const barChartData = {
    labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
    datasets: [{
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
    }]
};

// Example data for the radar chart
const radarChartData = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    datasets: [{
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
    }]
};

// Create line chart
const lineChartCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineChartCtx, {
    type: 'line',
    data: lineChartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    },
});

// Create pie chart
const pieChartCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieChartCtx, {
    type: 'pie',
    data: pieChartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    },
});

// Create bar chart
const barChartCtx = document.getElementById('barChart').getContext('2d');
new Chart(barChartCtx, {
    type: 'bar',
    data: barChartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    },
});

// Create radar chart
const radarChartCtx = document.getElementById('radarChart').getContext('2d');
new Chart(radarChartCtx, {
    type: 'radar',
    data: radarChartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    },
});
