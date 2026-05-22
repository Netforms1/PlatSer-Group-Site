import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070D',
          900: '#0A0F1F',
          800: '#0F162B',
          700: '#141C36',
          600: '#1B2547',
        },
        brand: {
          DEFAULT: '#1E5BD8',
          50: '#EAF1FE',
          100: '#C7D8FB',
          200: '#94B5F6',
          300: '#5F91F0',
          400: '#3673E5',
          500: '#1E5BD8',
          600: '#1648B0',
          700: '#103685',
          800: '#0B265E',
          900: '#071A42',
        },
        sky2: {
          DEFAULT: '#4FB4E8',
          400: '#4FB4E8',
          300: '#7CC8EF',
        },
        accent: {
          pink: '#FF3D8A',
        },
      },
      fontFamily: {
        sans: ['var(--font-onest)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-unbounded)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 80px -10px rgba(30, 91, 216, 0.55)',
        'glow-soft': '0 0 60px -20px rgba(79, 180, 232, 0.45)',
        pill: '0 10px 30px -10px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(ellipse at top, rgba(30,91,216,0.18), transparent 60%), radial-gradient(ellipse at bottom right, rgba(79,180,232,0.10), transparent 55%)',
        'mesh-blue':
          'radial-gradient(60% 50% at 30% 30%, rgba(30,91,216,0.35) 0%, transparent 70%), radial-gradient(45% 45% at 75% 60%, rgba(79,180,232,0.25) 0%, transparent 70%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'shine': 'shine 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', filter: 'blur(28px)' },
          '50%': { opacity: '0.85', filter: 'blur(40px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
