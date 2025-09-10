# Threat Intelligence UI Dashboard

An interactive frontend dashboard built with **Next.js, React, TypeScript, and TailwindCSS** to visualize threat intelligence feeds (mocked APIs/JSON).  
The application fetches, stores, and displays Indicators of Compromise (IOCs) in a clean, responsive UI.

---

## 🚀 Features

- **Data Fetching**
  - Fetch IOCs from `/iocs.json` (mock data) or API.
  - Refresh button to manually reload data.
  - Configurable periodic fetch (e.g., every X minutes).
  - Loading state while fetching.

- **State Management**
  - IOC data stored in React state.
  - Optional integration with Zustand for global state.

- **Dashboard**
  - Table or card view of IOCs:
    - `value`, `type`, `source`, `timestamp`.
  - Search and filter by:
    - IOC type: `ip`, `subnet`, `url`
    - Source: `blocklist.de`, `spamhaus`, `digitalside`
  - Sorting (latest first, alphabetical).
  - Pagination / infinite scroll (bonus).
  - Summary widgets with total counts (IPs, Subnets, URLs).

- **UI/UX**
  - TailwindCSS styling for a **modern SaaS look**.
  - Responsive design (desktop + mobile).
  - Dark mode toggle (bonus).
  - Smooth transitions with Framer Motion (bonus).

---

## 📂 Project Structure

threat-dashboard/
├── public/
│ └── iocs.json # Mock data feeds
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ or app/ # Next.js routing
│ ├── store/ # Zustand/Redux store (if used)
│ ├── types/ # TypeScript interfaces
│ └── utils/ # Helper functions (fetch, format, etc.)
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md