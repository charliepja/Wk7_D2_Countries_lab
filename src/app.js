import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      countries: [],
      totalPopulation: 0
    },
		mounted(){
			this.fetchCountries();
		},
    computed: {
      totalPops: function() {
        return this.countries.reduce((total, country) => {
          return total + country.population;
        }, 0);
      },

    },
    methods: {
			fetchCountries: function() {
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.countries = data);
      }
    },
  })
})
