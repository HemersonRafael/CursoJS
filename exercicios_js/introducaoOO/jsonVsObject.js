const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c}}
console.log(JSON.stringify(obj))
//console.log(JSON.parse('{a: 1 , b: 2, c: 3}')) erro sem aspas duplas
//console.log(JSON.parse('{'a': 1 , 'b': 2, 'c': 3}')) erro chaves deve ser com aspas duplas
console.log(JSON.parse('{"a": 1 , "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1 , "b": "string", "c": true, "d": {}, "e": []}'))