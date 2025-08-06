<p align="center">
  <img src="https://i.imgur.com/DREzBH1.png" alt="logo" width="250"/>
</p>


A modern, responsive website template for professional barber services featuring expert cuts, styling, and grooming.

## Features

- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Modern UI**: Clean, professional design with custom color scheme and typography
- **Interactive Elements**: Smooth scrolling navigation, mobile menu, testimonials carousel
- **Performance Optimized**: Compressed assets, optimized images, and modern web standards
- **Security**: Helmet.js for security headers and CSP configuration

<p align="center">
  <img src="https://i.imgur.com/U4mVG6C.jpeg" alt="logo" width="1000"/>
</p>

## Technology Stack

- **Frontend**: HTML5, CSS3 (Tailwind CSS), Vanilla JavaScript
- **Backend**: Node.js with Express
- **Build Tools**: Tailwind CSS, PostCSS, Autoprefixer
- **Development**: Nodemon for hot reloading

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/WiiZARDD/Modern-Barber-Website/
cd Modern-Barber-Website
```

2. Install dependencies:
```bash
npm install
```

3. Build CSS (development with watch mode):
```bash
npm run build-css
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

## Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run build-css` - Build and watch Tailwind CSS

## Project Structure

```
Modern-Barber-Website/
├── public/
│   ├── css/
│   │   └── style.css          # Compiled Tailwind CSS
│   ├── images/                # Image assets
│   ├── js/
│   │   └── main.js           # Main JavaScript functionality
│   └── index.html            # Main HTML template
├── src/
│   └── css/
│       └── input.css         # Tailwind CSS source
├── server.js                 # Express server configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies and scripts
```

## Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.js`:
- **Barber Gold**: `#D4A574`
- **Barber Dark**: `#1A1A1A`

### Fonts

- **Primary**: Inter (system font stack)
- **Display**: Poppins (headings and decorative elements)

### Content

Update the content in `public/index.html` to customize:
- Business name and branding
- Services offered
- Contact information
- Testimonials
- Images and gallery

## Deployment

1. Build CSS for production:
```bash
npm run build-css
```

2. Start the production server:
```bash
npm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
