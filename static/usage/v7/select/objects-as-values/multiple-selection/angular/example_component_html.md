```html
<ion-list>
  <ion-item>
    <ion-select
      aria-label="Food"
      [compareWith]="compareWith"
      placeholder="Select food"
      (ionChange)="handleChange($event)"
      [multiple]="true"
    >
      <ion-select-option *ngFor="let food of foods" [value]="food">{{ food.name }}</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
```
