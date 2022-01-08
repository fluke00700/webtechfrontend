<template>
  <div class="eventstoday">
    <h1>Your events for {{currentDate()}} </h1>
    <div class="col" v-for="event in events" :key="event.id">
      <div class="card text-white bg-dark mb-3" style="max-width: 150rem;">
        <div class="card-header">Event {{event.id}}</div>
        <div class="card-body">
          <h5 class="card-title">{{event.eventName}}</h5>
          <p class="card-text"><b>What:</b> {{event.eventDes}} <br> <b>When:</b> {{rearrangeDate(event.eventStart)}} <br> <b>Where:</b> {{event.eventLocation}} <br> <b>Category:</b> {{event.eventCategory}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
