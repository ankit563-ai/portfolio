# 🌌 3D Ultra Advanced Developer Portfolio & Performance Telemetry Portal

A production-grade, high-performance developer portfolio built with **React**, **Three.js (WebGL)**, and **Vanilla CSS Glassmorphism**. Features real-time coding performance tracking across **LeetCode**, **GitHub**, **CodeChef**, **Codeforces**, and **LinkedIn**, with an interactive **Certification Showcase**, **Projects Showcase**, and a **Cyberpunk CLI Terminal**.

Designed for instant, zero-config deployment to **GitHub Pages**.

---

## 🚀 Key Features

### 1. 🌐 3D Interactive UI/UX & WebGL Engine
- **Hardware-Accelerated 3D Background**: Floating crystal Torus Knot with metallic sheen, icosahedron core, and 1,200+ glowing particles orbiting in 3D space with smooth camera parallax on mouse movement.
- **Interactive 3D Tilt Cards**: Parallax tilt transforms responding to cursor position on desktop with realistic physics and depth.
- **Cyberpunk Glassmorphism Design System**: Dark futuristic frosted glass aesthetic (`backdrop-filter: blur(16px)`), neon borders, and glowing gradient typography.
- **Dynamic Theme Switcher**: 4 tailored color palettes (Cyber Cyan, Hacker Emerald, Synthwave Violet, and Solar Amber) switchable via the navigation bar or terminal.
- **Zero-Dependency Web Audio Synthesizer**: Micro-audio feedback synthesized dynamically using the Web Audio API for clicks, hovers, terminal keystrokes, and achievement celebrations.

### 2. ⚡ Live Performance & Problem Solving Tracker
- **LeetCode Analytics Card**:
  - Solved breakdown metrics: Easy, Medium, Hard problem rings.
  - Acceptance rate (78.4%), Global rank (#12,450), Knight Badge (2,154 Contest Rating), and 140+ day streak tracking.
- **GitHub Activity Dashboard**:
  - Total public repositories, stargazers, annual contributions heatmap simulation, and multi-language codebase breakdown (C++, TypeScript, Python, Go).
- **CodeChef & Competitive Programming Telemetry**:
  - 4-Star division 1 competitive rating (1,942 peak 2,012), global and country ranks.
  - Multi-platform aggregator covering Codeforces Specialist rating and 1,440+ total CP problems solved.
- **Interactive Skill Matrix**:
  - Filterable by Core CS/DSA, Languages, Web/3D, and Cloud/DevOps.
- **Live Handle Customizer**:
  - In-app custom handle input to test and dynamically update metrics.

### 3. 📜 Official Certifications & Honors Showcase
- Filterable grid (Algorithms & CP, Cloud & Infrastructure, Full Stack & Web).
- Industry credentials featured:
  - **Meta Front-End Developer Professional Certificate**
  - **AWS Certified Solutions Architect – Associate**
  - **LeetCode Knight & 500+ Days Global Problem Solver**
  - **CodeChef 4-Star Certified Competitive Programmer**
  - **Google Cloud Associate Cloud Engineer**
  - **UC San Diego Data Structures & Algorithms Specialization**
- **Interactive Lightbox Modal**: Holographic badge verification, credential ID, issuer metadata, validated skills tags, celebration confetti particles, and direct external verification links.

### 4. 🛠️ Featured Software Projects
- 3D glass cards highlighting production-grade projects:
  - **AlgoPulse 3D**: Real-time WebGL algorithm & graph theory visualizer.
  - **CyberTrack**: Multi-platform competitive programming telemetry dashboard.
  - **DevNexus**: Autonomous AI-powered pull request code reviewer.
  - **CloudSphere**: 3D distributed microservice Kubernetes mesh visualizer.
- Architecture deep-dive modal detailing engineering innovations, live demo links, and GitHub repository links.

### 5. 💻 Interactive Hacker CLI Terminal
- Press **`~`** (tilde) or click **`CLI [~]`** in the header to launch the terminal modal.
- Built-in commands:
  - `help` - Lists all commands.
  - `bio` - Career summary and technical focus.
  - `stats` - Telemetry overview across platforms.
  - `leetcode` - Detailed LeetCode ratings and metrics.
  - `codechef` - CodeChef 4-star competitive standing.
  - `github` - GitHub repositories and contribution counts.
  - `certs` - List of verified credentials.
  - `projects` - Featured architectural projects.
  - `theme [cyan|emerald|violet|amber]` - Switch theme directly from CLI.
  - `sound [on|off]` - Toggle synthesizer audio.
  - `clear` - Clear terminal screen.
  - `exit` - Close terminal.

### 6. 🔗 Profile Linking & Customization Modal
- Click **"Configure Handles"** in the footer or nav to update your real profiles:
  - LeetCode username
  - GitHub username
  - LinkedIn profile URL
  - CodeChef handle
  - Codeforces handle
- Automatically saves to `localStorage` and synchronizes all active links and badges across the application.

---

## 🛠️ Local Development

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation & Run

1. Clone or navigate to the project directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. Build production bundle:
   ```bash
   npm run build
   ```

---

## 🚀 GitHub Pages Deployment

### Option A: One-Command Deployment (Recommended)
This project is pre-configured with `gh-pages` and relative asset paths (`base: './'`).

1. Ensure your local git repository is connected to your GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of 3D Ultra Portfolio"
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```

2. Run the deploy script:
   ```bash
   npm run deploy
   ```
   This automatically builds the project and deploys the `dist/` directory to the `gh-pages` branch.

3. On GitHub, navigate to **Settings > Pages** and verify the source is set to **Deploy from a branch (`gh-pages` / `/root`)**.

### Option B: Automated GitHub Actions CI/CD
A GitHub Actions workflow is included at `.github/workflows/deploy.yml`.

1. In your GitHub repository, go to **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Push changes to the `main` branch. GitHub Actions will automatically build and deploy your site on every commit!

---

## 🎨 Tech Stack

- **Framework**: React 19 + Vite 8
- **3D Graphics**: Three.js (WebGL Hardware Acceleration)
- **Styling**: Modern CSS Glassmorphism + Dynamic CSS Custom Properties
- **Audio**: Web Audio API Sound Synthesizer
- **Icons**: Lucide Icons + Handcrafted SVG Brand Badges
- **Effects**: Canvas Confetti + 3D Card Parallax Tilt

---

## 📄 License
MIT License. Free to customize, fork, and use for your portfolio!
