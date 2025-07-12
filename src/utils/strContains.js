
const strContains = (string, search) => {
    return (string.toLowerCase().includes(search.toLowerCase()) ||  search === '');
};

export default strContains;