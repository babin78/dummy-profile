# Chandni Chauhan - Personal Portfolio

A clean, responsive, and modern personal portfolio website built with semantic HTML5, CSS3, and JavaScript. This project showcases frontend development skills, featuring smooth animations, interactive components, and a mobile-first design approach.

## 🚀 Features

* **Responsive Layout**: Optimized for desktop, tablet, and mobile devices using CSS Flexbox and Grid.
* **Modern UI/UX**: Includes a sticky header that hides on scroll down and reappears on scroll up for better visibility.
* **Interactive Elements**:
* **Typewriter Effect**: Dynamic profession labels using the Typed.js library.
* **Smooth Scrolling**: seamless navigation between sections.
* **Entrance Animations**: Fade-in and zoom effects triggered as sections enter the viewport using Intersection Observer.


* **Functional Contact Form**: Includes client-side validation and feedback messages for user interactions.
* **Accessibility Focused**: Uses semantic HTML5 tags (e.g., `<header>`, `<main>`, `<section>`), skip-to-content links, and ARIA roles for screen reader compatibility.

## 🛠️ Technologies Used

* **HTML5**: Semantic markup and accessible structure.
* **CSS3**: Custom properties (variables), Flexbox, Grid, and Keyframe animations.
* **JavaScript (ES6+)**: Custom logic for mobile navigation, scroll-based effects, and form validation.
* **Libraries**:
* [Typed.js](https://mattboldt.com/demos/typed-js/): For the animated typing effect.
* [Boxicons](https://boxicons.com/): For high-quality vector icons.



## 📂 Project Structure

```text
├── index.html     # Main structural file with SEO meta tags
├── styles.css     # Global styles and layout configurations
├── script.js     # Interactivity, animations, and form logic
└── profile.JPG    # Profile image optimized for LCP

```

## ⚙️ Setup Instructions

1. **Clone the Repository**:
```bash
git clone https://github.com/your-username/portfolio-project.git

```


2. **Open the Project**:
Simply open `index.html` in any modern web browser to view the portfolio.
3. **Customization**:
* Update your personal details in the `home-content` and `about` sections of `index.html`.
* Change the primary brand colors in the `:root` section of `styles.css`.
* Modify the professions in the `Typed` constructor within `script.js`.

## lighthouse ext score
<img width="490" height="152" alt="image" src="https://github.com/user-attachments/assets/e1cec662-12b4-4135-b15e-d16daf70dcfa" />


## 📊 Lighthouse Performance Optimization
This project has been optimized to achieve high scores in Google Lighthouse, specifically targeting the Main-Thread Work and Largest Contentful Paint (LCP) metrics.

Key Optimizations:
Minimized Main-Thread Work:

Reduced the "Style & Layout" recalculation time by optimizing CSS transitions and entrance animations.

Throttled scroll event listeners in script.js to prevent layout thrashing during scroll-heavy interactions.

Minified JavaScript and CSS payloads to speed up script parsing and compilation.

Improved Largest Contentful Paint (LCP):

Assigned fetchpriority="high" to the primary profile image to ensure it is prioritized by the browser's discovery scanner.

Removed loading="lazy" from above-the-fold assets to prevent unnecessary delays in the initial render.

Reduced animation delays on the hero section to ensure content is visible to the user as quickly as possible.

Accessibility & SEO:

Achieved high accessibility scores by ensuring all interactive elements have valid accessible names that match their visible labels.

Included semantic HTML5 landmarks and structured heading levels (H1 through H3) for better document outlining.

Resource Efficiency:

Utilized the <picture> element to provide a responsive container for optimized image formats.

Implemented IntersectionObserver to trigger animations only when elements are visible, reducing idle execution costs.

Note: For the best results, use the minified versions (styles.min.css and script.min.js) in production.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Created by Chandni Chauhan*
