<template>
  <div class="col" v-for="event in events" :key="event.id" >
    <div class="card text-white bg-dark mb-3" style="max-width: 150rem;">
      <div class="card-header">Event {{event.id}} <button @click="deleteclicked(event.id)" type="button" class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg></button> </div>
      <div class="card-body">
        <h5 class="card-title">{{event.eventName}}</h5>
        <p class="card-text"><b>What:</b> {{event.eventDes}} <br> <b>When:</b> {{rearrangeDate(event.eventStart)}} <br> <b>Where:</b> {{event.eventLocation}} <br> <b>Category:</b> {{event.eventCategory}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
function deleteEvent (id) {
  const requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  }
  fetch(process.env.VUE_APP_BACKEND_BASE_URL + '/events/' + id, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
  document.getElementById('demo').innerHTML = 'Event' + id + ' successfully deleted.'
}
export default {
  name: 'AllEventsCard',
  components: { },
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
  props: {
    propevents: {
      type: Array,
      required: true
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
    },
    deleteclicked: function (id) {
      deleteEvent(id)
    }
  }
}

</script>
<style scoped>
</style>
