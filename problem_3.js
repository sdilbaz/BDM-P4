db = new Mongo().getDB("project4")

db.categories.insertMany( [
   { _id: "MongoDB", parent: "Databases" },
   { _id: "dbm", parent: "Databases" },
   { _id: "Databases", parent: "Programming" },
   { _id: "Languages", parent: "Programming" },
   { _id: "Programming", parent: "Books" },
   { _id: "Books", parent: null }
] )

// 3.1

// 3.2

db.categories.insertMany( [
    { _id: "MongoDB", children: [] },
    { _id: "dbm", children: [] },
    { _id: "Databases", children: [ "MongoDB", "dbm" ] },
    { _id: "Languages", children: [] },
    { _id: "Programming", children: [ "Databases", "Languages" ] },
    { _id: "Books", children: [ "Programming" ] }
] )

// 3.3
db.categories.createIndex( { children: 1 } )
var parent=db.categories.findOne({ children: "dbm" })._id
print("3.3\tParent of dbm:",parent)

// 3.4
var to_do=["Books"]
var results=[]
while (to_do.length){
    current=to_do.pop()
    chs=db.categories.findOne( { _id: current } ).children
    results.push(...chs)
    to_do.push(...chs)
}
print("3.4\tDescendants of Books:",results)

// 3.5
siblingsOf="Databases"
var parent=db.categories.findOne({ children: siblingsOf })._id
var siblings=db.categories.findOne( { _id: parent } ).children
var where = siblings.indexOf(siblingsOf);
if (where > -1) {
    siblings.splice(where ,where+1)
}
print("3.5\tSiblings of Databases:",siblings)
