```tsx
import React from 'react';
import { IonButton, useIonLoading } from '@ionic/react';
function Example() {
  /**
   * This example does not make use of the dismiss
   * method returned from `useIonLoading`, but it can
   * be used for more complex scenarios.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [present, dismiss] = useIonLoading();
  return (
    <IonButton
      onClick={() => {
        present({
          message: 'Loading...',
          duration: 3000,
          spinner: 'circles',
        });
      }}
    >
      Show Loading
    </IonButton>
  );
}
export default Example;
```
