<template>
  <div id="app">
    {{ message }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      message: 'Loading...',
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const { data: { message } } = await axios.get('/api/whoami')

      await axios.get('/api/large')

      this.message = message
    },
  }
}
</script>
