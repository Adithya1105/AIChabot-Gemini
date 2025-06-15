# 🤖 AI Chatbot – Google Gemini Integration

A full-stack conversational AI chatbot that leverages the **Google Gemini API** to deliver real-time intelligent responses. Built with a **Spring Boot backend** and a modern **React (Vite) frontend**, this project demonstrates asynchronous LLM integration, modern UI development, and full-stack coordination.

---

## 🛠 Tech Stack

### 🔹 Frontend:
- React (with Vite)
- Axios
- React Markdown

### 🔸 Backend:
- Java 17+
- Spring Boot
- Spring WebClient
- Google Gemini API

---

## 🚀 Features

- ⚡ Real-time chat with Google Gemini LLM (Pro)
- 🔄 Asynchronous API handling via Spring WebClient
- 💬 Markdown-formatted dynamic response rendering
- 🔐 Error boundaries for robust frontend UX
- 🧩 Modular monorepo structure with clean separation
- 🌐 Configurable API layer and deployment-ready structure

---

## 📁 Project Structure

```plaintext
AIChabot-Gemini/
├── backend/                 # Spring Boot backend
│   ├── src/
│   ├── pom.xml
│   ├── application.properties
│   └── .gitignore
├── frontend/                # React + Vite frontend
│   ├── src/
│   ├── vite.config.js
│   ├── package.json
│   └── .gitignore
└── README.md                # Project documentation
```

---

## 🧪 Getting Started

### ✅ Prerequisites

- Java 17+
- Maven
- Node.js (v16 or above)
- Google Gemini API key

---

### 🔧 Backend Setup (Spring Boot)

```bash
cd backend
```

#### ➤ Set up your Gemini API credentials

Update `src/main/resources/application.properties`:

```properties
gemini.api.url=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent
gemini.api.key=YOUR_GEMINI_API_KEY
```

#### ➤ Run the Spring Boot application

```bash
mvn spring-boot:run
```

Server will start at: `http://localhost:8080`

---

### 🎨 Frontend Setup (React + Vite)

```bash
cd ../frontend
```

#### ➤ Install dependencies

```bash
npm install
```

#### ➤ Start the development server

```bash
npm run dev
```

Frontend will run at: `http://localhost:5173`

---

## 🧠 Usage

1. Launch both frontend and backend.
2. Open `http://localhost:5173`
3. Enter a message to start chatting with Gemini.
4. View AI responses rendered in Markdown format in real time.

---

## 🧰 Environment Variables

> For secure environments, you can also use `.env` instead of hardcoding API keys.

### Example `.env` (backend):

```dotenv
GEMINI_API_KEY=your_api_key_here
```

Then reference using:
```java
@Value("${GEMINI_API_KEY}")
private String apiKey;
```

---


## Future Enhancements

- Add session based chat memory
- API rate limiter and key expiration handling
- User authentication & chat logs
- Token usage tracker per request
- Full CI/CD deployment pipeline

---

##  Contributing

We welcome contributions! Here's how:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add YourFeature"`)
4. Push and create a Pull Request

---

## License

This project is licensed under the **MIT License**.




---

## 📬 Feedback & Support

Found a bug or have a feature request?  
Feel free to [open an issue](https://github.com/Adithya1105/AIChabot-Gemini/issues) or connect with me on LinkedIn.
