<template>
  <div class="attribution">
    <span>Challenge by</span>
    <a :href="frontMentorUrl" target="_blank">Frontend Mentor</a>. Coded by
    <a href="#">{{ codedBy }}</a
    >.
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      frontMentorUrl: 'https://www.frontendmentor.io?ref=challenge',
      codedBy: 'Roy Willynson',
    };
  },
});
</script>

<style lang="scss" scoped>
.attribution {
  font-size: 11px;
  text-align: center;

  a {
    color: hsl(228, 45%, 44%);
  }
}
</style>
