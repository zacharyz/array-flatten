const flatten = require("./flatten");

test('flatten function exists', () => {
    expect(typeof flatten).toEqual('function');
});

test('flatten an already flattened array', () => {
    const flattened = flatten([1, 2, 3, 4, 5, 6]);
    expect(flattened).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]));
});


test('flatten nested array', () => {
    const flattened = flatten([1, [2, [3, [4, [5, 6]]]]]);
    expect(flattened).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]));
});
