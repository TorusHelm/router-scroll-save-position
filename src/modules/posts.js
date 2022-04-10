const imgPreset = 'https://picsum.photos/id/';
const imgPostfix = '/1024/1024';
const createImageUrl = (id) => {
  return imgPreset + id + imgPostfix;
}

const posts = () => {
  return {
    '2': {
      image: createImageUrl(1),
      title: 'title 2',
      text: 'lorem',
    },
    '3': {
      image: createImageUrl(2),
      title: 'title 3',
      text: 'lorem',
    },
    '5': {
      image: createImageUrl(3),
      title: 'title 5',
      text: 'lorem',
    },
    '23': {
      image: createImageUrl(4),
      title: 'title 23',
      text: 'lorem',
    },
    '34': {
      image: createImageUrl(5),
      title: 'title 34',
      text: 'lorem',
    },
    '56': {
      image: createImageUrl(6),
      title: 'title 56',
      text: 'lorem',
    },
    '1': {
      image: createImageUrl(7),
      title: 'title 1',
      text: 'lorem',
    }
  };
};

export default { imgPreset, imgPostfix, posts };