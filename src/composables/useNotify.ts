import { useSnackBarStore } from '@/stores/snackbar';

export function useNotify() {
  const notify = useSnackBarStore();
  return {
    success: notify.success,
    error: notify.error,
    clearNotify: notify.clearNotify,
  };
}
