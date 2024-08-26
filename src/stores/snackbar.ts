import { defineStore } from 'pinia';

type SnackBarInfoState = {
  message: string;
  type?: string;
  location?: string;
  timeout?: number;
};

type SnackBarState = {
  notify: boolean;
  notifyInfo: SnackBarInfoState;
};

const defaultLocation = {
  location: 'top',
};

const defaultTimeout = {
  timeout: 4000,
};

interface SnackBarActions {
  createNotify(payload: SnackBarInfoState): void;
  error(payload: { message: any; type: string }): void;
  success(payload: SnackBarInfoState): void;
  clearNotify(): void;
}

export const useSnackBarStore = defineStore<
  string,
  SnackBarState,
  Record<string, any>,
  SnackBarActions
>('snackbar', {
  state: () => ({
    notify: false,
    notifyInfo: {
      message: '',
      type: '',
      location: defaultLocation.location,
      timeout: defaultTimeout.timeout,
    },
  }),
  actions: {
    createNotify(payload: SnackBarInfoState) {
      if (this.notify) {
        this.notify = false;
      }
      setTimeout(() => {
        this.notify = true;
        this.notifyInfo = {
          ...defaultLocation,
          ...defaultTimeout,
          ...payload,
        };
      }, 0);
    },
    error(payload: SnackBarInfoState) {
      this.createNotify({
        ...defaultLocation,
        ...defaultTimeout,
        ...payload,
        type: 'error',
      });
    },
    success(payload: SnackBarInfoState) {
      this.createNotify({
        ...defaultLocation,
        ...defaultTimeout,
        ...payload,
        type: 'success',
      });
    },
    clearNotify() {
      this.notify = false;
      setTimeout(() => {
        this.notifyInfo = {
          message: '',
          type: '',
          location: defaultLocation.location,
          timeout: defaultTimeout.timeout,
        };
      }, 0);
    },
  },
});
