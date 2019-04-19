// stacks are a LIFO data structure
// stacks usually used to implement call stacks, undo/redo operations, routing
// (track of pages you have visited) etc.
// not built in data structure  in JS but very easy implementation

// It is always simpler to implement Queue using Arrays.

// using inbuilt methods like push and pop - addeing and removing from the end
// using shift and unshift - adding and removing from the start
// from all of these 4 methods
// shift and unshift - happen in O(N) because all the elements have to be reindexed
// push takes O(1) while pop takes O(N) - thus not a very good implementation of
// a stack using an array

// stacks using LL are preferred.
