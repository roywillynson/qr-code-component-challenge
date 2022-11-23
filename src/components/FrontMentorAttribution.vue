<template>
  <div class="attribution">
    <span>Challenge by &nbsp;</span>
    <a :href="frontMentorUrl" target="_blank"> Frontend Mentor</a>. Coded by
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
@import '@/assets/variables.scss';
.attribution {
  display: none;
  font-size: 11px;
  text-align: center;
  position: absolute;
  right: 0;
  top: 0;
  margin: 15px auto;

  @media screen and (min-width: $mobile-breakpoint) {
    display: block;
  }
}
</style>
