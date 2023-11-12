const bus = () => {
  const on = (event: string, callback: any) => {
    window.addEventListener(event, callback, false);

    onUnmounted(() => {
      window.removeEventListener(event, callback);
    });
  };

  const emit = (eventToSend: string, data: unknown = {}) => {
    const event = new CustomEvent(eventToSend, {
      detail: data,
    });
    window.dispatchEvent(event);
    return data;
  };

  return { on, emit };
};
export const $busEvent = bus();

export default bus();
