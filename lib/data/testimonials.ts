export type Testimonial = {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  avatar?: string;
  type: 'individual' | 'hotel' | 'corporate';
};

export const testimonials: Testimonial[] = [
  {
    id: 't001',
    name: 'Ama Kyerewaa',
    role: 'Homeowner',
    location: 'Accra, Ghana',
    quote: "The quality is absolutely amazing. I ordered the Royal Egyptian Cotton Bedsheet Set and it felt like sleeping in a five-star hotel on the very first night. My family now refuses to sleep anywhere else! Prestige Noble Lady Luxury has transformed our home completely.",
    rating: 5,
    type: 'individual',
  },
  {
    id: 't002',
    name: 'Mr. Emmanuel Boateng',
    role: 'General Manager',
    location: 'Golden Palm Hotel, Kumasi',
    quote: "We supply all 42 rooms in our hotel with Prestige Noble Lady Luxury linen. The quality is consistent, delivery is always on time, and the bulk pricing works perfectly for our business model. Our guest satisfaction scores have never been higher. Highly recommended for any hospitality operator.",
    rating: 5,
    type: 'hotel',
  },
  {
    id: 't003',
    name: 'Akua Mensah',
    role: 'Airbnb Superhost',
    location: 'East Legon, Accra',
    quote: "Since switching to Prestige Noble Lady Luxury for my three Airbnb properties, my review scores jumped from 4.2 to consistently 4.9 stars. Guests always comment on how luxurious the bedding feels. The waterproof mattress covers are a lifesaver for short-let hosting. Worth every pesewa.",
    rating: 5,
    type: 'hotel',
  },
  {
    id: 't004',
    name: 'Kofi Antwi',
    role: 'Interior Designer',
    location: 'Tema, Ghana',
    quote: "I recommend Prestige Noble Lady Luxury to all my interior design clients. The curtain panels are exceptional quality and the range of styles means I can always find something that fits the vision. The custom order service is also invaluable for bespoke projects.",
    rating: 5,
    type: 'individual',
  },
  {
    id: 't005',
    name: 'Mrs. Adjoa Asante',
    role: 'Procurement Manager',
    location: 'Accra Regional Hospital',
    quote: "Our hospital sources all mattress covers and linen from Prestige Noble Lady Luxury. The waterproof, hospital-grade mattress covers are exactly what we need — durable, easy to clean, and professionally presented. Delivery for our bulk orders is always prompt and reliable.",
    rating: 5,
    type: 'corporate',
  },
  {
    id: 't006',
    name: 'Nana Esi Darko',
    role: 'Homeowner & Luxury Enthusiast',
    location: 'Cantonments, Accra',
    quote: "I purchased the Prestige Ivory Duvet Set as a housewarming gift and the recipient called me in tears of joy. The packaging alone feels premium, and the quality is unmatched at this price point in Ghana. I've since ordered three more sets for my own home. Simply magnificent.",
    rating: 5,
    type: 'individual',
  },
  {
    id: 't007',
    name: 'Frank Owusu',
    role: 'Guest House Owner',
    location: 'Cape Coast, Ghana',
    quote: "Running a guest house, linen quality is everything. Prestige Noble Lady Luxury delivers consistently high quality at prices that make commercial sense. The team is responsive, the bulk order process is straightforward, and I've never had a complaint about the bedding from any guest.",
    rating: 5,
    type: 'hotel',
  },
];
