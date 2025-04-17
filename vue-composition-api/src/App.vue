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

  <hr>

  <DefaultSlot>
    <template #default>
      <h1>This is some random default slot</h1>
    </template>
  </DefaultSlot>

</template>

<script setup>
// import { ref } from 'vue';
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
import DefaultSlot from './components/DefaultSlot.vue';


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
</script>

<style scoped>

</style>