## Project 3: A Simple Quiz with a Time Limit ⏳

What i'll build: A multiple-choice quiz with one question. The user has a limited time (e.g., 15 seconds) to answer.

Goals:

When the quiz starts, use setInterval to display a countdown timer on the screen (e.g., "Time remaining: 15").

Use setTimeout to automatically end the quiz after 15 seconds. The timeout function should check if the user has answered and declare "Time's Up!".

If the user answers before the time is up, you need to clear both the interval and the timeout to prevent them from running.

Display feedback whether the user was correct, incorrect, or ran out of time.