var db = connect('127.0.0.1:27017/HCC');
var file = cat('./inflammation.json');     # file name
var o = JSON.parse(file);         # convert string to JSON
db.categories.insert(o)                # collection name