import Start from "../containers/Start";

export const showContainer = (state) => {
    const findActiveContainer = state.map(container => {
      if (container.value) {
        switch (container.name) {
          case 'Start':
            return <Start/>;
          default:
            return undefined;
        }
      }
    });
    const createNewState = findActiveContainer.filter(item => item !== undefined)
    return createNewState[0];
}