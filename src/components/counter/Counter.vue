<template>
    <div>
        <a-progress type="circle"  :percent = "200" :format="percent => `${percent} min`" />
    </div>
</template>

<script>
import timeUtil from '../utils/time'

export default {
  name: 'Counter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      percent: 25 * 60,//s
    }
  },
  create () {
      this.timer = setInterval(()=>{
        this.times--
        timeUtil.formatTime(this.times)
        if(this.times===0){
          clearInterval(this.timer)
        }
      },1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
