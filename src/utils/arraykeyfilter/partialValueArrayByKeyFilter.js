// eslint-disable-next-line max-len
const partialValueArrayByKeyFilter = (array, key, value) => array.filter((restaurant) => restaurant[key].toLowerCase().includes(value.toLowerCase()));


export default partialValueArrayByKeyFilter;
