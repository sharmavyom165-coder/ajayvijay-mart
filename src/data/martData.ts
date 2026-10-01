export interface Product {
  id: string;
  name: string;
  hindiName: string;
  category: 'staples' | 'personal_care' | 'snacks' | 'household' | 'festive';
  brand: string;
  weight: string;
  price: number;
  mrp: number;
  discount: number;
  rating: number;
  ratingCount: number;
  imagePlaceholder: string;
  badge?: string;
  description: string;
  popular: boolean;
}

export interface Deal {
  id: string;
  title: string;
  hindiTitle: string;
  subtitle: string;
  discountText: string;
  validUntil: string;
  code: string;
  badgeColor: string;
  theme: string;
}

export interface InstagramPost {
  id: string;
  caption: string;
  likes: number;
  comments: number;
  tag: string;
  date: string;
  badge: string;
}

export interface Review {
  id: string;
  author: string;
  locality: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export const CATEGORIES = [
  { id: 'all', name: 'All Aisles', hindi: 'सभी सामान', count: 24 },
  { id: 'staples', name: 'Grocery & Staples', hindi: 'किराना व अनाज', count: 8 },
  { id: 'personal_care', name: 'Personal Care & Beauty', hindi: 'पर्सनल केयर व सौंदर्य', count: 6 },
  { id: 'snacks', name: 'Snacks & Beverages', hindi: 'नमकीन व चाय-कॉफ़ी', count: 5 },
  { id: 'household', name: 'Household & Cleaning', hindi: 'सफ़ाई व घरेलू सामान', count: 5 },
  { id: 'festive', name: 'Festive & Dry Fruits', hindi: 'त्योहारी पैक व मेवे', count: 4 },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'MP Sharbati Gold Wheat Atta',
    hindiName: 'एमपी शरबती गोल्ड गेहूं आटा',
    category: 'staples',
    brand: 'Malwa Pure',
    weight: '10 kg Pack',
    price: 435,
    mrp: 490,
    discount: 11,
    rating: 4.9,
    ratingCount: 142,
    imagePlaceholder: 'staples',
    badge: 'Best Seller in Agar',
    description: '100% Pure Sharbati Gehu from Malwa plains, stone ground for softer rotis that stay fresh for 12 hours.',
    popular: true
  },
  {
    id: 'p2',
    name: 'Pure Desi Cow Ghee (Danedar)',
    hindiName: 'शुद्ध देशी गाय का घी (दानेदार)',
    category: 'staples',
    brand: 'Amrit Sagar',
    weight: '1 Litre Tin',
    price: 649,
    mrp: 750,
    discount: 13,
    rating: 4.9,
    ratingCount: 210,
    imagePlaceholder: 'dairy',
    badge: 'Purity Assured',
    description: 'Traditional bilona-style golden cow ghee with rich aroma and granular texture, tested for zero adulteration.',
    popular: true
  },
  {
    id: 'p3',
    name: 'Royal Basmati Rice (XXL Grain)',
    hindiName: 'रॉयल बासमती चावल (एक्स्ट्रा लॉन्ग)',
    category: 'staples',
    brand: 'Dawaat Heritage',
    weight: '5 kg Bag',
    price: 499,
    mrp: 620,
    discount: 20,
    rating: 4.8,
    ratingCount: 98,
    imagePlaceholder: 'staples',
    badge: 'Festive Special',
    description: 'Aged for 2 years. Fluffy, non-sticky long grain basmati rice ideal for biryani and festive pulao.',
    popular: true
  },
  {
    id: 'p4',
    name: 'Unpolished Toor Dal (Malwa Special)',
    hindiName: 'अनपॉलिश्ड तुअर दाल (मालवा स्पेशल)',
    category: 'staples',
    brand: 'Vijay Selection',
    weight: '1 kg Pack',
    price: 155,
    mrp: 185,
    discount: 16,
    rating: 4.9,
    ratingCount: 180,
    imagePlaceholder: 'staples',
    badge: 'Our Heritage Pick',
    description: 'Hand-sorted unpolished toor dal. Rich in natural plant protein and quick cooking with authentic village taste.',
    popular: true
  },
  {
    id: 'p5',
    name: 'Kachi Ghani Cold-Pressed Mustard Oil',
    hindiName: 'कच्ची घानी शुद्ध सरसों तेल',
    category: 'staples',
    brand: 'Fortune Gold',
    weight: '1 Litre Bottle',
    price: 138,
    mrp: 165,
    discount: 16,
    rating: 4.7,
    ratingCount: 88,
    imagePlaceholder: 'oil',
    description: 'First press pungent mustard oil extracted traditionally, packed with natural antioxidants and omega-3.',
    popular: false
  },
  {
    id: 'p6',
    name: 'Malwi Garam Masala & Whole Spices',
    hindiName: 'मालवी गरम मसाला व खड़े मसाले',
    category: 'staples',
    brand: 'Vijay Heritage Blend',
    weight: '250g Jar',
    price: 120,
    mrp: 150,
    discount: 20,
    rating: 5.0,
    ratingCount: 164,
    imagePlaceholder: 'spices',
    badge: 'Vijay Kirana Recipe',
    description: 'The iconic spice blend perfected by Vijay Kirana Store since 1995, freshly ground in small batches.',
    popular: true
  },
  {
    id: 'p7',
    name: 'Ratlam Laung Sev & Hing Mix',
    hindiName: 'रतलामी लौंग सेव व हींग मिक्स',
    category: 'snacks',
    brand: 'Malwa Zaika',
    weight: '500g Fresh Pack',
    price: 130,
    mrp: 160,
    discount: 19,
    rating: 4.9,
    ratingCount: 320,
    imagePlaceholder: 'namkeen',
    badge: 'Malwa Favorite',
    description: 'Crispy authentic Malwa sev made in fresh groundnut oil with aromatic clove (laung) and premium asafoetida (hing).',
    popular: true
  },
  {
    id: 'p8',
    name: 'Premium CTC Assam Leaf Tea',
    hindiName: 'प्रीमियम कड़क आसाम पत्ती चाय',
    category: 'snacks',
    brand: 'Wagh Bakri Spiced',
    weight: '1 kg Box',
    price: 460,
    mrp: 520,
    discount: 12,
    rating: 4.8,
    ratingCount: 115,
    imagePlaceholder: 'tea',
    description: 'Strong, rich amber liquor blend with cardamom and ginger notes for the perfect Malwa morning cup.',
    popular: false
  },
  {
    id: 'p9',
    name: 'Alphonso Mango & Mixed Fruit Real Juices',
    hindiName: 'अल्फांसो आम व मिक्स्ड फ्रूट जूस (पैक ऑफ़ 2)',
    category: 'snacks',
    brand: 'Real Fruit Power',
    weight: '1L x 2 Bottles',
    price: 195,
    mrp: 260,
    discount: 25,
    rating: 4.6,
    ratingCount: 76,
    imagePlaceholder: 'juice',
    badge: 'Buy 1 Get 1 at 50%',
    description: 'No added preservatives, loaded with real fruit pulp and vitamin C for the entire family.',
    popular: false
  },
  {
    id: 'p10',
    name: 'Premium California Almonds (Badam Giri)',
    hindiName: 'प्रीमियम कैलिफ़ोर्निया बादाम गिरी',
    category: 'festive',
    brand: 'Ajay Vijay Royal',
    weight: '500g Vacuum Pack',
    price: 430,
    mrp: 550,
    discount: 22,
    rating: 4.9,
    ratingCount: 154,
    imagePlaceholder: 'dryfruits',
    badge: 'Super Saver',
    description: 'Jumbo sized crunchy, sweet almonds directly sourced from California orchards. 100% natural oil preserved.',
    popular: true
  },
  {
    id: 'p11',
    name: 'Luxury Shahi Dry Fruit Festive Hamper',
    hindiName: 'शाही ड्राई फ्रूट फेस्टिव उपहार बॉक्स',
    category: 'festive',
    brand: 'Ajay Vijay Special',
    weight: '800g Gift Box',
    price: 999,
    mrp: 1399,
    discount: 28,
    rating: 5.0,
    ratingCount: 89,
    imagePlaceholder: 'festive_box',
    badge: 'Festival Ready',
    description: 'Artistic laser-cut gift box containing premium Cashews, Almonds, Pistachios, and Golden Raisins.',
    popular: true
  },
  {
    id: 'p12',
    name: 'Kumkumadi Radiance Day Cream & Face Wash',
    hindiName: 'कुमकुमादि रेडियंस डे क्रीम व फेस वाश',
    category: 'personal_care',
    brand: 'Kama Malwa Herbals',
    weight: '50g + 100ml Combo',
    price: 349,
    mrp: 499,
    discount: 30,
    rating: 4.7,
    ratingCount: 65,
    imagePlaceholder: 'cosmetics',
    badge: 'Beauty Offer',
    description: 'Saffron and Kashmiri sandalwood enriched Ayurvedic daily skincare combo for natural skin glow.',
    popular: false
  },
  {
    id: 'p13',
    name: 'Herbal Neem & Aloe Vera Bath Soap (Pack of 5)',
    hindiName: 'नीम व एलोवेरा हर्बल बाथ सोप (5 का पैक)',
    category: 'personal_care',
    brand: 'Medimix / Godrej',
    weight: '125g x 5 bars',
    price: 175,
    mrp: 230,
    discount: 24,
    rating: 4.8,
    ratingCount: 140,
    imagePlaceholder: 'soap',
    description: 'Grade 1 TFM 76% herbal soap with 18 pure herbs for all-day skin protection and freshness.',
    popular: false
  },
  {
    id: 'p14',
    name: 'Active Matic Front & Top Load Detergent',
    hindiName: 'एक्टिव मैटिक वाशिंग पाउडर',
    category: 'household',
    brand: 'Surf Excel Matic',
    weight: '4 kg + 1 kg Free',
    price: 680,
    mrp: 850,
    discount: 20,
    rating: 4.9,
    ratingCount: 230,
    imagePlaceholder: 'detergent',
    badge: '+1kg Extra Free',
    description: 'Tough stain removal formula with pleasant fragrance, specially formulated for machine and hand wash.',
    popular: true
  },
  {
    id: 'p15',
    name: 'Disinfectant Floor & Surface Cleaner (Citrus)',
    hindiName: 'फ्लोर व सरफेस क्लीनर (नींबू की ताज़गी)',
    category: 'household',
    brand: 'Lizol Power Clean',
    weight: '2 Litre Value Pack',
    price: 310,
    mrp: 395,
    discount: 21,
    rating: 4.8,
    ratingCount: 110,
    imagePlaceholder: 'cleaner',
    description: 'Kills 99.9% germs, leaves sparkling marble and tile floors with long-lasting refreshing citrus scent.',
    popular: false
  },
  {
    id: 'p16',
    name: 'Stainless Steel Insulated Water Bottle',
    hindiName: 'स्टेनलेस स्टील इन्सुलेटेड पानी बोतल (24 घंटे ठंडा)',
    category: 'household',
    brand: 'Milton Thermosteel',
    weight: '1000ml',
    price: 599,
    mrp: 799,
    discount: 25,
    rating: 4.8,
    ratingCount: 92,
    imagePlaceholder: 'flask',
    badge: '1st Floor Mart Special',
    description: 'Double-walled vacuum insulated, keeps water chilled for 24 hours or piping hot for 18 hours.',
    popular: false
  }
];

export const DEALS: Deal[] = [
  {
    id: 'deal-1',
    title: 'Mahakal & Festive Bachat Mahotsav',
    hindiTitle: 'महाकाल व फेस्टिव बचत महोत्सव',
    subtitle: 'Flat 15% to 35% Off across Dry Fruits, Festive Gift Hampers & Ghee',
    discountText: 'UP TO 35% OFF',
    validUntil: 'Valid this Sunday in Agar Malwa',
    code: 'FESTIVEAGAR',
    badgeColor: '#E5A93C',
    theme: 'gold'
  },
  {
    id: 'deal-2',
    title: 'Monthly Ration Super Saver Combo',
    hindiTitle: 'माहवारी राशन सुपर सेवर कॉम्बो',
    subtitle: '10kg Sharbati Atta + 5kg Basmati + 1L Cow Ghee + 2kg Pulses combo bundle',
    discountText: 'SAVE ₹450 EXTRA',
    validUntil: 'Limited Stock this week',
    code: 'MALWARATION',
    badgeColor: '#0F284E',
    theme: 'navy'
  },
  {
    id: 'deal-3',
    title: 'Personal Care & Cosmetics Bonanza',
    hindiTitle: 'पर्सनल केयर व सौंदर्य बोनान्ज़ा',
    subtitle: 'Buy 2 Get 1 Free on all body lotions, shampoos and herbal face care products',
    discountText: 'BUY 2 GET 1 FREE',
    validUntil: 'Only on 1st Floor Ajay Vijay Mart',
    code: 'GLOWAGAR',
    badgeColor: '#059669',
    theme: 'green'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Sunil Patidar',
    locality: 'Old Bus Stand Road, Agar Malwa',
    rating: 5,
    date: '3 days ago',
    comment: 'We have been buying our monthly groceries from Vijay Kirana Store since my father’s time. The transformation into Ajay Vijay Mart is truly breathtaking! Air-conditioned, multi-storey, huge brand variety, and the same honest rates and pure quality.',
    verified: true
  },
  {
    id: 'r2',
    author: 'Pooja Sharma',
    locality: 'VIP Colony, Agar',
    rating: 5,
    date: '1 week ago',
    comment: 'Earlier we had to travel to Ujjain or Indore for good cosmetic brands and imported packaged foods. Now Ajay Vijay Mart has everything right here in Agar Malwa. The parking is spacious and computerized billing takes less than a minute!',
    verified: true
  },
  {
    id: 'r3',
    author: 'Mahesh Jain',
    locality: 'Nana Bazaar, Agar Malwa',
    rating: 5,
    date: '2 weeks ago',
    comment: 'WhatsApp order feature is very convenient for elderly parents. Sent our handwritten list in the morning and within 2 hours everything was delivered cleanly packed at our door. Trusted legacy of Vijay Ji.',
    verified: true
  },
  {
    id: 'r4',
    author: 'Dr. Anurag Chouhan',
    locality: 'Hospital Road, Agar Malwa',
    rating: 5,
    date: 'Last month',
    comment: 'Cleanest supermarket in the district. Elevator access makes it easy for senior citizens to visit the first floor household section. Wheelchair ramp at entry is a thoughtful touch.',
    verified: true
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    caption: '🏢 Ajay Vijay Mart Agar (M.P.) — नौकरी का सुनहरा मौका! हमारे नए 3-मंजिला सुपरमार्केट में विभिन्न पदों पर भर्ती जारी है। संपर्क करें: 7771075551 / 9981414282',
    likes: 214,
    comments: 38,
    tag: '@ajayvijaymart',
    date: 'Recent',
    badge: 'Store Opening & Hiring'
  },
  {
    id: 'ig-2',
    caption: '✨ श्री कृष्ण जन्माष्टमी की हार्दिक शुभकामनाएँ! कान्हा की कृपा आप सभी पर बनी रहे। अजय विजय मार्ट, आगर मालवा।',
    likes: 198,
    comments: 24,
    tag: '@ajayvijaymart',
    date: 'Festive',
    badge: 'जन्माष्टमी स्पेशल'
  },
  {
    id: 'ig-3',
    caption: '🌺 श्री गणेश चतुर्थी की हार्दिक शुभकामनाएँ! विघ्नहर्ता आपके जीवन में सुख, समृद्धि और मिठास भरें। #GaneshChaturthi #AjayVijayMart',
    likes: 265,
    comments: 31,
    tag: '@ajayvijaymart',
    date: 'Festive',
    badge: 'गणेश चतुर्थी स्पेशल'
  },
  {
    id: 'ig-4',
    caption: 'From our small wooden counter in 1995 to a 3-floor shopping haven in 2026. Grateful to every family of Agar Malwa for over 31 years of love and trust! ❤️ #Legacy',
    likes: 890,
    comments: 94,
    tag: '@ajayvijaymart',
    date: '1 week ago',
    badge: 'Heritage Story'
  }
];

export const STORE_INFO = {
  name: 'Ajay Vijay Mart',
  hindiName: 'अजय विजय मार्ट',
  formerName: 'Vijay Kirana Store (Est. 1995)',
  tagline: 'Your Everyday Shopping Destination 🛒 · Quality | Choice | Value 💯',
  address: 'Main Market Road, Near Old Bus Stand, Agar Malwa, MP - 465441',
  landmark: 'Opposite State Bank & Old Bus Stand Junction',
  phone: '+91 77710 75551',
  phoneSecondary: '+91 99814 14282',
  whatsappNumber: '917771075551',
  email: 'care@ajayvijaymart.com',
  instagram: '@ajayvijaymart',
  instagramFollowers: '325',
  instagramFollowing: '443',
  instagramPostsCount: '4',
  openingTime: '08:30 AM',
  closingTime: '10:00 PM',
  openDays: 'Open All 7 Days',
  rating: '4.8',
  reviewCount: '480+ Google Reviews'
};
