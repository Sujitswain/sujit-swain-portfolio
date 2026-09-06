
# Sujit Swain Portfolio

A responsive React portfolio for Sujit Swain, Backend Engineer. The site presents backend engineering experience, selected projects, technical skills, education, certification, and contact options.

## Features

- Hero section with copyable profile information
- Performance and quality metrics
- Categorized technology stack
- Selected backend architecture projects
- experience timeline
- Education details
- Certification
- Credly verification link
- Downloadable resume PDF
- GitHub and LinkedIn profile links
- Contact form with FormSubmit email delivery
- Responsive desktop and mobile layout

## Tech Stack

- React
- Vite
- Tailwind CSS
- react-icons

## Project Structure

```text
src/
	components/
		CertificationSection.jsx
		ContactSection.jsx
		Icon.jsx
		MessageFormConsole.jsx
		ProjectsAndLedger.jsx
		SectionLabel.jsx
		TechStackSection.jsx
	data/
		portfolio.js
	pages/
		Home.jsx
	assets/
	App.jsx
	index.css
	main.jsx
public/
	Sujit_Swain_Java_Backend_2YOE.pdf
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Contact Form

The contact form uses FormSubmit to forward messages to `sujitswain2023@gmail.com`. It submits in the background and shows an inline success or error message without redirecting the page.

## Profile Links

- GitHub: https://github.com/Sujitswain
- LinkedIn: https://www.linkedin.com/in/sujit-swain-tech/
- AWS certification: https://www.credly.com/badges/978235e4-c1ca-4f96-822d-0a887ea8803d/public_url
