<template>
  <div class="flex-center my-6">
    <autocomplete
      :search="fetchSearchResults"
      placeholder="Search Wikipedia"
      aria-label="Search Wikipedia"
    />
  </div>
</template>

<script lang="ts">
import Autocomplete from '@trevoreyre/autocomplete-vue';
import Client from 'node-tvdb';

export default {
  name: 'MyComponent',
  components: {
    Autocomplete,
  },
  methods: {
    search(query: string): string {
      const client = new Client('3cd20f72cdf835a57c110f2d1ada78d3');
      const results = client.getSeriesByName(query);
      results.then(console.log);
      return '';
    },
    fetchSearchResults(query: string): string {
      const HOME = 'https://api.thetvdb.com';
      const KEY = '3cd20f72cdf835a57c110f2d1ada78d3';

      const token = this.$axios
        .$post(HOME + '/login', { apikey: KEY })
        .then((login) => login.data.token)
        .catch((err) => console.error(err));

      this.$axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      this.$axios.defaults.baseURL = HOME;
      return '';
    },
  },
};
</script>

<style scoped>
@import '@trevoreyre/autocomplete-vue/dist/style.css';
</style>
