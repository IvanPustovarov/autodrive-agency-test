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
.input {
  color: black;
  input {
    padding: 5px;
    margin: 0 1rem 1rem 0;
    border-radius: 5px;
    border: 1px solid rgb(139, 134, 134);
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
