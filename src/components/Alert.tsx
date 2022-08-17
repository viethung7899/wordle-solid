import { Show } from "solid-js";
import createLocalStorageSignal from "../utils/signals/createLocalStorageSignal";

const [alertMessage, persistAlertMessage, setAlertMessage] = createLocalStorageSignal("ALERT_MESSAGE", "");

export const displayAlert = (message: string, duration?: number) => {
  clearTimeout();
  if (duration) {
    setAlertMessage(message);
    setTimeout(() => setAlertMessage(""), duration);
  } else {
    persistAlertMessage(message);
  }
}

const Alert = () => {
  return (
    <Show when={alertMessage().length !== 0}>
      <div class="absolute mt-10 alert z-10">
        <span class="text-gray-900 bg-gray-50 rounded-md p-4 font-bold">{alertMessage()}</span>
      </div>
    </Show>
  )
};

export default Alert;