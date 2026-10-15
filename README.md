# Task 2: Phishing Awareness Training

**CodeAlpha Cyber Security Internship — Task 2**

A responsive, three-page phishing awareness website that teaches users how to recognize suspicious messages, verify requests safely, and respond if they suspect phishing. The site is built with HTML, CSS, and JavaScript and runs locally in a browser.

## Pages

1. **Overview (`index.html`)** — introduces phishing, the learning objectives, and the “Stop, Check, Confirm” rule.
2. **Recognize Phishing (`recognize.html`)** — explains six warning signs, shows a clearly labeled fictional email, and provides a safe-response checklist.
3. **Knowledge Check (`quiz.html`)** — contains five multiple-choice questions, browser-side scoring, and explanations.

## Features

- Three linked pages with consistent navigation.
- Responsive layout for desktop and mobile screens.
- Examples of urgency, suspicious links, sender mismatches, unexpected attachments, requests for credentials, and unusual payment requests.
- Interactive quiz with a score out of five and answer explanations.
- Print-friendly CSS for producing a paper/PDF copy.
- No backend, account, or installation required.
- Quiz answers are checked in the browser and are not sent to a server.

## Project Structure

```text
task2_phishing_awareness/
├── README.md
├── index.html
├── recognize.html
├── quiz.html
├── style.css
└── quiz.js
```

## How to Run

### Option 1: Open directly

1. Download or clone this repository.
2. Open the `task2_phishing_awareness` folder.
3. Double-click `index.html` to open it in Chrome, Edge, Firefox, or another modern browser.
4. Use the navigation at the top to visit **Recognize Phishing** and **Knowledge Check**.
5. Complete the five-question quiz and check the feedback.

All pages work as local files. An internet connection is not required for the core functionality. The stylesheet requests optional Google Fonts; if unavailable, the page falls back to system fonts.

### Option 2: Run with a local server

If you have Python installed, open a terminal in the `task2_phishing_awareness` folder and run:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

Stop the server with `Ctrl+C`.

## How to Test

- Confirm all three navigation links work.
- Open `recognize.html` and review the warning signs and fictional email.
- In `quiz.html`, select one answer for each question and submit.
- Confirm the result shows a score out of five and explanations.
- Select **Try again** to reset the quiz.
- Resize the browser to check the responsive layout.

## Learning Outcomes

This project demonstrates awareness of:

- Phishing and social engineering
- Suspicious links, sender addresses, attachments, and urgent requests
- Independent verification and reporting
- Safer response after credentials may have been exposed
- Basic HTML structure, CSS layout, responsive design, and JavaScript form handling

## Safety and Privacy

- The sample message is fictional and uses the reserved `.invalid` domain.
- The website does not send phishing emails, open suspicious links, or collect credentials.
- Quiz responses are processed locally in the browser and are not transmitted or stored.
- This is an educational awareness module, not a phishing-detection product.

## Author

Created as a learning project for the CodeAlpha Cyber Security internship task.
