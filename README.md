# Portfolio Project

## Description

A personal portfolio website built with React, Vite, and modern web technologies, showcasing my journey as a .NET Program Developer. Features both local and Lithuanian weather display using OpenWeather API.

## Features

- Responsive navigation with smooth scrolling
- Interactive sections (About, Skills, Portfolio, References)
- Real-time weather display for Lithuania and local location
- Contact form with validation
- CV download functionality
- Social media integration
- Professional project showcase

## Technologies Used

- React 18.2.0
- Vite
- OpenWeather API
- Modern CSS with custom properties
- JavaScript ES6+

## Project Structure

src/
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Portfolio.jsx
│   ├── References.jsx
│   ├── Skills.jsx
│   └── Weather.jsx
├── styles/
│   └── main.css
├── App.jsx
└── main.jsx

## Setup Instructions

   Clone the repository:
   git clone [https://github.com/MantasTek/Portfolio.git]

   Install dependencies:
   cd Portfolio
   npm install

   Create .env file in root directory and add:
   VITE_WEATHER_API_KEY=your_api_key

   Run development server:
   npm run dev

   Build for production:
   npm run build

## Implemented Features

## Weather Integration

   Real-time weather display for Lithuania
   Local weather detection and display
   Temperature, humidity, and wind information
   Dynamic weather icons

## Form Validation

   Real-time input validation
   Error messages for invalid inputs
   Success confirmation
   Prevents submission of invalid data

## Navigation

   Smooth scrolling to sections
   Mobile-responsive menu
   Active section highlighting

## Portfolio Section

   Project showcase with descriptions
   Links to GitHub repositories
   Technology stack display
   Project previews

## Methods and Principles

   Component-Based Architecture using React
   Mobile-First Design
   CSS Custom Properties for theming
   Semantic HTML for accessibility
   Comprehensive error handling
   Git version control

## Contact

   GitHub: MantasTek
   LinkedIn: Mantas Petrovas

## Future Improvements

   Contact form backend integration
   Enhanced animations
   Project filtering capabilities
   Blog section
