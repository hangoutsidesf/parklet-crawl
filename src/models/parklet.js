import mongoose from 'mongoose';

const { Schema } = mongoose;

const parkletSchema = Schema({
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
  photos: [String],
  rating: Number,
  prices: {
    type: Number,
    min: 1,
    max: 4,
  },
});

const Parklet = mongoose.model('Parklet', parkletSchema);

export default Parklet;
