```html
<template>
  <ion-nav :root="component"></ion-nav>
</template>

<script lang="ts">
  import { markRaw } from 'vue';
  import { IonNav } from '@ionic/vue';
  import PageOne from './PageOne.vue';

  export default {
    components: { IonNav },
    data() {
      return {
        component: markRaw(PageOne),
      };
    },
  };
</script>
```
