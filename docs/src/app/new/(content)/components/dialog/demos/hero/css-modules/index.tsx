import * as React from 'react';
import { Dialog } from '@base-ui-components/react/dialog';
import styles from './index.module.css';

export default function ExampleDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={styles.Trigger}>View notifications</Dialog.Trigger>
      <Dialog.Backdrop className={styles.Backdrop} />
      <Dialog.Popup className={styles.Popup}>
        <Dialog.Title className={styles.Title}>Your notifications</Dialog.Title>
        <Dialog.Description className={styles.Description}>
          You are all caught up. Good job!
        </Dialog.Description>
        <div className={styles.Actions}>
          <Dialog.Close className={styles.Close}>Close</Dialog.Close>
        </div>
      </Dialog.Popup>
    </Dialog.Root>
  );
}