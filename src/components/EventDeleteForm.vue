<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#events-delete-offcanvas" aria-controls="#events-delete-offcanvas">
  Delete Event
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="events-delete-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">Delete Event</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="events-delete-form" novalidate>
        <div class="mb-3">
          <label for="event-name" class="form-label">Name of the event?</label>
          <input type="text" class="form-control" id="event-name" v-model="eventName" required>
          <div class="invalid-feedback">
            Seems like you haven't filled out the name of the event.
          </div>
        </div>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: rgba(255,255,255,0)">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createEvent">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventDeleteForm',
  data () {
    return {
      id: '',
      eventName: '',
      eventDes: '',
      eventStart: '',
      eventLocation: '',
      eventCategory: '',
      serverValidationMessages: []
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 10px;
  right: 100px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
