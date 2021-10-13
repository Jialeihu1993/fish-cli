export default {
  state: {
    id: 123,
    name: 'cc'
  },
  reducers: {
    setName(state, payload) {
      return {
        ...state,
        ...payload
      };
    }
  },
  effects: {
    async setNameAsync(dispatch, state, payload) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch({
        type: 'setName',
        payload
      });
    }
  }
};
