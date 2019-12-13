<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
 import home from "./components/home/home";

export default {
    name: 'App',
    components:{
        Home: home
    },
    created() {
      console.log('app created')
      try {
        let keys = ['api', 'model_cases', 'model_scenes', 'email_methods', 'is_start_status'];
        for (let i = 0; i < keys.length; i++) {
          this.my_get_localStore(keys[i])
        }
        let my_list = ['group', 'header', 'mysql'];
        if (this.$store.state.my_list.length ===0){
          this.$store.commit('SetDate', {key:'my_list', value:my_list})
        }
        for (let i = 0; i < my_list.length; i++) {
          let list_name = my_list[i] + '_list';
          if (this.$store.state.my_all_table[list_name].length === 0) {
            if (localStorage.getItem('my_all_table' + list_name)) {
              this.$store.state.my_all_table[list_name] = JSON.parse(localStorage.getItem('my_all_table' + list_name))
            }
          }
        }
      }catch (e) {
        console.log('e', e)
      }
    }
}
</script>

<style>
</style>
