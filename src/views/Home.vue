<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter" :style="{ color: $store.state.color }">
      {{ $store.state.counter }}
    </div>
    <class class="counter-square">
      {{ $store.state.counter }}
      <sup>2</sup> = 
      {{ $store.getters.squareCounter }}
    </class>
    <div class="buttons">
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
    <div>
      <input 
      v-model="color"
      type="text" 
      placeholder="Masukkan Warna">
    </div>
  </div>
</template>
<style>
.counter {
  font-size: 80px;
}
.buttons button {
  font-size: 20px;
  padding: 10px;
  margin: 2px;
  width: 100px;
}
</style>
<script>
  export default {
    name: 'Home',
    methods: {
    },
    computed: {
      color: {
        get(){
          return this.$store.state.color
        },
        set(data){
          this.$store.dispatch('setColor', data)
        }
      }
    }
  }
</script>