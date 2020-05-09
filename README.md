# BDM-P4
## Project 4 for CS585/DS503: Big Data Management
### Serdarcan Dilbaz and Megan Deloach

## Problem 1 (Megan did all parts, Serdarcan also did parts 1-7; then we chose the best solutions and made the formatting consistent.)
The 'famouspeople' collection was created and the documents were inserted using the insertMany command.

### 1.1
Since the _id field is immutable, the document is retrieved into a variable first. The old _id is saved into another variable before updating the record; the new version of the record is inserted, and then the old _id can be removed from the collection.

### 1.2
As in creating the database, additional documents are added using insertMany.

### 1.3
The find() command uses the $elemMatch filter with the $gt flag in order to find records containing a year greater than 1940.

### 1.4
For this problem, to find documents with more than one award, checking to see if there is a second element in the 'awards' array is sufficient. We used the {$exists: true} filter on the awards.1 array element.

### 1.5
Using the updateOne command, filtering on the name, allows us to add a contribution to Guido van Rossum.

### 1.6
The updateOne command can also add fields if you use the $set flag.

### 1.7
First I used a for loop on the contributions array for Mary Sally. Then a nested for loop within that to print the names, including Mary, of anyone who shares that contribution.

### 1.8
The regular expressions have to use the backslash syntax in this situation instead of the $regex command. I wasn't certain how to interpret the question, so we have two possibilities: one where the first name contain 'jo', case insensitive, which will include Ole-Johan; and another where the 'jo' must be at the beginning of the name. The carat (^) indicates the string anchor such that the jo much be at the start.

### 1.9
For this one there must be multiple fields in the filter to find the right document and award that needs to be updated: the _id, and the awards.by field. Then the year can be updated.

### 1.10
The aggregate method allows a pipeline of operations on records. This means we can find the document to update, get the original contributions array, and concatenate onto it all the contributions from the source document. This could have been done in one line, but I used an intermediate variable for readability.

## Problem 2 (Serdarcan Dilbaz)

### 2.1
Map-reduce was used for this question. The mapper outputs (key,value) where the key is the award and the value is 1. The reducer calculates the sum of the values for a given key. The results are stored in the q1 collection.

### 2.2
I initially solved this problem using mapreduce but the reducer cannot output arrays, so aggregate function was used. The people with awards are filtered and the data is projected to only the awards. The awards are unwind so that for each individual award there is a document. The documents are grouped on the award names and the dates are converted to years. The output is stored at q2 collection. 

### 2.3
Aggregate function is used for this question. The documents are filtered by the birth field. For the documents with the birth field, the data is projected to create a new field called "year" by using the $year operator on the birth field. The year is used for grouping and $push is used so that the ids field of the output will be an array. A field of size is added to store the size of the ids size. The results are stored in the q3 collection.

### 2.4
The documents with the smallest and largest "\_ids"'s are found using the sort function followed by limit. The results are stored in the q4 collection.

### 2.5
Text indexes are created for any string fields. "Turing" substirng is searched for the text fields and the find result is stored in the q5 collection.

### 2.6
Similarly, the text indexes are used. Space is treated as the OR operator, so to search for "National Medal", "\"National Medal\"" is used. The full search text is "Turing \\"National Medal\\"" which corresponds "Turing" or "National Medal". The result is stored in the q6 collection.

## Problem 3 (Serdarcan Dilbaz)

### 3.1
To complete this task, the current task is initialized with "MongoDB". While the node has a parent, the results is appended with node and the node is updated with the parent. When the node is null, the process stops. To calculate the level, the level variable is initialized with 1 and incremented whenever the node is updated.

### 3.2
Index is calculated so that queries can be efficiently calculated by searching by the parent. The depth is calculated using an approach similar to breadth first search. The function "find_ch" is calculates the list of all children for a list of nodes. Using this function, the nodes at any depth can be found. The algorithm starts with ["Books"] which is depth 0. Iteratively the nodes at the next depth is calculated and when the list of nodes is empty, the algorithm stops. The depth is updated at each iteration of the algorithm.

### 3.3
Index is generated for faster searching by the children. The findOne function is used to find one document with the child "dbm". The "\_id" is the name of the parent which is "Databases".

### 3.4
An array called "to_do" is initialized with an array containing the node name the descendants will be calculated for. While the "to_do" array is not empty, a node name from "to_do" is popped and stored as "current". For "current", the children are retrieved and the "to_do" array and the "results" array are extended by the children. When the "to_do" array is empty, that means the algorithm traversed all possible descendants of the initial node.

### 3.5
The siblings are found by first finding the parent of the initial node. For the parent, the children are found and the initial node is removed so that the initial node is not a sibling of the initial node.
