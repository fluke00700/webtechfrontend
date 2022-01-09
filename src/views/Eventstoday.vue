<template>
  <div class="eventstoday">
    <div class="p-3 mb-2 bg-dark text-white" style= "max-width: 150rem;"><h1>Your events for today ({{currentDate()}}) </h1></div>
    <TodayEventCard></TodayEventCard>
  </div>
</template>
<script>
import TodayEventCard from '@/components/TodayEventCard'
export default {
  components: { TodayEventCard },
  data () {
    return {
      events: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/eventstoday'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(event => {
        this.events.push(event)
      }))
      .catch(error => console.log('error', error))
  },
  methods: {
    currentDate () {
      const current = new Date()
      const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`
      return date
    },
    rearrangeDate: function (eventStart) {
      var c = 0
      var date = ''
      var time = ''
      for (var i of eventStart) {
        c++
        if (c === 1) {
          date = i
        }
        if (c === 2 || c === 3) {
          date = i + '/' + date
        }
        if (c > 3) {
          if (i < 10) {
            i = '0' + i
          }
          if (c === 4) {
            time = time + i
          }
          if (c === 5) {
            time = time + ':' + i
          }
        }
      }
      return 'on ' + date + ' at ' + time
    }
  }
}
</script>
