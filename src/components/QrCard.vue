<template>
  <article class="card">
    <div class="card__image">
      <img src="/images/image-qr-code.png" alt="Code QR" />
    </div>

    <div class="card__body">
      <strong class="title"
        >Improve your front-end skills by building projects</strong
      >
      <p class="subtitle">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.card {
  $card-width: 300px;
  animation-duration: 2s;
  animation-name: slide-top-in;
  background-color: $white;
  border-radius: $border-radius-size-medium;
  box-shadow: -15px 15px 45px 20px darken($light-gray, 5%);
  position: absolute;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
  width: 100%;
  margin: auto 15px;

  &__image {
    border-radius: $border-radius-size-normal;
    margin: {
      top: 15px;
      left: 15px;
      right: 15px;
    }
    overflow: hidden;

    img {
      display: block;
      max-width: 100%;
    }
  }

  &__body {
    text-align: center;
    padding: 25px 20px;
  }

  @media screen and (min-width: $mobile-breakpoint) {
    width: $card-width;
    margin: auto;
  }

  @media screen and (orientation: landscape) and (-webkit-max-device-pixel-ratio: 2) and (max-width: 767px) {
    width: 500px;
    display: flex;
    &__image {
      margin: {
        top: 15px;
        left: 15px;
        bottom: 15px;
      }

      display: inline-block;
    }
    &__body {
      display: inline-block;
      text-align: left;
      vertical-align: middle;
    }
  }
}
</style>
