# Shivani Desai - Portfolio Website

A modern, professional portfolio website showcasing my work, skills, and experience as a Full Stack Developer. Built with Next.js 14, TypeScript, and Tailwind CSS with beautiful animations and gradient themes.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern Design** - Beautiful gradient themes with glass morphism effects
- ✨ **Smooth Animations** - Framer Motion animations throughout the site
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🚀 **Fast Performance** - Optimized with Next.js 14 App Router
- 💻 **Type Safe** - Built with TypeScript for better code quality
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- ⌨️ **Typing Animation** - Animated name with cursor effect
- 📄 **Resume Download** - Direct PDF download functionality
- 🎭 **Scroll Animations** - Elements animate on scroll
- 🎨 **Gradient Backgrounds** - Unique gradient for each section

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Image Optimization:** Next.js Image Component

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17.0 or higher
- **npm** or **yarn** package manager

> 💡 **Tip:** If you're using `nvm`, you can run `nvm use` to automatically switch to the correct Node.js version (see `.nvmrc` file).

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd shivani-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
shivani-portfolio/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main page combining all sections
│   └── globals.css             # Global styles and Tailwind directives
├── components/
│   ├── Header.tsx              # Navigation header with mobile menu
│   ├── ScrollToTop.tsx        # Scroll to top button component
│   ├── TypingAnimation.tsx    # Typing animation with cursor
│   └── sections/
│       ├── Hero.tsx            # Hero section with profile image
│       ├── About.tsx           # Professional summary
│       ├── Experience.tsx      # Work experience timeline
│       ├── Projects.tsx        # Featured projects showcase
│       ├── Skills.tsx          # Technical skills grid
│       ├── Education.tsx       # Education & languages
│       ├── Achievements.tsx    # Awards & achievements
│       └── GetInTouch.tsx      # Contact section
├── data/
│   └── portfolio.ts            # All portfolio data (easily editable)
├── public/
│   ├── profile.jpg             # Profile picture
│   └── resume.pdf              # Resume PDF file
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies
```

## 🎨 Customization

### Updating Portfolio Data

All portfolio content is stored in `data/portfolio.ts`. Edit this file to update:

- **Personal Information:** Name, title, location, contact details
- **Professional Summary:** About section content
- **Work Experience:** Job history, achievements, technologies
- **Projects:** Project names, descriptions, tech stack
- **Skills:** Frontend, backend, database, cloud tools
- **Education:** Degrees, institutions, periods
- **Achievements:** Awards and recognitions
- **Languages:** Spoken languages

### Adding Your Profile Image

1. Place your profile image in the `public/` folder
2. Name it `profile.jpg` (or update the path in `Hero.tsx`)
3. Recommended size: 800x800px or larger (square aspect ratio)

### Adding Your Resume

1. Place your resume PDF in the `public/` folder
2. Name it `resume.pdf` (or update the path in components)
3. The download button will automatically link to it

### Changing Colors & Themes

Edit gradient colors in individual section components:
- Hero: `from-indigo-900 via-purple-900 to-pink-900`
- About: `from-purple-900 via-indigo-900 to-blue-900`
- Experience: `from-blue-900 via-indigo-900 to-purple-900`
- Projects: `from-indigo-900 via-purple-900 to-pink-900`
- Skills: `from-cyan-900 via-blue-900 to-indigo-900`
- Education: `from-indigo-900 via-blue-900 to-cyan-900`
- Achievements: `from-rose-900 via-pink-900 to-purple-900`
- Get In Touch: `from-violet-900 via-purple-900 to-fuchsia-900`

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy on Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Configure build settings in Netlify dashboard

### Deploy on Other Platforms

This project can be deployed on any platform that supports Next.js:
- AWS Amplify
- Railway
- DigitalOcean App Platform
- Heroku (with buildpacks)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### Typing Animation
The name "Shivani Desai" types out character by character with a blinking cursor effect on page load.

### Scroll Animations
All sections use Framer Motion's `whileInView` to animate when they come into viewport.

### Responsive Design
Mobile-first approach with breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px

### Gradient Themes
Each section has a unique gradient background for visual distinction.

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS theme and custom animations
- `tsconfig.json` - TypeScript compiler options
- `.eslintrc.json` - ESLint configuration

## 📄 License

This project is private and personal. All rights reserved.

## 👤 Author

**Shivani Desai**
- Email: shivanidesai0303@gmail.com
- LinkedIn: [shivanidesai14](https://www.linkedin.com/in/shivanidesai14/)
- Location: Ahmedabad, India

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

⭐ If you find this portfolio helpful, feel free to star the repository!
