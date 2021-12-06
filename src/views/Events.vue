<template>
 <h1> All Events</h1>
  <div class="container-fluid">
    <div class="map-responsive">
      <iframe src="https://maps.google.com/maps?q=Berlin&t=&z=13&ie=UTF8&iwloc=&output=embed" width="900" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </div>
  <div class="col" v-for="event in events" :key="event.id">
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
      <div class="card-header">Event {{event.id}}</div>
      <div class="card-body">
        <h5 class="card-title">{{event.eventName}}</h5>
        <p class="card-text">Was: {{event.eventDes}} <br> Wann: {{event.eventStart}} <br> Wo: {{event.eventLocation}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Events',
  filters: {
    formatDate: function (value) {
      return moment(value).format('MM/DD/YYYY hh:mm')
    }
  },
  data () {
    return {
      events: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/events'
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
  }
}

</script>
<style scoped>

</style>
