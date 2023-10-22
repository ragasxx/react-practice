export const useCopy = () => {
  const copy = async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard is not enabled");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(`there was some error copying the ${text}`, error);
    }
  };

  return copy;
};
