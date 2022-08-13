import { createSignal, Show } from "solid-js";

const [alertMessage, setAlertMessage] = createSignal("");
let timer: number;

export const displayAlert = (message: string, duration: number) => {
  setAlertMessage(message);
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    setAlertMessage("");
  }, duration);
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