# ion-infinite-scroll

The Infinite Scroll component calls an action to be performed when the user scrolls a specified distance from the bottom or top of the page.

The expression assigned to the `ionInfinite` event is called when the user reaches that defined distance. When this expression has finished any and all tasks, it should call the `complete()` method on the infinite scroll instance.

## Infinite Scroll Content

The `ion-infinite-scroll` component has the infinite scroll logic. It requires a child component in order to display content. Ionic uses its `ion-infinite-scroll-content` component by default. This component displays the infinite scroll and changes the look depending on the infinite scroll's state. It displays a spinner that looks best based on the platform the user is on. However, the default spinner can be changed and text can be added by setting properties on the `ion-infinite-scroll-content` component.

## Custom Content

Separating the `ion-infinite-scroll` and `ion-infinite-scroll-content` components allows developers to create their own content components, if desired. This content can contain anything, from an SVG element to elements with unique CSS animations.

## Usage with Virtual Scroll

Infinite scroll requires a scroll container to function. When using a virtual scrolling solution, you will need to disable scrolling on the `ion-content` and indicate which element container is responsible for the scroll container with the `.ion-content-scroll-host` class target.

```html
<ion-content scroll-y="false">
  <virtual-scroll-element class="ion-content-scroll-host">
    <!-- Your virtual scroll content -->
  </virtual-scroll-element>
  <ion-infinite-scroll>
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```

## Interfaces

### InfiniteScrollCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface InfiniteScrollCustomEvent extends CustomEvent {
  target: HTMLIonInfiniteScrollElement;
}
```