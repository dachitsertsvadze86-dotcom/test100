# 🏎️ Car Customizer - Toyota Supra

An interactive web application for customizing a Toyota Supra with premium car parts. Built with Next.js, React, and Tailwind CSS.

## Features

- 🚗 **Interactive Car Visualization**: Click on different parts of the car to customize
- 🛠️ **Multiple Part Categories**: Bumpers, Wheels, Hoods, Engines, and Exhaust systems
- 🎨 **Real-time Preview**: See your customizations applied instantly
- 💰 **Price Tracking**: Track total customization cost
- 🛒 **Buy Integration**: Direct links to purchase parts
- 📱 **Responsive Design**: Works great on desktop and mobile
- ⚡ **Fast Performance**: Built with Next.js for optimal speed

## Customizable Parts

### Bumper
- Stock Front Bumper - $450
- Sport Aggressive Bumper - $799
- Carbon Fiber Bumper - $1,299

### Wheels
- OEM 19" Wheels - $1,200
- Forged Sport Wheels - $1,899
- Premium Racing Wheels - $2,499

### Hood
- Stock Hood - $350
- Vented Hood - $699
- Carbon Fiber Hood - $1,500

### Engine
- Stock 3.0L Turbo - $3,500
- Tuned 3.0L Turbo 370HP - $4,200
- High Performance 420HP - $5,999

### Exhaust
- Stock Exhaust - $400
- Performance Exhaust - $899
- Titanium Exhaust - $1,799

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
car-customizer/
├── app/
│   ├── page.tsx              # Main page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── components/
│   │   ├── CarView.tsx       # Car display with interactive zones
│   │   ├── PartModal.tsx     # Part selection modal
│   │   ├── CarSelector.tsx   # Car selection dropdown
│   ├── data/
│   │   ├── cars.ts           # Car data
│   │   ├── parts.ts          # Parts data
│   ├── lib/
│   │   ├── types.ts          # TypeScript types
├── public/
│   ├── cars/
│   │   ├── supra/
│   │       ├── base.png      # Base car image
│   │       ├── parts/        # Part images
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **React 18**: Modern React features
- **Next.js Image**: Optimized image loading

## How to Use

1. **Select a Car**: Choose "Toyota Supra A90" from the dropdown
2. **Click on Parts**: Click on any part area (bumper, wheels, hood, engine, exhaust)
3. **Choose Upgrade**: Select from available options in the modal
4. **See Changes**: Watch the car update in real-time
5. **Check Price**: View total customization cost in the sidebar
6. **Buy Parts**: Click "Buy Now" to purchase selected parts

## Interactive Zones

- **Bumper**: Front bottom area
- **Wheels**: Left and right sides
- **Hood**: Top center area
- **Engine**: Center area
- **Exhaust**: Bottom right area

Hover over zones to see tooltips!

## Customization Tips

- Mix and match different part tiers (Stock, Sport, Premium)
- Track your total investment with the price calculator
- Use quick access buttons for faster navigation
- Reset all customizations with one click
- Each part has direct purchase links

## Future Enhancements

- [ ] Add more car models
- [ ] Paint color customization
- [ ] Interior customization
- [ ] Save/load configurations
- [ ] Share customizations with friends
- [ ] AR preview (on mobile)
- [ ] Performance calculator
- [ ] Community gallery

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please create an issue in the repository.

---

Made with ❤️ for car enthusiasts
