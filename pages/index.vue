<template>
  <div class=" m-8 max-w-full w-[500px] bg-white border rounded-md p-8">
    <RegisterForm />
  </div>
  </template>
  <script lang="ts" setup>
  import RegisterForm from "../components/form/RegisterFrom.vue";
  const components = {
    RegisterForm,
  };
  definePageMeta({
    authRequired: false,
    layout: "authentication",
    name:'register'
  });
  </script>
  