# Travel Journal 📚✈️

A beautiful and interactive travel journal built with React that allows you to explore and document amazing travel destinations around the world.

## 🌟 Features

- **Interactive Travel Cards**: Beautifully designed cards showcasing travel destinations
- **Rich Content**: Each destination includes title, location, dates, description, and images
- **Responsive Design**: Modern UI that works seamlessly on all devices
- **Google Maps Integration**: Direct links to Google Maps for each location
- **Sample Data**: Pre-loaded with 10 stunning travel destinations including:
  - Mount Fuji, Japan
  - Sydney Opera House, Australia
  - Geirangerfjord, Norway
  - Grand Canyon, USA
  - Santorini, Greece
  - Machu Picchu, Peru
  - Bali, Indonesia
  - Petra, Jordan
  - Eiffel Tower, France
  - Banff National Park, Canada

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd travel-journel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
travel journal/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and icons
│   ├── component/         # React components
│   │   ├── Card.jsx      # Travel destination card component
│   │   └── Header.jsx    # Application header
│   ├── App.jsx           # Main application component
│   ├── data.js           # Travel destinations data
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
└── eslint.config.js       # ESLint configuration
```

## 🛠️ Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build
- **`npm run lint`** - Run ESLint for code quality

## 🎨 Customization

### Adding New Destinations

To add new travel destinations, edit the `src/data.js` file and add new objects following this structure:

```javascript
{
  id: 11,
  title: "Your Destination",
  location: "Country",
  googleMapsUrl: "https://maps.google.com/...",
  startDate: "01 Jan, 2024",
  endDate: "10 Jan, 2024",
  description: "Description of your destination",
  imageUrl: "https://your-image-url.com/image.jpg"
}
```

### Styling

- Modify `src/App.css` for global styles
- Update component-specific styles in their respective CSS files
- The application uses modern CSS with responsive design principles



## 🛠️ Built With

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **ESLint** - Code quality and consistency
- **CSS3** - Modern styling with responsive design



**Happy Traveling! ✈️🌍**

*Built with ❤️ using React and Vite*
