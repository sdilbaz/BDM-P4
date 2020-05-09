db = new Mongo().getDB("project4")
db.famouspeople.drop()
db.createCollection('famouspeople')
fp=db.famouspeople;

fp.insertMany([
   {
       "_id" : 1,
       "name" : {
           "first" : "John",
           "last" : "Backus"
       },
       "birth" : ISODate("1924-12-03T05:00:00Z"),
       "death" : ISODate("2007-03-17T04:00:00Z"),
       "contribs" : [
           "Fortran",
           "ALGOL",
           "Backus-Naur Form",
           "FP"
       ],
       "awards" : [
           {
               "award" : "W.W. McDowell Award",
               "year" : 1967,
               "by" : "IEEE Computer Society"
           },
           {
               "award" : "National Medal of Science",
               "year" : 1975,
               "by" : "National Science Foundation"
           },
           {
               "award" : "Turing Award",
               "year" : 1977,
               "by" : "ACM"
           },
           {
               "award" : "Draper Prize",
               "year" : 1993,
               "by" : "National Academy of Engineering"
           }
       ]
   },
   {
       "_id" : ObjectId("51df07b094c6acd67e492f41"),
       "name" : {
           "first" : "John",
           "last" : "McCarthy"
       },
       "birth" : ISODate("1927-09-04T04:00:00Z"),
       "death" : ISODate("2011-12-24T05:00:00Z"),
       "contribs" : [
           "Lisp",
           "Artificial Intelligence",
           "ALGOL"
       ],
       "awards" : [
           {
               "award" : "Turing Award",
               "year" : 1971,
               "by" : "ACM"
           },
           {
               "award" : "Kyoto Prize",
               "year" : 1988,
               "by" : "Inamori Foundation"
           },
           {
               "award" : "National Medal of Science",
               "year" : 1990,
               "by" : "National Science Foundation"
           }
       ]
   },
   {
       "_id" : 3,
       "name" : {
           "first" : "Grace",
           "last" : "Hopper"
       },
       "title" : "Rear Admiral",
       "birth" : ISODate("1906-12-09T05:00:00Z"),
       "death" : ISODate("1992-01-01T05:00:00Z"),
       "contribs" : [
           "UNIVAC",
           "compiler",
           "FLOW-MATIC",
           "COBOL"
       ],
       "awards" : [
           {
               "award" : "Computer Sciences Man of the Year",
               "year" : 1969,
               "by" : "Data Processing Management Association"
           },
           {
               "award" : "Distinguished Fellow",
               "year" : 1973,
               "by" : " British Computer Society"
           },
           {
               "award" : "W. W. McDowell Award",
               "year" : 1976,
               "by" : "IEEE Computer Society"
           },
           {
               "award" : "National Medal of Technology",
               "year" : 1991,
               "by" : "United States"
           }
       ]
   },
   {
       "_id" : 4,
       "name" : {
           "first" : "Kristen",
           "last" : "Nygaard"
       },
       "birth" : ISODate("1926-08-27T04:00:00Z"),
       "death" : ISODate("2002-08-10T04:00:00Z"),
       "contribs" : [
           "OOP",
           "Simula"
       ],
       "awards" : [
           {
               "award" : "Rosing Prize",
               "year" : 1999,
               "by" : "Norwegian Data Association"
           },
           {
               "award" : "Turing Award",
               "year" : 2001,
               "by" : "ACM"
           },
           {
               "award" : "IEEE John von Neumann Medal",
               "year" : 2001,
               "by" : "IEEE"
           }
       ]
   },
   {
       "_id" : 5,
       "name" : {
           "first" : "Ole-Johan",
           "last" : "Dahl"
       },
       "birth" : ISODate("1931-10-12T04:00:00Z"),
       "death" : ISODate("2002-06-29T04:00:00Z"),
       "contribs" : [
           "OOP",
           "Simula"
       ],
       "awards" : [
           {
               "award" : "Rosing Prize",
               "year" : 1999,
               "by" : "Norwegian Data Association"
           },
           {
               "award" : "Turing Award",
               "year" : 2001,
               "by" : "ACM"
           },
           {
               "award" : "IEEE John von Neumann Medal",
               "year" : 2001,
               "by" : "IEEE"
           }
       ]
   },
   {
       "_id" : 6,
       "name" : {
           "first" : "Guido",
           "last" : "van Rossum"
       },
       "birth" : ISODate("1956-01-31T05:00:00Z"),
       "contribs" : [
           "Python"
       ],
       "awards" : [
           {
               "award" : "Award for the Advancement of Free Software",
               "year" : 2001,
               "by" : "Free Software Foundation"
           },
           {
               "award" : "NLUUG Award",
               "year" : 2003,
               "by" : "NLUUG"
           }
       ]
   },
   {
       "_id" : ObjectId("51e062189c6ae665454e301d"),
       "name" : {
           "first" : "Dennis",
           "last" : "Ritchie"
       },
       "birth" : ISODate("1941-09-09T04:00:00Z"),
       "death" : ISODate("2011-10-12T04:00:00Z"),
       "contribs" : [
           "UNIX",
           "C"
       ],
       "awards" : [
           {
               "award" : "Turing Award",
               "year" : 1983,
               "by" : "ACM"
           },
           {
               "award" : "National Medal of Technology",
               "year" : 1998,
               "by" : "United States"
           },
           {
               "award" : "Japan Prize",
               "year" : 2011,
               "by" : "The Japan Prize Foundation"
           }
       ]
   },
   {
       "_id" : 8,
       "name" : {
           "first" : "Yukihiro",
           "aka" : "Matz",
           "last" : "Matsumoto"
       },
       "birth" : ISODate("1965-04-14T04:00:00Z"),
       "contribs" : [
           "Ruby"
       ],
       "awards" : [
           {
               "award" : "Award for the Advancement of Free Software",
               "year" : "2011",
               "by" : "Free Software Foundation"
           }
       ]
   },
   {
       "_id" : 9,
       "name" : {
           "first" : "James",
           "last" : "Gosling"
       },
       "birth" : ISODate("1955-05-19T04:00:00Z"),
       "contribs" : [
           "Java"
       ],
       "awards" : [
           {
               "award" : "The Economist Innovation Award",
               "year" : 2002,
               "by" : "The Economist"
           },
           {
               "award" : "Officer of the Order of Canada",
               "year" : 2007,
               "by" : "Canada"
           }
       ]
   },
   {
       "_id" : 10,
       "name" : {
           "first" : "Martin",
           "last" : "Odersky"
       },
       "contribs" : [
           "Scala"
       ]
   }

] )

// 1.1
john=fp.findOne({"name":{"first":"John","last":"McCarthy"}})
old_id=john._id
john._id=100;
fp.insert(john)
fp.remove({_id:old_id})
print("1.1\tUpdated John McCarthy:\n",JSON.stringify(fp.findOne({"name":{"first":"John","last":"McCarthy"}})))

// 1.2
fp.insertMany([{
    "_id" : 20,
    "name" : {
    "first" : "Mary",
    "last" : "Sally"
    },
    "birth" : ISODate("1933-08-27T04:00:00Z"),
    "death" : ISODate("1984-11-07T04:00:00Z"),
    "contribs" : [
    "C++",
    "Simula"
    ],
    "awards" : [
    {
    "award" : "WPI Award",
    "year" : 1999,
    "by" : "WPI"
    }
    ]
   },
   {
    "_id" : 30,
    "name" : {
    "first" : "Ming",
    "last" : "Zhang"
    },
    "birth" : ISODate("1911-04-12T04:00:00Z"),
    "death" : ISODate("2000-11-07T04:00:00Z"),
    "contribs" : [
    "C++",
    "FP",
    "Python",
    ],
    "awards" : [
    {
    "award" : "WPI Award",
    "year" : 1960,
    "by" : "WPI"
    },
    {
    "award" : "Turing Award",
    "year" : 1960,
    "by" : "ACM"
    }
    ]
   }])
print("1.2\tInserted Values")

// 1.3
turing=fp.find({ "awards": { $elemMatch: { award: "Turing Award" , year: {$gt: 1940}} } } )
print("1.3\tPeople with Turing Award after 1940:\n",JSON.stringify(turing))

// 1.4
more_awards=fp.find({'awards.1': {$exists: true}}).toArray()
print("1.4\tPeople with more than one award:\n",JSON.stringify(more_awards))

// 1.5
fp.updateOne({name: {first: "Guido", last: "van Rossum"}}, {$push: {contribs: "Python"}})
print("1.5\tUpdated Guido van Rossum:\n",JSON.stringify(fp.findOne({name:{first: "Guido",last:"van Rossum"}})))

// 1.6
fp.updateOne({ name: {first: "Mary", last: "Sally"}},
	{$set: {comments:[
		"taught at 2 universities",
		"was an amazing pioneer",
		"lived in Worcester."
]} })
print("1.6\tUpdated Marry Sally:\n", JSON.stringify(fp.findOne({name:{first: "Mary",last:"Sally"}})))

// 1.7
print("1.7\n")
for (c in fp.findOne({name: {first: "Mary", last: "Sally"}}).contribs){
	print("Contribution: ",c,",\n\tPeople: ")
	for (p in fp.find({"contribs": c})){
		print("\n\t",p.name)
	}
}

// 1.8
jo=fp.find( {name: {first: {$in: [/jo*/i]}}}).sort({"name.last": 1})
print("1.8\tDocuments where the first name contains 'jo':\n", JSON.stringify(jo))

jo_start=fp.find( {name:{first: { $in: [/^jo*/i] }}}).sort({"name.last": 1})
print("1.8\tDocuments where 'Jo' is the beginning of the first name:\n",JSON.stringify(jo_start))

// 1.9
fp.updateOne({_id: 30}, { $set: {"award.year": 1999}})
print("1.9\tUpdated document 30:\n", JSON.stringify(fp.findOne({_id:"30"})))

// 1.10
contribs_arr=fp.findOne({_id: 3}).contribs
fp.aggregate([$match:{_id: 30}, $set: {contribs: {$concatArrays:["$contribs",contribs_arr]])
print("1.10\tAdded contributions from document 3 to document 30:\n", JSON.stringify(fp.findOne({_id:30})))
