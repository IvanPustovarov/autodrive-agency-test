<template>
  <button
    type="button"
    :class="type"
    class="
      inline-flex
      items-center
      justify-center
      text-sm text-white
      font-semibold
      rounded
      border
      hover:bg-white
      focus:outline-none focus:ring-2
    "
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "OrderCall",
  props: {
    text: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.default {
  padding: 0.75rem 5rem 0.75rem 5rem;
  margin: 0 0.5rem 0 0.5rem;
  background-color: #2563eb;
  &:hover {
    color: #0c4a6e;
    background-color: white;
  }
  &:focus {
    --tw-ring-offset-width: 2px;
    box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),
      var(--tw-ring-shadow);
  }
}
.confirm {
  padding: 0.5rem 2.5rem 0.5rem 2.5rem;
  background-color: #3fbb41;
  &:disabled {
    background-color: #ceb7b7;
  }
  &:hover {
    color: #3fbb41;
    background-color: white;
  }

  &:disabled:hover {
    color: white;
    background-color: #ceb7b7;
  }
}
.highlighted-red {
  padding: 0.5rem 2.5rem 0.5rem 2.5rem;
  background-color: #ea4747;
  &:hover {
    color: #ea4747;
    background-color: white;
  }
}
</style>
