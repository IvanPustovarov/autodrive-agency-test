<template>
  <div
    class="bg-gray-50 h-full"
    :class="{ ordercall: visibilityDialog }"
  >
    <div
      class="
        max-w-7xl
        mx-auto
        py-12
        px-4
        sm:px-6
        lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between
      "
    >
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <TheButton
          type="default"
        />
      </div>
      <dialog
        class="backdrop:bg-gray-50 open:bg-white open:text-white modal-window"
        :open="visibilityDialog"
      >
      </dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    visibilityDialog() {
      return this.$store.state.isShow;
    },
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
}

.ordercall {
  background-color: rgb(92, 89, 89);
}
.disabled {
  display: none;
}

.modal-window {
  border-radius: 5px;
  position: absolute;
  top: 10rem;
}
</style>
