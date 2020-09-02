import { Notify } from 'quasar';

export const TypeMessage = {
  success: 'positive',
  warning: 'warning',
  info: 'info',
  error: 'negative',
};

export default function notify(message, type) {
  Notify.create({ message, type, position: 'bottom-right' });
}
