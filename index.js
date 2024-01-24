//This fulfils requirement 5.1(g)
        document.addEventListener("DOMContentLoaded", function () {
            // last modified time of page
            var lastUpdated = new Date(document.lastModified);

            // Format the date 
            var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
            var formattedDate = lastUpdated.toLocaleDateString('en-US', options);

            // Display the last updated in the footer
            document.getElementById("lastUpdated").innerHTML = "Last Updated: " + formattedDate;
        });
        //This fulfils requirement 5.6(a)
        document.addEventListener("DOMContentLoaded", function () {
        // target date for the countdown (December 31 of the current year)
        var targetDate = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59);

        // Update the countdown every second
        var countdownInterval = setInterval(updateCountdown, 1000);

        // Function to update the countdown
        function updateCountdown() {
            // Get current date and time
            var currentDate = new Date();

            // time difference between the current date and the new year
            var timeDifference = targetDate - currentDate;

            // Check if the target date has passed
            if (timeDifference < 0) {
                clearInterval(countdownInterval);
                document.getElementById("countdown").innerHTML = "Happy New Year!";
            } else {
                // Calculate days, hours, minutes, and seconds
                var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                // Display 
                document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
            }
        }

        // Initial call to update the countdown when the page loads
        updateCountdown();
    });
   
  