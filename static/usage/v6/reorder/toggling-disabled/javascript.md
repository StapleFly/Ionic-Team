```html
<ion-list>
  <ion-reorder-group>
    <ion-item>
      <ion-label> Item 1 </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> Item 2 </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> Item 3 </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> Item 4 </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> Item 5 </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
  </ion-reorder-group>
</ion-list>

<!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
<ion-button onClick="toggleReorder()"> Toggle Reorder </ion-button>

<script>
  const reorderGroup = document.querySelector('ion-reorder-group');

  reorderGroup.addEventListener('ionItemReorder', ({ detail }) => {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', detail.from, 'to', detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    detail.complete();
  });

  function toggleReorder() {
    reorderGroup.disabled = !reorderGroup.disabled;
  }
</script>
```
