// Product data for all electric bikes
// Import all available product images from assets folder

// Orange bike images (9 images)
import orangeCover from '../assets/images/products/Orange/orange.png';
import orangeBike1 from '../assets/images/products/Orange/01-1.png';
import orangeBike2 from '../assets/images/products/Orange/02-1.png';
import orangeBike3 from '../assets/images/products/Orange/03-1.png';
import orangeBike4 from '../assets/images/products/Orange/04-1.png';
import orangeBike5 from '../assets/images/products/Orange/05-1.png';
import orangeBike6 from '../assets/images/products/Orange/06-1.png';
import orangeBike7 from '../assets/images/products/Orange/07-1.png';
import orangeBike8 from '../assets/images/products/Orange/08-1.png';
import orangeBike9 from '../assets/images/products/Orange/09-1.png';

// SeaGreen bike images (7 images - 05-1.png doesn't exist)
import greenCover from '../assets/images/products/SeaGreen/seagreen.png';
import greenBike1 from '../assets/images/products/SeaGreen/01-1.png';
import greenBike2 from '../assets/images/products/SeaGreen/02-1.png';
import greenBike3 from '../assets/images/products/SeaGreen/03-1.png';
import greenBike4 from '../assets/images/products/SeaGreen/04-1.png';
import greenBike6 from '../assets/images/products/SeaGreen/06-1.png';
import greenBike7 from '../assets/images/products/SeaGreen/07-1.png';
import greenBike8 from '../assets/images/products/SeaGreen/08-1.png';
import greenBike9 from '../assets/images/products/SeaGreen/09-1.png';

// Silver bike images (9 images)
import silverCover from '../assets/images/products/Silver/silver.png';
import silverBike1 from '../assets/images/products/Silver/01-1.png';
import silverBike2 from '../assets/images/products/Silver/02-1.png';
import silverBike3 from '../assets/images/products/Silver/03-1.png';
import silverBike4 from '../assets/images/products/Silver/04-1.png';
import silverBike5 from '../assets/images/products/Silver/05-1.png';
import silverBike6 from '../assets/images/products/Silver/06-1.png';
import silverBike7 from '../assets/images/products/Silver/07-1.png';
import silverBike8 from '../assets/images/products/Silver/08-1.png';
import silverBike9 from '../assets/images/products/Silver/09-1.png';

const productImages = {
  orange: [
    orangeCover,
    orangeBike1,
    orangeBike2,
    orangeBike3,
    orangeBike4,
    orangeBike5,
    orangeBike6,
    orangeBike7,
    orangeBike8,
    orangeBike9,
  ],
  green: [
    greenCover,
    greenBike1,
    greenBike2,
    greenBike3,
    greenBike4,
    greenBike6,
    greenBike7,
    greenBike8,
    greenBike9,
  ],
  silver: [
    silverCover,
    silverBike1,
    silverBike2,
    silverBike3,
    silverBike4,
    silverBike5,
    silverBike6,
    silverBike7,
    silverBike8,
    silverBike9,
  ],
};

export const productsData = {
  base: {
    id: 'base',
    name: 'XO-RIDE BEETLE',
    price: '₹34,999',
    originalPrice: '₹39,999',
    shippingInfo: 'Exclusive Pre-Launch Pre-Booking Offer.',
    description: {
      title: 'WHERE STYLE MEETS MOTION',
      content:
        'Why choose between elegance and performance when you can have both? The XO-RIDE Series blends sleek design with raw power to deliver an unmatched riding experience. With precision engineering, effortless handling, and a statement-making presence, every ride becomes more than transportation — it’s your signature on the road.',
    },
    specifications: {
      'VEHICLE SPECIFICATIONS': {},
      PERFORMANCE: {
        'Top Speed': '25 km/h',
        Range: 'Up to 75 km on PAS',
        Charger: '3A',
        'Charge Time': '3-4 hrs',
        Battery: '36V 10AH Lithium Iron Phosphate battery with Smart BMS',
        Motor: '250W Hub Motor',
        Throttle: 'Thumb Throttle',
        'Gearing & Rear Derailleur': '7 Speed',
      },
      DIMENSIONS: {
        'Vehicle Weight': '35 kg',
        'Length x Width x Height': '70"x27"x45"',
        'Rider Weight Limit': '150 kg',
        'Recommended Rider Height': '4\'6" - 5\'11"',
        'Seat Height': '28"',
      },
      FRAMESET: {
        Frame: 'MS Steel',
        Suspension: 'Double Crown Suspension',
        Brakes: 'Mechanical disc brakes',
        Tyres: '20" x 4.0" Fat Tyres Front & Rear',
        'Inner Tubes': '20" x 4"',
      },
      COMPONENTS: {
        Display: 'Mounted on throttle',
        'Head Light': 'LED Light with DRL',
        'Rear Light': 'LED Light',
        Horn: 'Yes',
      },
      WARRANTY: {
        'Battery Warranty': '2 Years Battery Warranty*',
      },
    },
    images: productImages.silver,
  },
  mid: {
    id: 'mid',
    name: 'XO-RIDE STORM',
    price: '₹36,999',
    originalPrice: '₹41,999',
    shippingInfo: 'Exclusive Pre-Launch Pre-Booking Offer.',
    description: {
      title: 'DARE TO MOVE DIFFERENT',
      content:
        'Your daily ride just got an edge. The XO-RIDE Series isn’t built to follow — it’s built to lead, with sharper design, raw power, and a street-ready attitude. Every twist of the throttle is a surge of freedom, every ride a statement. Customize your flow, own your speed, and make the streets your stage.',
    },
    specifications: {
      'VEHICLE SPECIFICATIONS': {},
      PERFORMANCE: {
        'Top Speed': '25 km/h',
        Range: 'Up to 75 km on PAS',
        Charger: '3A',
        'Charge Time': '3-4 hrs',
        Battery: '36V 12AH Lithium Iron Phosphate battery with Smart BMS',
        Motor: '250W Hub Motor',
        Throttle: 'Thumb Throttle',
        'Gearing & Rear Derailleur': '7 Speed',
      },
      DIMENSIONS: {
        'Vehicle Weight': '35 kg',
        'Length x Width x Height': '70"x27"x45"',
        'Rider Weight Limit': '150 kg',
        'Recommended Rider Height': '4\'6" - 5\'11"',
        'Seat Height': '28"',
      },
      FRAMESET: {
        Frame: 'MS Steel',
        Suspension: 'Double Crown Suspension',
        Brakes: 'Mechanical disc brakes',
        Tyres: '20" x 4.0" Fat Tyres Front & Rear',
        'Inner Tubes': '20" x 4"',
      },
      COMPONENTS: {
        Display: 'Black & White LCD Display',
        'Head Light': 'LED Light with DRL',
        'Rear Light': 'LED Light',
        Horn: 'Yes',
      },
      WARRANTY: {
        'Battery Warranty': '2 Years Battery Warranty*',
      },
    },
    images: productImages.orange,
  },
  pro: {
    id: 'pro',
    name: 'XO-RIDE FIREFLY',
    price: '₹39,999',
    originalPrice: '₹44,999',
    shippingInfo: 'Exclusive Pre-Launch Pre-Booking Offer.',
    description: {
      title: 'EXPLORE. DREAM. DISCOVER.',
      content:
        'This compact urban explorer is built to take you beyond the ordinary. Designed for riders who seek freedom and adventure, it transforms every journey into a new experience. With intuitive features that keep you in control and a smooth, comfortable ride, the XO-RIDE empowers you to explore the streets, dream bigger, and discover your own path.',
    },
    specifications: {
      'VEHICLE SPECIFICATIONS': {},
      PERFORMANCE: {
        'Top Speed': '25 km/h',
        Range: 'Up to 75 km on PAS',
        Motor: '250W Hub Motor',
        Charger: '3A',
        'Charge Time': '3-4 hrs',
        Battery: '36V 18AH Lithium Iron Phosphate battery with Smart BMS',
        Throttle: 'Thumb Throttle',
        'Gearing & Rear Derailleur': '7 Speed',
      },
      DIMENSIONS: {
        'Vehicle Weight': '35 kg',
        'Length x Width x Height': '70"x27"x45"',
        'Rider Weight Limit': '150 kg',
        'Recommended Rider Height': '4\'6" - 5\'11"',
        'Seat Height': '28"',
      },
      FRAMESET: {
        Frame: 'MS Steel',
        Suspension: 'Double Crown Suspension',
        Brakes: 'Mechanical disc brakes',
        Tyres: '20" x 4.0" Fat Tyres Front & Rear',
        'Inner Tubes': '20" x 4"',
      },
      COMPONENTS: {
        Display: 'Bright LCD Display',
        'Head Light': 'LED Light with DRL',
        'Rear Light': 'LED Light',
        Horn: 'Yes',
      },
      WARRANTY: {
        'Battery Warranty': '5 Years Battery Warranty*',
      },
    },
    images: productImages.green,
  },
};
