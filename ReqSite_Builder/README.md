# DAGOGO WILLIAM-JUMBO Portfolio

A vibrant, colorful multi-page developer portfolio with modern design, mobile-responsive navigation, and smooth page transitions.

## Features

- **Homepage** - Eye-catching hero with gradient colors, stats section, and quick navigation cards
- **Projects Page** - Project showcase grid with colored tech badges and hover effects
- **Experience Page** - Professional timeline with colored markers and achievements
- **Skills Page** - Categorized skills with progress bars and colorful badges
- **Contact Page** - Contact form with social links
- **Mobile Responsive** - Hamburger menu for mobile devices

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero and overview |
| `/projects` | Projects showcase |
| `/experience` | Work experience timeline |
| `/skills` | Skills and competencies |
| `/contact` | Contact form and info |

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Color Theme

- **Primary**: Blue (#3B82F6)
- **Secondary**: Teal (#14B8A6)
- **Accent**: Orange (#F97316)
- **Gradients**: Blue-to-teal for buttons and CTAs

## Customization

Update `frontend/lib/config.ts` to change:
- Personal information (name, title, tagline)
- Projects list
- Work experience
- Skills categories
- Social links

## Structure

```
frontend/
├── app/
│   ├── page.tsx           # Homepage
│   ├── projects/page.tsx  # Projects page
│   ├── experience/page.tsx # Experience page
│   ├── skills/page.tsx    # Skills page
│   ├── contact/page.tsx   # Contact page
│   └── layout.tsx         # Root layout with nav/footer
├── components/
│   ├── Navigation.tsx     # Sticky navbar with mobile menu
│   └── Footer.tsx         # Site footer with social links
└── lib/
    └── config.ts          # Portfolio configuration
```
