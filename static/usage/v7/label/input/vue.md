```html
<template>
  <ion-item>
    <ion-label>Default Label</ion-label>
    <ion-input placeholder="Enter text"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="fixed">Fixed Label</ion-label>
    <ion-input placeholder="Enter text"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="floating">Floating Label</ion-label>
    <ion-input placeholder="Enter text"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="stacked">Stacked Label</ion-label>
    <ion-input placeholder="Enter text"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label>Toggle</ion-label>
    <ion-toggle slot="end" checked></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-checkbox slot="start" checked></ion-checkbox>
    <ion-label>Checkbox</ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonCheckbox, IonInput, IonItem, IonLabel, IonToggle } from '@ionic/vue';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { IonCheckbox, IonInput, IonItem, IonLabel, IonToggle },
  });
</script>
```
