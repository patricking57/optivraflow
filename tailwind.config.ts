import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '1.5rem',
  		screens: {
  			'2xl': '1280px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			sans: [
  				'Plus Jakarta Sans',
  				'system-ui',
  				'sans-serif'
  			],
  			jakarta: [
  				'Plus Jakarta Sans',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			'22': ['22px', '1.26'],
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: '#6c54ff',
  				foreground: '#ffffff',
  			},
  			secondary: {
  				DEFAULT: '#1a1036',
  				foreground: '#ffffff',
  			},
  			purple: {
  				DEFAULT: '#b04aff',
  				100: '#f9f9f9',
  				200: '#f4f4f4',
  				300: '#e8e7eb',
  				400: '#bab7c2',
  				500: '#8c879a',
  				600: '#5e5772',
  				700: '#3c3454',
  				800: '#30274a',
  				900: '#261c40',
  				'/20': 'rgba(176, 74, 255, 0.2)',
  			},
  			green: {
  				DEFAULT: '#31d2ac',
  				'/20': 'rgba(49, 210, 172, 0.2)',
  			},
  			red: {
  				DEFAULT: '#ff3a3a',
  				'/20': 'rgba(255, 58, 58, 0.2)',
  			},
  			pink: {
  				DEFAULT: '#ff3ac8',
  				'/20': 'rgba(255, 58, 200, 0.2)',
  			},
  			yellow: {
  				DEFAULT: '#ffd02c',
  				'/20': 'rgba(255, 208, 44, 0.2)',
  			},
  			blue: '#3fcffd',
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			violet: {
  				DEFAULT: 'hsl(var(--violet))',
  				light: 'hsl(var(--violet-light))',
  				dark: 'hsl(var(--violet-dark))'
  			},
  			yellow: 'hsl(var(--yellow))',
  			pink: 'hsl(var(--pink))',
  			teal: 'hsl(var(--teal))',
  			navy: 'hsl(var(--navy))',
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			xl: '1rem',
  			'2xl': '1.5rem',
  			'3xl': '2rem'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
