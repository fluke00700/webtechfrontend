<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">WasWannWo </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/events">All Events</router-link>
          <router-link class="nav-link" to="/eventstoday">Today's Events</router-link>
        </div>
        </div>
      </div>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <router-link class="nav-link" to="/eventseating"><img src="https://img.icons8.com/material/24/000000/hamburger--v1.png"/>   Eating</router-link>
        <router-link class="nav-link" to="/eventsmeeting"><img src="https://img.icons8.com/material-rounded/24/000000/user-group-man-woman.png"/>Meeting</router-link>
        <router-link class="nav-link" to="/eventsappointment"> <img src="https://img.icons8.com/material-outlined/24/000000/calendar--v2.png"/>Appointment</router-link>
        <router-link class="nav-link" to="/eventschilling"><img src="https://img.icons8.com/material-two-tone/24/000000/beach--v2.png"/>Chilling</router-link>
        <router-link class="nav-link" to="/eventsothers"><img src="https://img.icons8.com/material-rounded/24/000000/inscription.png"/>Others</router-link>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
</style>
