<template>
  <div>
    Header
  {{ usersList }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

//mapGetters('users', ['usersList']);

export default {
  name: 'Header',
  computed: {
    ...mapGetters("users", ["usersList"])
  }
}
</script>