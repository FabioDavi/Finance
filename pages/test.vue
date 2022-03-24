<template>
<div>

  <div v-if="$fetchState.pending">
  FUckink loading
  </div>


  <div v-else>
    <!--div>{{products}}</div-->
    <div v-for="product in products" :key="product.id" class="border-b border-gray-400 py-3">
      {{product.title}}
    </div>
    <br/><br/><br/>
    <div>
      {{ $fetchState }}
    </div>
 </div>
 <br/><br/><br/>
 <div v-for="s in services" :key="s.id" class="border-b border-gray-400 py-3">
    {{s.username}}
  </div>
</div>

</template>

<script>
export default {
  name: 'teste',

  data() {
    return {
      services:[]
    };
  },

//executed BEFORE the component is created
//asyncData is mixed with data() above
//there is two ways to get data.. fetch and ansyncdata
//fetch runs diferently from asyncdata, fetch runs AFTER the component is created, also FETCH access THIS...
//the big difference among them is that in fecth u must declare at DATA
//fetch is good to put a loading page,,, and it ll run
//it is very interesting to show loadind.. because it doesn´t block the route

async asyncData({$axios}){
const products = await $axios.$get('https://jsonplaceholder.typicode.com/posts?_limit=3')
  return{
    products,
  }
},


async fetch(){
  /*await new Promise((resolve) => {
  setTimeout(()=>{
    resolve();
    console.log('c');
  },3000)
  })*/
  this.services = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
  console.log(this);

},


  methods:{

  }

}
</script>

<style>

</style>
