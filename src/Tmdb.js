const API_KEY = '604732192f337d198dea5e4da2b80d1b';
const API_BASE = 'https://api.themoviedb.org/3';

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originais',
        title: 'Originais do Netlix',
        items: []
      },
      {
        slug: 'trending',
        title: 'Recomendados para Voçẽ',
        items: [],
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: [],
      }
    ];
  }
}