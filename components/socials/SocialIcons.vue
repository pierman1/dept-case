<template>
  <div class="social-icons">
    <ul class="social-icons__list">
      <li class="social-icons__list__item">
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="20"
            viewBox="0 0 10 20"
          >
            <title>
              facebook
            </title>
            <path
              fill="#000"
              fill-rule="evenodd"
              d="M6.821 20v-9h2.733L10 7H6.821V5.052C6.821 4.022 6.848 3 8.287 3h1.458V.14c0-.043-1.253-.14-2.52-.14C4.58 0 2.924 1.657 2.924 4.7V7H0v4h2.923v9h3.898z"
            />
          </svg>
        </a>
      </li>
      <li class="social-icons__list__item">
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 20 16"
          >
            <title>
              twitter
            </title>
            <path
              fill="#000"
              fill-rule="evenodd"
              d="M6.29 16c7.547 0 11.675-6.156 11.675-11.495 0-.175 0-.349-.012-.522A8.265 8.265 0 0020 1.89a8.273 8.273 0 01-2.356.637A4.07 4.07 0 0019.448.293a8.303 8.303 0 01-2.606.98 4.153 4.153 0 00-5.806-.175 4.006 4.006 0 00-1.187 3.86A11.717 11.717 0 011.392.738 4.005 4.005 0 002.663 6.13 4.122 4.122 0 01.8 5.625v.051C.801 7.6 2.178 9.255 4.092 9.636a4.144 4.144 0 01-1.852.069c.537 1.646 2.078 2.773 3.833 2.806A8.315 8.315 0 010 14.185a11.754 11.754 0 006.29 1.812"
            />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.social-icons {
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: column;

  @include mq($from: mobile) {
    position: relative;
    right: 0;
    flex-direction: row;
  }

  &__list {
    display: flex;
    flex-direction: column;

    @include mq($from: mobile) {
      flex-direction: row;
    }

    &__item {
      margin-bottom: 1rem;
      width: 1.875rem;

      @include mq($from: mobile) {
        margin-bottom: 0;
      }

      svg {
        path {
          fill: $dept-white;
        }
      }
    }
  }
}
</style>
