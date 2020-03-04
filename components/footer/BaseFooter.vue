<template>
  <footer class="footer">
    <div class="w-full">
      <div class="container">
        <div class="container-inner">
          <logo class="logo" is-white />
          <footer-menu />
          <social-icons class="socials" />
        </div>
        <div class="container-inner">
          <footer-sub-menu />
          <div class="copyright">© {{ date.getFullYear() }} Dept Agency</div>
        </div>
      </div>
    </div>
    <div class="scroll-up-container">
      <scroll-up />
    </div>
  </footer>
</template>

<script>
import ScrollUp from './ScrollUp'
import FooterMenu from './FooterMenu'
import FooterSubMenu from './FooterSubMenu'
import SocialIcons from '@/components/socials/SocialIcons'
import Logo from '@/components/logo/BaseLogo'

export default {
  name: 'BaseFooter',
  computed: {
    date() {
      return new Date()
    }
  },
  components: {
    Logo,
    ScrollUp,
    FooterMenu,
    FooterSubMenu,
    SocialIcons
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: $brand-color;
  color: $dept-white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @include mq($from: mobile) {
    flex-direction: row;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    padding-top: 60px;

    @include mq($from: desktop) {
      padding-top: 100px;
      padding-bottom: 100px;
      padding-right: 120px;
    }

    .container-inner {
      flex-direction: column;
      display: flex;
      border-bottom: 2px solid $dept-border-color-dark;
      padding-bottom: 30px;

      @include mq($from: mobile) {
        align-items: flex-end;
        flex-direction: row;
      }

      &:nth-child(2) {
        color: $dept-darkgrey;
        font-family: 'Arial';
        font-size: 0.75rem;
        border: 0;
      }
    }
  }

  .scroll-up-container {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: none;
    width: 100px;
    background-color: $dept-white;

    @include mq($from: desktop) {
      display: initial;
    }
  }
}

.logo {
  display: none;

  @include mq($from: tablet) {
    width: 250px;
    display: initial;
  }
}

.copyright {
  margin-top: 25px;
}

.socials,
.copyright {
  @include mq($from: tablet) {
    margin-left: auto;
  }
}
</style>
