export const bar = (length = 10) => ({
  data: Array.from({ length: length }, () => ({
    x: Math.random().toString(36).slice(2, 7),
    y: Math.floor(Math.random() * 100),
  })),
  annotation: {
    title: 'Main title',
    axes: {
      x: 'X axis title',
      y: 'Y axis title',
    },
  },
  dim: {
    width: 300,
    height: 300,
    margin: {
      top: 10,
      right: 15,
      bottom: 20,
      left: 20,
    },
  },
});
