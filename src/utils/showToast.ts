import { toast } from 'react-toastify'

export type ToastTypes = 'success' | 'warning' | 'error' | 'info'

export const showToast = (
  message: string,
  type?: ToastTypes,
  duration?: 'fast' | 'normal' | 'slow',
): void => {
  const durationToast = {
    fast: 2500,
    normal: 4000,
    slow: 7000,
  }

  if (!type) {
    toast(message, { autoClose: durationToast[duration || 'normal'] })
    return
  }

  toast[type](`${message}`, { autoClose: durationToast[duration || 'normal'] })
}
