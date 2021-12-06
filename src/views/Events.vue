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
      events: [
        {
          id: 1,
          eventName: 'Saufen',
          eventDes: 'Saufen mit den Jungs',
          eventStart: '2021-12-01T22:00:00',
          eventLocation: 'Bei Ronnie',
          eventCoordinate: '1010010231231'
        },
        {
          id: 2,
          eventName: 'Essen',
          eventDes: 'Essen mit Papa',
          eventStart: '2021-12-05T18:00:00',
          eventLocation: 'Yoko Sushi',
          eventCoordinate: '1231421211'
        },
        {
          id: 3,
          eventName: 'Kinoabend',
          eventDes: 'Filme schauen mit Freundin',
          eventStart: '2021-12-07T18:00:00',
          eventLocation: 'Zu Huase',
          eventCoordinate: '233359011'
        }
      ]
    }
  }
}
</script>
<style scoped>

</style>
