<template>
  <div class="wrapper">
    <div class="title">
      Vue.js
      <a
        href="https://github.com/javkhaanj7/minimalist-developer/tree/master/a/vue-app"
        target="_blank"
      >
        <i class="fa fa-code-fork" aria-hidden="true"></i>
      </a>
    </div>
    <div class="flag">
      <span
        class="flag-icon flag-icon-mn"
        v-on:click="changeLocale('mn')"
      ></span>
      <span
        class="flag-icon flag-icon-gb"
        v-on:click="changeLocale('en')"
      ></span>
    </div>
    <div class="date">
      <i class="fa fa-clock-o" aria-hidden="true"></i>
      {{ today }}
    </div>
  </div>
</template>

<script>
import moment from "moment";

moment.locale("mn");

export default {
  name: "App",
  data: function () {
    return {
      today: moment().format("ll"),
    };
  },
  methods: {
    changeLocale(locale) {
      moment.locale(locale);
      this.today = moment().format("ll");
    },
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

body {
  background-color: #41b883;
}

a {
  color: #dcdcdc;
  text-decoration: none;
}

.wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.wrapper .title {
  margin: 10px 0px;
  font-size: 62px;
  color: white;
}

.wrapper .flag {
  margin: 10px 0px;
}

.wrapper .flag .flag-icon {
  margin: 0 4px;
}

.wrapper .flag .flag-icon:hover {
  cursor: pointer;
}

.wrapper .date {
  margin: 10px 0px;
  color: white;
}

.wrapper .flag,
.wrapper .date {
  font-size: 18px;
}
</style>
