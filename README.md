# Flixinhio

A responsive movie and TV show streaming UI built with plain HTML, CSS, and JavaScript. No frameworks or build step are required.

## Overview

Flixinhio is a front-end concept for a streaming platform inspired by the layout and browsing patterns of popular streaming services. It includes a mobile-first layout, a featured continue-watching section, tabbed browsing between TV shows and movies, and an interactive watchlist.

## Features

- Responsive layout with mobile-first design and clean breakpoints
- Tabbed browsing between TV Shows and Movies
- Expandable poster sections with a "See more" interaction
- Interactive watchlist with live item count
- Featured continue-watching hero section
- Accessible navigation and visible focus states
- Mobile hamburger menu for smaller screens

## Tech Stack

| Layer           | Technology          |
| --------------- | ------------------- |
| Structure       | HTML5               |
| Styling         | CSS3                |
| Interactivity   | Vanilla JavaScript  |

## Project Structure

```text
flixinhio/
├── index.html
├── style.css
├── script.js
├── project shots/
└── image/
```

## Getting Started

Clone the project and open the homepage in your browser.

```bash
git clone https://github.com/gyarados1865/flixinhio.git
cd flixinhio
```

You can open index.html directly, or serve the folder locally for a better experience.

```bash
python -m http.server 8000
```

## Responsive Breakpoints

| Breakpoint | Layout change                                                          |
| ---------- | ---------------------------------------------------------------------- |
| < 768px    | Single or two-column poster grid with hamburger navigation             |
| >= 768px   | Full navigation bar with a four-column poster grid and two-column hero |
| >= 1024px  | Wider spacing for larger screens                                       |

## Notes

All poster artwork is used for demonstration and portfolio purposes only.

## Author

Built by Sibtain.

## License

This project is open source and available for learning purposes.
