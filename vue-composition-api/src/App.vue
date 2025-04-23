<template>
  <!-- <GlobalStyle />
  <LocalStyle /> -->
  <!-- <CombinedStyle /> -->
  <!-- <ModuleStyle /> -->
  <!-- <MyEvent /> -->
  <!-- <MyReactiveComponent/> -->
  <!-- <MyRefComponent /> -->
  <!-- <MyComputedProperties /> -->
  <!-- <ConditionalRendering />    -->
  <!-- <IterationComponent /> -->
  <!-- <StaticPropsComponent name="Suyog"/>
  <hr>
  <DynamicPropsComponent :first="firstname" :last="lastname"/>
  <hr>
  <ChangingPropsValue :favNumber="favNumber"/>
  <hr>
  <PropValidation fullname="Jordan" :age="34"/>
  <hr>
  <ComplexProps :friends="['alex', 'john', 'mike']" :userInfo="{name: 'alex', age: 25, location: ['Earth', 'IDK']}"/> -->
  <!-- <hr> -->
  <!-- <CustomValidator name="Mike" :age=30 password="impossiblePassword"/> -->
   <!-- <h1>{{ count }}</h1> -->
  <!-- <ComponentEvent @incrementCount="count++"/> -->
  <!-- <FormComponent @userInfo="formHandler"/> -->

  <!-- <SlotComponent>
    <h1>Content 1</h1>
    <h2>Content 2</h2>
  </SlotComponent> -->

  <!-- <FallbackContent></FallbackContent> -->
  <!-- <FallbackContent>
    <p>Fallback will not work because i am providing content inside the component.</p>
  </FallbackContent> -->

  <!-- <NamedSlot>
    <template v-slot:one>
      <h1>This content will go to slot "one"</h1>
    </template>

    <template #two>
      <h1>This content will go to slot "two"</h1>
    </template>
  </NamedSlot> -->

  <!-- <hr> -->

  <!-- <DefaultSlot>
    <template #default>
      <h1>This is some random default slot</h1>
    </template>
  </DefaultSlot> -->

  <!-- <SchoolComponent /> -->

  <!-- <PracticeComponent /> -->

   <!-- <LifeCycleComponent v-if="showHide" /> -->
   <!-- <button @click="showHide = !showHide">Show / Hide</button> -->
  
  <!-- <Watchers /> -->

   <!-- <ReactiveObject /> -->

  <!-- <MultipleSources /> -->

   <!-- <BasicRef /> -->

  <!-- <FunctionRef /> -->

  <!-- <RefComponent />  -->

  <!-- <ToggleFriends /> -->

  <CounterComponent />
</template>

<script setup>
// import { ref } from 'vue';
// import { provide } from 'vue'
// import GlobalStyle from './components/GlobalStyle.vue';
// import LocalStyle from './components/LocalStyle.vue';
// import CombinedStyle from './components/CombinedStyle.vue';
// import ModuleStyle from './components/ModuleStyle.vue';
// import MyEvent from './components/MyEvent.vue';
// import MyReactiveComponent from './components/MyReactiveComponent.vue';
// import MyRefComponent from './components/MyRefComponent.vue';
// import MyComputedProperties from './components/MyComputedProperties.vue';
// import ConditionalRendering from './components/ConditionalRendering.vue';
// import IterationComponent from './components/IterationComponent.vue';
// import ComponentEvent from './components/ComponentEvent.vue';
// import FormComponent from './components/FormComponent.vue';
// import SlotComponent from './components/SlotComponent.vue';
// import FallbackContent from './components/FallbackContent.vue';
// import NamedSlot from './components/NamedSlot.vue';
// import DefaultSlot from './components/DefaultSlot.vue';
// import SchoolComponent from './components/SchoolComponent.vue'
// import PracticeComponent from './components/PracticeComponent.vue';
// import LifeCycleComponent from './components/LifeCycleComponent.vue';
// const showHide = ref(true)
// import Watchers from './components/Watchers.vue';
// import ReactiveObject from './components/ReactiveObject.vue';
// import MultipleSources from './components/MultipleSources.vue';
// import BasicRef from './components/BasicRef.vue';
// import FunctionRef from './components/FunctionRef.vue';
// import RefComponent from './components/RefComponent.vue';
// import ToggleFriends from './components/ToggleFriends.vue';
import CounterComponent from './components/CounterComponent.vue';


// import StaticPropsComponent from './components/StaticPropsComponent.vue';
// import DynamicPropsComponent from './components/DynamicPropsComponent.vue';
// import ChangingPropsValue from './components/ChangingPropsValue.vue';
// import PropValidation from './components/PropValidation.vue';
// import ComplexProps from './components/ComplexProps.vue';
// import CustomValidator from './components/CustomValidator.vue';

// const firstname = ref('Suyog');
// const lastname = ref('Ghate');
// const favNumber = 8;

// component event
// let count = ref(0)

// const formHandler = (username, email, password) => {
//   console.log('username', username);
//   console.log('email', email);
//   console.log('password', password);
// }

// const studentName = "Alex"
// const studentAge = 20
// const studentLocation = ['Earth', 'IDK']

// provide('studentName', 'Alex')
// provide('studentAge', 20)
// provide('studentLocation', ['Earth', 'IDK'])

// provide array
// provide('friends', ['Alex', 'Jordan', 'Huxn', 'John'])

// Provide object
// provide('games', {
//   id: 1,
//   title: "GTA SanAndreas",
//   genre: ['Action', 'Mission'],
//   platform: ['PC', 'PlayStation', 'Xbox', 'Nitendo Switch'],
//   releaseDate: '2023-03-16',
//   developer: {
//     name: 'Rockstar Games',
//     location: 'San Francisco, CA',
//     teamSize: 50
//   }
// })

// Provide array of Objects
// provide('moreGames', [
//   {
//     title: 'Space Explorer',
//     genre: 'Sci-Fi',
//     platform: 'PC',
//     releaseDate: '2023-05-20'
//   },
//   {
//     title: 'Fantasy Quest',
//     genre: 'Fantasy',
//     platform: 'PlayStation',
//     releaseDate: '2023-07-10'
//   },
//   {
//     title: 'Inception',
//     director: 'Christopher Nolan',
//     genre: 'Sci-Fi',
//     releaseDate: '2010-07-16'
//   },
//   {
//     title: 'The Shawshank Redemption',
//     director: 'Frank Darabont',
//     genre: 'Drama',
//     releaseDate: '1994-09-23'
//   }
// ])

</script>

<style scoped>

</style>