<template>
  <div
    class="bg-gray-50 h-full"
    v-if="!callbackForm"
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
          v-for="city in cities"
          :key="city.city_id"
          :disabled="visibilityDialog"
          :class="{ disabled: visibilityDialog }"
          type="default"
          :text="city.text"
          @click="goToCity(city)"
        />
      </div>
      <dialog
        class="backdrop:bg-gray-50 open:bg-white open:text-white modal-window"
        :open="visibilityDialog"
      >
        <form method="dialog">
          <h1 class="text-black font-bold mb-5" v-if="city">
            Заказать звонок в город {{ city.name }}
          </h1>
          <OrderCall :city="city" />
        </form>
      </dialog>
    </div>
  </div>
  <div v-if="callbackForm">
    <div v-html="callbackForm"></div>
    <TheButton @click="fillFormAgain" text="Отправить снова" type="default" />
  </div>
</template>

<script>
import "@/index.css";
import OrderCall from "@/components/OrderCall.vue";
import TheButton from "./components/TheButton.vue";
import filterXSS from "xss";

export default {
  name: "App",
  components: {
    OrderCall,
    TheButton,
  },
  methods: {
    goToCity(city) {
      this.city = city;
      this.$store.commit("changeVisibilityDialog", true);
    },
    fillFormAgain() {
      this.$store.commit("setCallbackForm", null);
    },
  },
  data() {
    return {
      city: null,
    };
  },
  computed: {
    visibilityDialog() {
      return this.$store.state.isShow;
    },
    cities() {
      return this.$store.state.cities;
    },
    callbackForm() {
      const sourseText = this.$store.state.callbackForm;
      filterXSS(sourseText, {
        whiteList: {
          a: ["target", "href"],
        },
        onTag: (tag, html) => (tag === "br" ? " " : html),
      });
      return sourseText;
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
