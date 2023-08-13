import Bookmark from '../models/Bookmark.js';
import ValidationError from './Error/ValidationError.js';

async function updateBookmark(req, res) {
  try {
    const { id } = req;
    const {
      Number, surahNumber, juz, numberOfSurah,
    } = req.body;

    if (!Number || !surahNumber || !juz || !numberOfSurah) {
      throw new ValidationError(400, "fail update bookmark's user");
    }

    // if (typeof Number || typeof surahNumber || typeof juz || typeof numberOfSurah !== 'number') {
    //   throw new ValidationError(400, 'all input is Number');
    // }
    console.log(typeof Number);
    console.log(typeof surahNumber);
    console.log(typeof juz);
    console.log(typeof numberOfSurah);

    const bookmark = await Bookmark.findById(id);
    bookmark.Number = Number;
    bookmark.surahNumber = surahNumber;
    bookmark.juz = juz;
    bookmark.numberOfSurah = numberOfSurah;

    bookmark.save();
    res.status(201).json({ code: 201, message: 'bookmark updated' });
    return;
  } catch (error) {
    res.status(error.code).json({ code: error.code, message: error.message });
  }
}

async function resetBookmark(req, res) {
  try {
    const { id } = req;
    const bookmark = await Bookmark.findById(id);

    if (!bookmark) {
      throw new ValidationError(400, "fail reset bookmark's user");
    }

    bookmark.Number = null;
    bookmark.surahNumber = null;
    bookmark.juz = null;
    bookmark.numberOfSurah = null;

    bookmark.save();
    res.status(200).json({ code: 200, message: 'bookmark reseted' });
    return;
  } catch (error) {
    res.status(error.code).json({ code: error.code, message: error.message });
  }
}

export { updateBookmark, resetBookmark };
