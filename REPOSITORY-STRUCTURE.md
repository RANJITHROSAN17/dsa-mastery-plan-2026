# 📋 Repository Structure Guide

## 🗂️ Complete File Organization

```
dsa-mastery-plan-2026/
│
├── 📄 INDEX FILES
│   ├── README.md                    # 🌟 START HERE - Main guide & overview
│   ├── CONTRIBUTING.md              # How to contribute to the project
│   ├── LEARNING-RESOURCES.md        # Comprehensive resource library
│   ├── patterns.md                  # Algorithmic pattern cheatsheet
│   └── .gitignore                   # Git ignore rules
│
├── 💻 FRONTEND FILES
│   ├── index.html                   # Interactive dashboard (main UI)
│   └── styles.css                   # Beautiful dark-theme styling
│   
├── 📊 DATA FILES
│   └── curriculum-data.js           # 150-day curriculum data structure
│
├── 📁 TRACKING DIRECTORIES
│   ├── logs/                        # Your practice logs (optional)
│   │   └── README.md                # Guide for creating logs
│   │
│   └── postmortems/                 # Problem analysis & learnings
│       └── README.md                # Template for postmortems
│
└── 🚀 GITHUB PAGES
    └── Auto-deployed via GitHub Pages
        └── https://ranjithrosan17.github.io/dsa-mastery-plan-2026/
```

---

## 📄 File Descriptions

### Core Documentation

#### **README.md** (🌟 START HERE)
- **Purpose**: Main entry point for the entire project
- **Contains**:
  - Project overview and tagline
  - Quick navigation links
  - 5 phases of learning breakdown
  - Key features overview
  - Quick start guide
  - Pro tips for success
  - After 150 days expectations
- **Keep This**: As your reference guide throughout the journey
- **Update When**: New features or major changes

#### **LEARNING-RESOURCES.md** (📚 Complete Resource Library)
- **Purpose**: Curated list of all learning materials
- **Contains**:
  - Primary learning platforms (NeetCode, Striver, Abdul Bari, etc.)
  - Complete 150-day breakdown with daily topics
  - Video tutorials with links
  - Problem practice lists
  - MAANG-specific focus areas
  - Supplementary resources (books, platforms, YouTube channels)
- **Use For**: Finding specific resources by topic or day
- **Update When**: New resources discovered or old ones become unavailable

#### **patterns.md** (🧠 Algorithmic Pattern Cheatsheet)
- **Purpose**: Personal pattern library and tracker
- **Contains**:
  - Pattern recognition strategy
  - Pattern tables (Arrays, Searching, Trees, Graphs, DP, etc.)
  - How to identify patterns in interviews
  - Pattern learning path (recommended order)
  - Pattern mastery tips
- **Use For**: Referencing patterns while solving problems
- **Update When**: You learn a new pattern or discover variations

#### **CONTRIBUTING.md** (🤝 Contribution Guide)
- **Purpose**: Guide for contributing to the project
- **Contains**:
  - Ways to contribute
  - Step-by-step contribution process
  - Contribution guidelines
  - PR checklist
  - Code of conduct
  - Recognition for contributors
- **Use For**: If you want to improve the project
- **Update When**: Project contribution policies change

---

### Frontend Files

#### **index.html** (💻 Interactive Dashboard)
- **Purpose**: Main user interface for tracking progress
- **Features**:
  - Beautiful dark theme UI
  - 150-day interactive calendar
  - Progress tracking with visual indicators
  - Click-to-complete checkboxes
  - Expandable day cards showing:
    - Learning objectives
    - Topics to cover
    - Problems to solve
    - Resources and links
  - Filter and search functionality
  - Progress visualization
  - Data persistence (localStorage)
  - Responsive design (mobile, tablet, desktop)
- **Tech**: Pure HTML/CSS/JavaScript (no dependencies)
- **Hosted**: GitHub Pages
- **Access**: `https://ranjithrosan17.github.io/dsa-mastery-plan-2026/`

#### **styles.css** (🎨 UI Styling)
- **Purpose**: All styling for the dashboard
- **Contains**:
  - CSS variables for colors and spacing
  - Dark theme color scheme
  - Responsive media queries
  - Animation and transition effects
  - Component-specific styles
- **Color Scheme**:
  - Primary Dark: `#0f1419`
  - Accent Blue: `#4f9eff`
  - Success Green: `#34d399`
  - Warning Orange: `#fb923c`
  - Danger Red: `#ef4444`

---

### Data Files

#### **curriculum-data.js** (📊 Curriculum Data)
- **Purpose**: Stores all 150 days of curriculum data
- **Structure**:
  ```javascript
  {
    day: 1,
    title: "Big-O Notation & Time Complexity",
    difficulty: "beginner",
    phase: 1,
    week: 1,
    focusAreas: [...],
    concepts: [...],
    problems: [...],
    resources: [...],
    patterns: [...]
  }
  ```
- **Use For**: Feeding data to the dashboard
- **Update When**: Adding new days or modifying curriculum

---

### Tracking Directories

#### **logs/** (📝 Practice Logs)
- **Purpose**: Document your daily learning and progress
- **Create Files Like**: `day-1-arrays.md`, `week-1-summary.md`
- **Example Content**:
  - Problems solved today
  - Time spent on each problem
  - Concepts learned
  - Mistakes made
  - Resources used
  - Next day focus areas
- **Template**: See `logs/README.md`
- **Benefit**: Track your actual journey and identify patterns in learning

#### **postmortems/** (🔍 Problem Analysis)
- **Purpose**: Deep-dive analysis of challenging problems
- **Create Files Like**: `two-sum.md`, `longest-substring.md`
- **Template Structure**:
  ```markdown
  # Postmortem: [Problem Name]
  
  ## What I Did Wrong
  ## Root Cause Analysis
  ## Correct Approach
  ## Key Insights
  ## Similar Problems to Practice
  ```
- **Benefit**: Learn from mistakes and build pattern recognition
- **Reference**: See `postmortems/README.md` for detailed template

#### **logs/README.md** (📖 Logging Guide)
- **Purpose**: How to effectively use the logs directory
- **Contains**:
  - Why keep logs
  - What to track
  - Logging template
  - Organization tips
  - Analysis strategies

#### **postmortems/README.md** (📋 Postmortem Guide)
- **Purpose**: How to write effective postmortems
- **Contains**:
  - Postmortem template
  - Root cause analysis guidelines
  - What to learn from mistakes
  - How to categorize problems

---

## 🔄 How Files Work Together

```
README.md (Overview)
   ↓
LEARNING-RESOURCES.md (Find resources)
   ↓
index.html (Track progress)
   ↓
curriculum-data.js (Get daily tasks)
   ↓
patterns.md (Learn/Reference patterns)
   ↓
logs/ (Record progress)
   ↓
postmortems/ (Learn from mistakes)
```

---

## 📱 Mobile & Desktop Views

### Desktop (1200px+)
- Full dashboard with all elements visible
- Side-by-side cards
- Complete resource tables
- Smooth animations

### Tablet (768px - 1199px)
- Stacked layout
- Optimized card sizing
- Readable text
- Touch-friendly buttons

### Mobile (< 768px)
- Single column layout
- Enlarged tap targets
- Horizontal scrolling for tables
- Condensed header
- Full-screen modals

---

## 🔐 File Permissions

- **README.md**: Read-only for users (edit in PRs)
- **curriculum-data.js**: Maintainer-only (contains 150 days of data)
- **index.html/styles.css**: Community can suggest improvements
- **LEARNING-RESOURCES.md**: Community can add resources
- **logs/**: User can create their own logs
- **postmortems/**: User can create their own analyses
- **CONTRIBUTING.md**: Read-only (contribution guidelines)

---

## 🚀 Deployment

### GitHub Pages Setup
- Repository: `dsa-mastery-plan-2026`
- Branch: `main`
- Source: Root directory
- URL: `https://ranjithrosan17.github.io/dsa-mastery-plan-2026/`

### Deployment Process
1. Changes pushed to `main` branch
2. GitHub automatically builds and deploys
3. Changes live in ~1-2 minutes
4. No additional build steps required

---

## 💾 Data Persistence

### Frontend (Client-Side)
- **localStorage**: Saves your progress
- **SessionStorage**: Temporary session data
- **IndexedDB**: For large data if needed

### No Backend
- ✅ All data stored locally in browser
- ✅ Privacy-friendly (no server tracking)
- ✅ Works offline
- ❌ Progress lost if browser storage cleared

---

## 📊 File Size & Performance

| File | Size | Type | Impact |
|------|------|------|--------|
| index.html | ~72KB | Markup | HTML with embedded CSS/JS |
| styles.css | ~5.7KB | Styling | Pure CSS |
| curriculum-data.js | ~56KB | Data | 150 days of curriculum |
| **Total** | **~134KB** | - | **Fast loading** |

---

## 🔍 Quick File Reference

### Need to... Find this file:
- Get started → README.md
- Find resources → LEARNING-RESOURCES.md
- Reference patterns → patterns.md
- Track progress → index.html
- Contribute → CONTRIBUTING.md
- Log daily → logs/your-day.md
- Analyze mistake → postmortems/problem-name.md
- Modify curriculum → curriculum-data.js

---

## ✅ Checklist for Repository Health

- [ ] README.md is up-to-date
- [ ] All links in markdown files work
- [ ] curriculum-data.js has all 150 days
- [ ] Dashboard displays correctly on mobile
- [ ] Styles.css has proper color scheme
- [ ] CONTRIBUTING.md has clear instructions
- [ ] patterns.md includes all major patterns
- [ ] logs/ has example entries
- [ ] postmortems/ has template
- [ ] .gitignore is present

---

## 📞 Questions About Files?

- **File unclear?** Open an issue
- **Want to add files?** Check CONTRIBUTING.md
- **Found broken links?** Submit a PR with fixes
- **Have suggestions?** Join discussions

---

**Happy Learning! 🚀**
