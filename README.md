# 🐱 NuraCat - Digital Safety for Women & Girls

> **"Learn. Protect. Shine."**

NuraCat is a progressive web application designed to empower women and girls in Ethiopia with digital safety knowledge, legal awareness, and practical tools to protect their online presence. Built with a "Privacy First" approach, it bridges the gap between technology and cultural context through bilingual support (Amharic, Afaan Oromo, English) and gamified education.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-Prototype-orange)
![Stack](https://img.shields.io/badge/tech-React%20%7C%20TypeScript%20%7C%20Gemini%20AI-pink)

---

## 🎯 Mission

To create a safe digital environment where Ethiopian women can:

1.  **Learn** about digital rights, consent, and cybersecurity.
2.  **Protect** their personal images from AI misuse and deepfakes.
3.  **Shine** confidently online without fear of harassment or blackmail.

---

## 🌸 Key Features

### 1. 📚 Gamified Education Module

- **Adaptive Learning:** Content tailored for three age groups (13-15, 18-21, 22+).
- **Bilingual Content:** Full support for **Amharic**, **Afaan Oromo**, and **English**.
- **Story-Driven Lessons:** Scenarios based on real-life contexts (e.g., Telegram usage, cafe culture, workplace dynamics).
- **Progression System:** XP rewards, daily streaks, and unlockable badges (Beginner -> Protector -> Scholar -> Queen).

### 2. 💬 Anonymous Consultation (Safe Space)

- **Privacy-Centric:** Users can ask sensitive questions without revealing their identity.
- **AI Safety Moderation:** powered by **Google Gemini 2.5 Flash**, the system analyzes outgoing messages for bullying, victim-blaming, or hate speech before they are posted.
- **Expert Guidance:** A simulated platform for legal advisors, psychologists, and tech experts to provide verified answers.

### 3. 🛡️ Image Protection (AI Shield)

- **Client-Side Processing:** Images are processed locally in the browser to ensure privacy.
- **Adversarial Noise Simulation:** Applies a "Glaze/Nightshade" inspired noise filter and pixel shifting to making personal photos difficult for generative AI models to scrape or clone effectively.
- **Educational Output:** Explains _why_ the protection works and how to maintain metadata privacy.

### 4. 🐱 The NuraCat Mascot

- A friendly, emotionally responsive guide that adapts to the user's journey.
- **Emotions:** Happy (Success), Concerned (Safety Warnings), Teaching (Lessons), Neutral (Waiting).

---

## 🛠️ Technical Architecture

### Frontend Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom "Rose/Blush" color palette)
- **Build Tool:** ESBuild (via playground environment)

### AI Integration

- **Provider:** Google GenAI SDK (`@google/genai`)
- **Model:** `gemini-2.5-flash`
- **Use Cases:**
  - **Daily Safety Tips:** Generates context-aware, culturally relevant safety tips in the user's preferred language.
  - **Content Moderation:** Real-time safety checks on user inquiries to prevent abuse within the consultation module.

### Data Persistence

- **Current State:** LocalStorage (Prototype phase).
- **Simulation:** Mock data is used to simulate a backend environment for posts, lessons, and user profiles.

---

## 📂 Project Structure

```bash
/
├── App.tsx                 # Main application controller and routing
├── index.tsx               # Entry point
├── index.html              # HTML shell & Tailwind configuration
├── types.ts                # TypeScript interfaces (User, Lesson, Post)
├── constants.ts            # Static data (Translations, Badges, Mock Lessons)
├── services/
│   └── geminiService.ts    # Google Gemini API integration
└── components/
    ├── Mascot.tsx          # SVG-based animated mascot component
    └── ImageProtection.tsx # Canvas-based image processing logic
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- A Google Gemini API Key (Get one at [aistudio.google.com](https://aistudio.google.com))

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/nuracat.git
    cd nuracat
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory:

    ```env
    API_KEY=your_gemini_api_key_here
    ```

4.  **Run the application**
    ```bash
    npm start
    ```

---

## 🌍 Cultural Localization Strategy

NuraCat goes beyond simple translation. The content is localized to fit the Ethiopian digital landscape:

- **Platform Specifics:** Lessons specifically mention Telegram and TikTok, which are dominant in the region.
- **Legal Context:** References Ethiopian Cyber Crime Proclamation and Labor Laws regarding harassment.
- **Social Norms:** Addressing "Shame" culture specifically in blackmail scenarios to empower victims.

---

## 🔮 Future Roadmap

1.  **Backend Integration:** Move from LocalStorage to a secure database (Supabase/Firebase).
2.  **Fayda Integration:** Implement real API calls to Ethiopia's National ID system for consultant verification.
3.  **Offline Mode:** Enable PWA capabilities for users with unstable internet connections.
4.  **Voice Support:** Add Text-to-Speech for accessibility in rural areas.

---

## ⚠️ Disclaimer

- **Prototype:** This is a frontend demonstration. The "Image Protection" feature is a simulation of adversarial perturbation concepts and should not be relied upon for high-stakes security in this demo version.
- **Medical/Legal:** The consultation module contains mock data. In a production environment, this requires strict vetting of professionals.

---

_Built with ❤️ and respect._
