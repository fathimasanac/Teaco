/**
 * TEACO DISTRIBUTORS - Centralized Product Catalogue Data
 * Structured Product Model for B2B Catalogue
 */

window.TEACO_PRODUCTS_DATA = {
  'teaco-tea': {
    id: 'teaco-tea',
    slug: 'teaco-tea',
    title: 'TEACO Tea',
    category: 'TEACO Tea',
    route: '/products/teaco-tea',
    cardDesc: 'Our tea range for consistent everyday preparation across cafés, tea shops and food-service businesses.',
    cardCta: 'View Product →',
    image: 'Assets/Products/teaco-tea.png',
    imageAlt: 'TEACO Tea Packaging',
    seoTitle: 'TEACO Tea | Tea Supplier in UAE | TEACO Distributors',
    seoDesc: 'TEACO Tea range for consistent everyday preparation across cafés, tea shops and food-service businesses in the UAE.',
    heroLabel: 'TEACO DISTRIBUTORS',
    heroDescription: 'Our tea range for consistent everyday preparation across cafés, tea shops and food-service businesses.',
    overview: 'TEACO Tea is a carefully blended black tea developed for consistent preparation in commercial food-service environments. Made with 80% Assam tea and 20% Kenya tea, the blend delivers a strong, full-bodied cup suited to milk tea, karak tea, and everyday tea service.\n\nPacked in a 5 KG commercial pack, TEACO Tea is suitable for cafés, tea shops, restaurants, hotels, catering businesses, and other high-volume tea-service operations.',
    highlights: [
      { title: '80% Assam + 20% Kenya', desc: 'Balanced black tea blend' },
      { title: 'Strong & Full-Bodied', desc: 'Suitable for milk tea and karak' },
      { title: '5 kg Commercial Pack', desc: 'Designed for professional food-service use' }
    ],
    suitableFor: [
      { title: 'Cafés', type: 'cafe' },
      { title: 'Tea shops', type: 'tea-shop' },
      { title: 'Restaurants', type: 'restaurant' },
      { title: 'Hotels', type: 'hotel' },
      { title: 'Catering businesses', type: 'catering' }
    ],
    subProducts: []
  },
  'fico-tea': {
    id: 'fico-tea',
    slug: 'fico-tea',
    title: 'FICO Tea',
    category: 'FICO Tea',
    route: '/products/fico-tea',
    cardDesc: 'Black tea powder suited for everyday tea preparation across food-service businesses.',
    cardCta: 'View Product →',
    image: 'Assets/Products/Fico-tea powder.png',
    imageAlt: 'FICO Tea Packaging',
    seoTitle: 'FICO Tea | Black Tea Supplier in UAE | TEACO Distributors',
    seoDesc: 'FICO Tea black tea powder suited for everyday tea preparation across food-service businesses in the UAE.',
    heroLabel: 'TEACO DISTRIBUTORS',
    heroDescription: 'Black tea powder suited for everyday tea preparation across food-service businesses.',
    overview: 'FICO Tea is a black tea powder designed for everyday tea preparation and commercial food-service use. It provides a familiar, strong tea character suitable for regular tea service across cafés, tea shops, restaurants, cafeterias, and other businesses.\n\nAvailable in a 5 KG commercial pack, FICO Tea is a practical choice for businesses looking for a dependable everyday black tea option for regular-volume service.',
    highlights: [
      { title: 'Everyday Black Tea', desc: 'A practical black tea powder for regular tea preparation.' },
      { title: 'Strong Tea Character', desc: 'Suitable for everyday milk tea and black tea service.' },
      { title: '5 kg Commercial Pack', desc: 'Designed for regular food-service and business use.' }
    ],
    suitableFor: [
      { title: 'Cafeterias', type: 'cafeteria' },
      { title: 'Tea shops', type: 'tea-shop' },
      { title: 'Restaurants', type: 'restaurant' },
      { title: 'Food-service businesses', type: 'food-service' }
    ],
    subProducts: []
  },
  'matcha-tea': {
    id: 'matcha-tea',
    slug: 'matcha-tea',
    title: 'Matcha Tea',
    category: 'Matcha Tea',
    route: '/products/matcha-tea',
    cardDesc: 'Matcha for cafés and beverage businesses looking to offer distinctive specialty drinks.',
    cardCta: 'View Product →',
    image: 'Assets/Products/matcha-tea.png',
    imageAlt: 'Matcha Tea Powder and Whisk',
    seoTitle: 'Matcha Tea Supplier in UAE | TEACO Distributors',
    seoDesc: 'Matcha tea for cafés and beverage businesses looking to offer distinctive specialty drinks in Dubai and the UAE.',
    heroLabel: 'TEACO DISTRIBUTORS',
    heroDescription: 'Matcha for cafés and beverage businesses looking to offer distinctive specialty drinks.',
    overview: 'Matcha Tea is a finely ground green tea powder suited to specialty beverage preparation and modern food-service applications. Its distinctive green color and fresh tea character make it a versatile ingredient for matcha-based drinks and other beverage creations.\n\nSuitable for cafés, tea shops, restaurants, hotels, and businesses looking to offer matcha-based beverages as part of their specialty drinks range.',
    highlights: [
      { title: 'Fine Green Tea Powder', desc: 'Finely ground green tea for matcha-based preparations.' },
      { title: 'Specialty Beverage', desc: 'Suitable for creating a range of modern matcha drinks.' },
      { title: 'Food-Service Use', desc: 'Designed for cafés, tea shops, restaurants and beverage businesses.' }
    ],
    suitableFor: [
      { title: 'Cafés', type: 'cafe' },
      { title: 'Beverage businesses', type: 'beverage' },
      { title: 'Restaurants', type: 'restaurant' },
      { title: 'Hotels', type: 'hotel' }
    ],
    subProducts: []
  },
  'speciality-tea': {
    id: 'speciality-tea',
    slug: 'speciality-tea',
    title: 'Speciality Tea',
    category: 'Speciality Tea',
    route: '/products/speciality-tea',
    cardDesc: 'Distinctive specialty tea options including Hibiscus Tea and Cardamom Saffron Tea.',
    cardCta: 'View Products →',
    image: 'Assets/Products/speciality-tea.jpg',
    imageAlt: 'Speciality Tea - Hibiscus, Cardamom and Saffron',
    seoTitle: 'Speciality Tea Supplier in UAE | TEACO Distributors',
    seoDesc: 'Distinctive specialty tea options including Hibiscus Tea and Cardamom Saffron Tea for UAE businesses.',
    heroLabel: 'TEACO DISTRIBUTORS',
    heroDescription: 'Explore distinctive specialty tea options for businesses looking to expand their beverage offering.',
    suitableFor: [
      { title: 'Cafés', type: 'cafe' },
      { title: 'Tea shops', type: 'tea-shop' },
      { title: 'Restaurants', type: 'restaurant' },
      { title: 'Hotels', type: 'hotel' },
      { title: 'Catering businesses', type: 'catering' }
    ],
    subProducts: [
      {
        id: 'hibiscus-tea',
        name: 'Hibiscus Tea',
        image: 'Assets/Products/hibiscus-tea.png',
        imageAlt: 'Hibiscus Tea Premium Blend',
        description: 'A specialty herbal infusion made from hibiscus petals, offering a distinctive deep red color and naturally tangy character. Suitable for hot or chilled beverage preparation.',
        idealFor: 'Cafés • Tea Shops • Restaurants • Hotels • Catering'
      },
      {
        id: 'cardamom-saffron-tea',
        name: 'Cardamom Saffron Tea',
        image: 'Assets/Products/cardamom-saffron-tea.png',
        imageAlt: 'Cardamom Saffron Tea Premium Blend',
        description: 'A specialty tea blend combining the aromatic character of cardamom with the distinctive notes of saffron. Suitable for specialty beverage menus and traditional tea service.',
        idealFor: 'Cafés • Tea Shops • Restaurants • Hotels • Catering'
      }
    ]
  },
  'coffee': {
    id: 'coffee',
    slug: 'coffee',
    title: 'Coffee',
    category: 'Coffee',
    route: '/products/coffee',
    cardDesc: 'Coffee options for cafés, restaurants, hotels and other food-service businesses.',
    cardCta: 'View Products →',
    image: 'Assets/Products/coffee.jpg',
    imageAlt: 'Coffee Beans and Coffee Powder',
    seoTitle: 'Coffee Supplier in UAE | Coffee Beans & Powder | TEACO Distributors',
    seoDesc: 'Coffee options including coffee beans and coffee powder for cafés, restaurants, hotels and food-service businesses in the UAE.',
    heroLabel: 'TEACO DISTRIBUTORS',
    heroDescription: 'Coffee options for cafés, restaurants, hotels and other food-service businesses.',
    overview: 'Coffee options for cafés, restaurants, hotels and other food-service businesses.',
    suitableFor: [
      { title: 'Cafés', type: 'cafe' },
      { title: 'Restaurants', type: 'restaurant' },
      { title: 'Hotels', type: 'hotel' },
      { title: 'Catering businesses', type: 'catering' }
    ],
    subProducts: [
      {
        id: 'coffee-beans',
        name: 'Coffee Beans',
        image: 'Assets/Products/coffee-beans.jpg',
        imageAlt: 'Freshly Roasted Coffee Beans',
        description: 'Whole coffee beans for cafés, restaurants, hotels and other food-service businesses.',
        highlights: [
          { title: 'Whole Coffee Beans', desc: 'For fresh coffee preparation.' },
          { title: 'Food-Service Supply', desc: 'Suitable for cafés, restaurants and hotels.' }
        ]
      },
      {
        id: 'coffee-powder',
        name: 'Coffee Powder',
        image: 'Assets/Products/coffee-powder.jpg',
        imageAlt: 'Finely Ground Coffee Powder',
        description: 'Ready-to-use ground coffee for cafés, restaurants, hotels and other food-service businesses.',
        highlights: [
          { title: 'Ground Coffee', desc: 'Ready for convenient preparation.' },
          { title: 'Food-Service Supply', desc: 'Suitable for cafés, restaurants and hotels.' }
        ]
      }
    ]
  },
  'paper-cups': {
    id: 'paper-cups',
    slug: 'paper-cups',
    title: 'Paper Cups',
    category: 'Paper Cups',
    route: '/products/paper-cups',
    cardDesc: 'Paper cups for cafés, tea shops, restaurants, catering businesses and everyday beverage service.',
    cardCta: 'View Product →',
    image: 'Assets/Products/paper-cups.jpg',
    imageAlt: 'Eco-friendly Paper Beverage Cups',
    seoTitle: 'Paper Cups Supplier in UAE | TEACO Distributors',
    seoDesc: 'Paper cups for cafés, tea shops, restaurants, catering businesses and everyday beverage service in Dubai and the UAE.',
    heroLabel: 'TEACO DISTRIBUTORS',
    heroDescription: 'Paper cups for cafés, tea shops, restaurants, catering businesses and everyday beverage service.',
    overview: 'Paper Cups are practical food-service essentials supplied for cafés, tea shops, restaurants, catering businesses, offices, and other beverage-serving environments. Suitable for serving tea, coffee, and other beverages as part of everyday commercial operations.',
    highlights: [
      { title: 'Food-Service Essential', desc: 'Practical cups for everyday beverage service.' },
      { title: 'For Tea & Coffee', desc: 'Suitable for serving tea, coffee, and other beverages.' },
      { title: 'Business Supply', desc: 'Suitable for cafés, restaurants, catering and other commercial users.' }
    ],
    suitableFor: [
      { title: 'Cafés', type: 'cafe' },
      { title: 'Tea shops', type: 'tea-shop' },
      { title: 'Restaurants', type: 'restaurant' },
      { title: 'Catering businesses', type: 'catering' },
      { title: 'Beverage outlets', type: 'beverage' }
    ],
    subProducts: []
  }
};
