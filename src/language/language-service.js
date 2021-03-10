const LinkedList = require('../linkedlist/linkedlist');

const LanguageService = {
  getUsersLanguage(db, user_id) {
    return db
      .from('language')
      .select(
        'language.id',
        'language.name',
        'language.user_id',
        'language.head',
        'language.total_score'
      )
      .where('language.user_id', user_id)
      .first()
  },

  getLanguageWords(db, language_id) {
    return db
      .from('word')
      .select(
        'id',
        'language_id',
        'original',
        'translation',
        'next',
        'memory_value',
        'correct_count',
        'incorrect_count'
      )
      .where({ language_id });
  },

  getNextWord(db, id) {
    return db('word')
      .select('id', 'next', 'original', 'correct_count', 'incorrect_count')
      .where({ id })
      .first();
  },

  populateWords(db, lang, words) {
    let practiceList = new LinkedList();
    practiceList.id = lang.id;
    practiceList.name = lang.name;
    practiceList.total_score = lang.total_score;

    let headWord = words.find((word) => word.id === lang.head);

    practiceList.insertFirst({
      id: headWord.id,
      original: headWord.original,
      translation: headWord.translation,
      memory_value: headWord.memory_value,
      correct_count: headWord.corrent_count,
      incorrect_count: headWord.incorrect_count
    });
    while (headWord.next) {
      headWord = words.find((word) => word.id === headWord.next);
      practiceList.insertLast({
        id: headWord.id,
        original: headWord.original,
        translation: headWord.translation,
        memory_value: headWord.memory_value,
        correct_count: headWord.correct_count,
        incorrect_count: headWord.incorrect_count,
      });
    }
    return practiceList;
  },

  updateWord(db, word) {
    return db.from('word').where({ id: word.id }).update({
      memory_value: word.memory_value,
      correct_count: word.correct_count,
      incorrect_count: word.incorrect_count,
    });
  },

  
  
}

module.exports = LanguageService
