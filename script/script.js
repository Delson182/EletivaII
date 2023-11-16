let currentTip = 1;

function showTip(tipNumber) {
    document.querySelectorAll('.tip').forEach(tip => {
        tip.style.display = 'none';
    });

    document.getElementById(`tip${tipNumber}`).style.display = 'block';
}

function nextTip() {
    if (currentTip < totalTips) {
        currentTip++;
        showTip(currentTip);
    }
}

function previousTip() {
    if (currentTip > 1) {
        currentTip--;
        showTip(currentTip);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    showTip(currentTip);
});

const totalTips = document.querySelectorAll('.tip').length;
