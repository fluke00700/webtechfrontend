<template>
  <div class="p-3 mb-2 bg-dark text-white" style= "max-width: 150rem;"><h1> Your Chilling Events </h1>
  </div>
  <ChillingEventCard></ChillingEventCard>
</template>

<script>
import ChillingEventCard from '@/components/ChillingEventCard'
export default {
  name: 'EventsChilling',
  components: { ChillingEventCard }
}
</script>

<style scoped>

</style>
