<template>
  <nuxt-link aria-label="To project" to="/" v-animate="'slide-up'">
    <article class="case-base" :class="{ type, 'is-small': hideImage }">
      <figure class="case-base__picture" v-if="data.caseImage && !hideImage">
        <picture>
          <source
            :data-srcset="require(`~/assets/images/${data.caseImage}?webp`)"
            type="image/webp"
          />
          <source
            :data-srcset="require(`~/assets/images/${data.caseImage}`)"
            type="image/png"
          />
          <img
            class="lazyload image"
            :alt="data.caseParty"
            v-if="data.caseImage && !hideImage"
            :data-src="require(`~/assets/images/${data.caseImage}`)"
          />
        </picture>
      </figure>

      <div class="case-base__party">
        {{ data.caseParty }}
      </div>

      <h2 class="case-base__title">
        {{ data.caseDescription }}
      </h2>

      <client-only>
        <nuxt-link tabindex="-1" class="case-link" :to="`/cases/${data.id}`">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="9"
            viewBox="0 0 7 9"
          >
            <path fill="#1A18F7" fill-rule="evenodd" d="M0 9l7-4.505L0 0z" />
          </svg>
          <span>
            View case
          </span>
        </nuxt-link>
      </client-only>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CaseBase',
  props: {
    data: {
      type: Object,
      required: true
    },
    hideImage: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.case-base {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
  transition: 250ms background-color;

  @include mq($from: mobile) {
    margin-bottom: 80px;
  }

  .image {
    width: 100%;
    height: auto;
    margin-bottom: 18px;
    object-fit: fill;
  }

  &__picture {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: 250ms box-shadow;
    }
  }

  .case-link {
    font-family: 'Arial';
    font-weight: bold;
    position: relative;
    color: $dept-blue;
    display: none;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 0.625rem;
      transition: 250ms margin-right;
    }

    @include mq($from: tablet) {
      display: flex;
    }
  }

  &__party {
    color: $dept-darkgrey;
    font-family: 'Arial';
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  &__title {
    font-weight: 400;
    margin: 12px 0 14px;
  }

  &:hover {
    .case-base__picture {
      &:before {
        box-shadow: 0 0 0 10px #fff inset;
      }
    }

    .case-link {
      svg {
        margin-right: 20px;
      }
    }
  }

  &.list {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    padding-bottom: 1rem;
    border-bottom: 1px solid $dept-border-color;

    @include mq($from: mobile) {
      width: 100%;
    }

    .case-base__picture {
      margin: 0;
      display: none;
    }

    .case-base__party,
    .case-base__title {
      margin: 0;
      width: 100%;
    }
  }

  &.is-small {
    margin-bottom: 0;
  }
}

a:focus {
  border: inherit;
  .case-base {
    background-color: $dept-light-blue;
  }
}
</style>
