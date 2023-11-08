<template>
    <header class="bg-[#8183b9] bg-opacity-5">
        <LazyMenu/>
    </header>
    <div class="p-2 bg-[#8183b9] bg-opacity-5">
        <slot/>
    </div>


   <footer class="bg-black h-20 w-full flex justify-center  items-center relative">
    <NuxtLink to="/painel" class="text-gray-300  float-right">
      Administrador
    </NuxtLink>
   </footer>
  
  </template>
  