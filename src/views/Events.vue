<template>
  <h1> All Events</h1>
  <div class="container-fluid">
    <events-create-form @created="addEvent"></events-create-form>
  </div>
  <div class="col" v-for="event in events" :key="event.id">
    <div class="card text-white bg-dark mb-3" style="max-width: 150rem;">
          <div class="card-header">Event {{event.id}}</div>
          <div class="card-body">
          <h5 class="card-title">{{event.eventName}}</h5>
           <p class="card-text"><b>What:</b> {{event.eventDes}} <br> <b>When:</b> {{event.eventStart}} <br> <b>Where:</b> {{event.eventLocation}} <br> <b>Category:</b> {{event.eventCategory}}
           </p>
        </div>
    </div>
  </div>
  <event-create-form @created="addEvent"></event-create-form>
</template>

<script>
import moment from 'moment'
import EventCreateForm from '@/components/EventCreateForm'
export default {
  name: 'Events',
  components: { EventCreateForm },
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
