# 🛡️ AI Cyber Guardian

AI Cyber Guardian is a cybersecurity web application that helps users identify unsafe websites before they become a threat. It allows users to scan URLs, view threat reports, monitor browsing activity through a Chrome Extension, and analyze cybersecurity data using an interactive dashboard.

The project was developed to provide a simple platform for learning and demonstrating practical web security concepts using modern web technologies.

---

## Features

* Scan website URLs for malicious activity
* Detect phishing and suspicious websites
* View threat level (Safe, Suspicious, Dangerous, Critical)
* Chrome Extension for one-click website scanning
* Dashboard with scan history and analytics
* Cyber Risk Score calculation
* AI-based security recommendations
* User authentication (Register & Login)
* Store scan history in MongoDB
* Live threat monitoring

---

## Technologies Used

### Frontend

* React.js
* JavaScript
* HTML
* CSS
* Axios
* Recharts

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### APIs

* VirusTotal API

### Browser Extension

* Chrome Extension (Manifest V3)

---

## Folder Structure

```
AI-Cyber-Guardian
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── routes
│   ├── models
│   ├── config
│   ├── middleware
│   ├── server.js
│   └── package.json
│
├── extension
│   ├── manifest.json
│   ├── background.js
│   ├── popup.html
│   └── popup.js
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/AI-Cyber-Guardian.git
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

VIRUSTOTAL_API_KEY=your_virustotal_api_key
```

---

## Chrome Extension Setup

1. Open Chrome.
2. Go to `chrome://extensions/`.
3. Enable **Developer Mode**.
4. Click **Load unpacked**.
5. Select the `extension` folder.

The extension can now scan the currently opened website and display the threat result.

---

## How It Works

1. User enters a website URL or scans it using the Chrome Extension.
2. The backend sends the URL to the VirusTotal API.
3. The scan result is analyzed and classified.
4. The result is stored in MongoDB.
5. The dashboard displays scan history, analytics, and risk information.
6. AI-based recommendations are generated based on detected threats.

---

## Threat Levels

| Level         | Description                                     |
| ------------- | ----------------------------------------------- |
| 🟢 Safe       | No threat detected                              |
| 🟡 Suspicious | Suspicious activity found                       |
| 🟠 Dangerous  | Website detected as malicious                   |
| 🔴 Critical   | High-risk website requiring immediate attention |

---

## Future Improvements

* Email phishing detection
* File malware scanning
* Dark Web monitoring
* Machine learning based threat prediction
* Real-time browser protection
* AI chatbot for cybersecurity assistance

---

## Author

**Chandrakant Kumar**

B.Tech Computer Science & Engineering Student

If you have any suggestions or feedback, feel free to create an issue or submit a pull request.

---

## License

This project is created for educational and learning purposes.



<img width="1692" height="626" alt="Screenshot 2026-06-28 092332" src="https://github.com/user-attachments/assets/2b71a24b-553b-4928-8fa4-102cb9965d23" />
<img width="1863" height="882" alt="Screenshot 2026-06-28 092233" src="https://github.com/user-attachments/assets/b0a70659-4969-4b49-ae67-7212e043bbcb" />
<img width="1871" height="911" alt="Screenshot 2026-06-28 092156" src="https://github.com/user-attachments/assets/71843c57-58b5-4da6-b02f-0ffb1f3b7b26" />
<img width="1877" height="863" alt="Screenshot 2026-06-28 092127" src="https://github.com/user-attachments/assets/8ce13e05-5de2-4ced-a429-e2a918e8b5b3" />
<img width="1877" height="908" alt="Screenshot 2026-06-28 092055" src="https://github.com/user-attachments/assets/22d2f41e-0cdc-4f4c-a6b4-22cd8b5b4e17" />
<img width="1838" height="822" alt="Screenshot 2026-06-28 092021" src="https://github.com/user-attachments/assets/664f51da-fd0f-4e59-b450-ac26c8fe21d4" />
<img width="1792" height="662" alt="Screenshot 2026-06-28 092431" src="https://github.com/user-attachments/assets/92ac9b9c-1197-4e9a-af08-a5bae11ef325" />

