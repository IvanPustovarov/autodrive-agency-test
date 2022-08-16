<template>
  <div v-if="city" class="flex flex-row mb-4 input">
  </div>
</template>

<script>
export default {
  name: "OrderCall",
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  computed: {
    isNameValid() {
      return this.name.length;
    },
  methods: {
  },
};
</script>

<style scoped lang="scss">
</style>
