export default {
  data() {
    return {
      cities: [],
      batchSize: 10,
      lastIndex: 0,
      selectedCity: null, // To keep track of the selected city
    };
  },
  computed: {
    citiesToShow() {
      return this.cities.slice(0, this.lastIndex);
    },
  },
  methods: {
    selectCity(city) {
      this.selectedCity = city;
    },
    loadMore() {
      this.lastIndex += this.batchSize;
    },
    async fetchCities() {
      try {
        const response = await fetch('https://datahub.io/core/world-cities/r/world-cities.json');
        const data = await response.json();
        this.cities = data.sort((a, b) => a.name.localeCompare(b.name));
        this.loadMore();
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    },
  },
  mounted() {
    this.fetchCities();
  },
};
