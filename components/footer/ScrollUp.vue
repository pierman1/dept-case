<template>
  <div class="scroll-up">
    <button class="scroll-up__button" @click="scrollUp">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="31"
        viewBox="0 0 14 31"
      >
        <g fill="#1A18F7" fill-rule="evenodd">
          <path d="M6 9h3v22H6z" />
          <path d="M14 11L6.993 0 0 11z" />
        </g>
      </svg>
      <span>
        Up
      </span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    scrollUp() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-up {
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  &__button {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    font-size: 1.375rem;
    font-family: $text-font-stack;
    color: $dept-blue;
  }
}
</style>
