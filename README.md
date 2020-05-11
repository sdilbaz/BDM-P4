# BDM-P4
## Project 4 for CS585/DS503: Big Data Management
### Serdarcan Dilbaz and Megan Deloach

## Problem 1
### 1.1
MongoDB does not allow for updating the _id, so the document is copied and after _id is modified the new document is stored. The old document is deleted.

### 1.2
insertMany function is used to insert the documents.

### 1.3
The find function is used to complete this query. The $elemMatch is used on the awards.award values and the year is filtered by using the $gt operator.

### 1.4
Instead of calculating the size of awards and checking size, the find query checks if the second element exists in awards.

### 1.5
Since the contribs is an array, the updateOne function is used with $push to push the "Python" to the contribs array.

### 1.6
To create a new field, the $set operator with the updateOne function is used. The comments are stored in the comments field.

### 1.7
The contributions of Mary Sally is retrieved. For each contribution in the contribution, the people with that contribution is found and stored in the inter_results array. The results are formatted so that the format mirrors the project description.

### 1.8
The find function with the find function with the $regex operator is used. "/^Jo.*/" is used to find name.first that start with "Jo".

### 1.9
The awards for the document with the _id of 30 is stored in the awards variable. A modifier function changes the year field for awards from WPI. The awards that was modified is used to update the document with the updateOne function.

### 1.10
The contributions of the document with the _id of 3 is extracted. The updateOne function is used to update the document with _id of 30. The $push and $each operator used to add the contributions.

## Problem 2

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

## Problem 3

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
