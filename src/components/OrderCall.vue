<template>
  <div v-if="city" class="flex flex-row mb-4 input">
    <form class="flex flex-col" @submit="submitHandler">
      <div>
        <input v-model="name" type="text" placeholder="Иван Иванов" />
        <input v-model="phone" type="tel" placeholder="+7 . . ." />
        <input v-model="email" type="email" placeholder="you@example.com" />
      </div>
      <div class="flex justify-between">
        <TheButton
          text="Отменить"
          type="highlighted-red"
          @click="cancelHandler"
        />

        <TheButton
          :disabled="!isFormValid"
          text="Подтвердить"
          type="confirm"
          @click="submitHandler"
        />
      </div>
    </form>
  </div>
</template>

<script>
import TheButton from "./TheButton.vue";
export default {
  components: { TheButton },
  name: "OrderCall",
  props: {
    city: {
      type: Object,
      default: null,
    },
  },
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
    isPhoneValid() {
      const phoneRegex = /^\+?[7]{1}[0-9]{10}$/g;
      return phoneRegex.test(this.phone);
    },
    isEmailValid() {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      return emailRegex.test(this.email);
    },
    isFormValid() {
      return this.isNameValid && this.isPhoneValid && this.isEmailValid;
    },
  },
  methods: {
    cancelHandler() {
      this.name = "";
      this.phone = "";
      this.email = "";
      this.$store.commit("changeVisibilityDialog", false);
    },
    submitHandler() {
      const userData = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        city_id: this.city.city_id,
      };
      if (this.isNameValid && this.isPhoneValid && this.isEmailValid) {
        this.$store.dispatch("submitUser", userData);
      }
      this.cancelHandler();
    },
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
