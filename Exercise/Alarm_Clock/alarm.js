let alarmTimeout;

const setAlarm = () => {
    let alarmTime = document.getElementById('alarmTime').value;
    let alarmHour = parseInt(alarmTime.split(':')[0]);
    let alarmMin = parseInt(alarmTime.split(':')[1]);

    let date = new Date();
    let currentMin = date.getMinutes();
    let currentHour = date.getHours();

    let timeDiff = (alarmHour - currentHour) * 60 + (alarmMin - currentMin);
    if (timeDiff < 0) {
        timeDiff += 24 * 60; // Adds 24 hrs if the alarm is set for the next day
    }

    alarmTimeout = setTimeout(() => {
        let alarmSound = document.getElementById('alarmSound');
        
        // Play the alarm sound when time reaches
        alarmSound.play().catch(error => console.error('Error playing sound:', error));
        
        console.log(`Alarm! ${alarmTime}`);
        
        // Prompt the user for snooze or dismiss option
        let snoozeOrDismiss = confirm(`Alarm!\nTo Snooze : Press OK\nTo Dismiss : Press Cancel`);
        
        if (snoozeOrDismiss) {
            // Snooze the alarm for 5 minutes
            setTimeout(() => {
                alarmSound.play().catch(error => console.error('Error playing snoozed sound:', error));
                alert('Snoozed for 5 minutes');
            }, 300000); // 5 minutes in milliseconds
        } else {
            stopAlarm(); // Stop the alarm sound
        }

    }, timeDiff * 60000); // Converts minutes to milliseconds for the delay

    alert(`Alarm is set for: ${alarmTime}`);
};

const stopAlarm = () => {
    let alarmSound = document.getElementById('alarmSound');
    
    // Stop and reset the alarm sound
    alarmSound.pause();
    alarmSound.currentTime = 0; // Resets the playback position to the beginning
    
    clearTimeout(alarmTimeout); // Clear the timeout if the alarm is stopped
};
