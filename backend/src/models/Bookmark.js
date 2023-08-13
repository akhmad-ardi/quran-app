import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BookmarkSchema = new Schema({
  _id: String,
  Number: { type: Number, default: null },
  surahNumber: { type: Number, default: null },
  juz: { type: Number, default: null },
  numberOfSurah: { type: Number, default: null },
});

const Bookmark = model('Bookmark', BookmarkSchema);

export default Bookmark;
