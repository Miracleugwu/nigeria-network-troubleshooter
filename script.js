document.addEventListener('DOMContentLoaded', () => {
    const statusOutput = document.getElementById('status');
    const checkBtn = document.getElementById('check-btn');

    if (checkBtn) {
        checkBtn.addEventListener('click', () => {
            const isOnline = navigator.onLine;
            if (isOnline) {
                statusOutput.textContent = 'Connection active. Checking network status...';
            } else {
                statusOutput.textContent = 'You are currently offline. Check your mobile data or Wi-Fi settings.';
            }
        });
    }
});
