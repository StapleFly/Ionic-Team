```html
<template>
  <ion-list>
    <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
    <ion-reorder-group :disabled="false" @ionItemReorder="handleReorder($event)">
      <ion-reorder>
        <ion-item>
          <ion-label> Item 1 </ion-label>
        </ion-item>
      </ion-reorder>

      <ion-reorder>
        <ion-item>
          <ion-label> Item 2 </ion-label>
        </ion-item>
      </ion-reorder>

      <ion-reorder>
        <ion-item>
          <ion-label> Item 3 </ion-label>
        </ion-item>
      </ion-reorder>

      <ion-reorder>
        <ion-item>
          <ion-label> Item 4 </ion-label>
        </ion-item>
      </ion-reorder>

      <ion-reorder>
        <ion-item>
          <ion-label> Item 5 </ion-label>
        </ion-item>
      </ion-reorder>
    </ion-reorder-group>
  </ion-list>
</template>

<script lang="ts">
  import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup },
    setup() {
      const handleReorder = (event: CustomEvent) => {
        // The `from` and `to` properties contain the index of the item
        // when the drag started and ended, respectively
        console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group
        event.detail.complete();
      };

      return { handleReorder };
    },
  });
</script>
```
