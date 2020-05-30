export const loadState = () => {
    try {
      const serializeState = localStorage.getItem('guestStore');
      if (serializeState === null) {
        return undefined;
      }
      return JSON.parse(serializeState);
    } catch (err) {
      return undefined;
    }
  };
  
  export const saveState = state => {
    try {
      const serializeState = JSON.stringify(state);
      localStorage.setItem('guestStore', serializeState);
    } catch (err) {
      //ignore that
    }
  };