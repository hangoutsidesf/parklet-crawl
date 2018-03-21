import { Schema } from 'mongoose';

const Parklet = new Schema({
  name: String,
  hours: {
    monday: [Number],
    tuesday: [Number],
    wednesday: [Number],
    thursday: [Number],
    friday: [Number],
    saturday: [Number],
    sunday: [Number],
  },
  location: {
    coordinates: [String],
    street: String,
    cross_streets: [String],
    address: String,
    formatted_address: String,
  },
  amenities: {
    wifi: {
      is_offered: Boolean,
      password: String,
    },
    has_food: Boolean,
    has_coffee: Boolean,
  },
  views: Number,
  photos: [URL],
  rating: Number,
});

export default Parklet;
