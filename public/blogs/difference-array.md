---
id: 1
title: "Difference Array"
date: "2025-11-11"
excerpt: "Secret weapon for efficent range updates"
---
***The secret weapon for efficent range updates***

## Introduction

Question is given an array [1,2,3,4,5], client want you to add 5 to elements in the range
2-5.

One way you may go about this is looping through the array till you reach elements between 2 - 5 and adding 5

However, alarm bells may be ringing with the inefficencies of looping the elements till you reach a certain index. What if the client comes back to and give you a bunch of queries that (start, end, value) representing the start index, end index and the value to update array. Now for each query you loop through till the start and end index and add the value.

To solve this inefficeny comes the power of the difference array

## What is a difference array

If you array is: 
```java
arr = [10, 10, 10, 10, 10]
```

The difference array diff is defined as:
```java
diff[i] = arr[i] - arr[i - 1]   (and diff[0] = arr[0])
```

So:
```java
arr = [10, 10, 10, 10, 10]
diff = [10, 0, 0, 0, 0]
```

## Performing the range query

Say you want to add +5 to indices [1, 3].

Instead of looping from 1 to 3, do this:

```java
diff[1] += 5
diff[4] -= 5  # one past the end
```

Now the diff looks like 

```java
[10, 5, 0, 0, -5]
```

To recover the final array, take the prefix sum, which is the accumalted sum of the array at a given index

```java
arr[0] = diff[0]
arr[i] = arr[i-1] + diff[i]
```

Result: 
```java
[10, 15, 15, 15, 10]
```
Range updates happening in O(1) time 

Naive: O(n * q)
Difference array: O(n + q)

### Wrap up

The difference array is one of those rare tools that’s both simple and powerful.
It converts a repetitive range update problem into a single-pass prefix sum problem — a must-have trick in any coder’s toolkit.


[Visit GitHub](https://github.com/anasadan)

