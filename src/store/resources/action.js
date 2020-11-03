export function addResource(name, type, url) {
    return {
      type: "ADD_RESOURCE",
      payload: {
        id: Math.random(),
        name,
        type,
        url,
      },
    };
  }