// Queue is FIFO data structure and only thing we do using queue is adding
// or removing. Any online service which requires waiting uses queue , uploading
// or downloading files ,  print task is a perfect example.

// It is always simpler to implement Queue using Arrays.

// make use of inbuilt array methods using a combination of push and shift
// but shift has a side effect which requires it to reindex.
// OR we can use unshift and pop but again the unshift method will require the
// reindexing and therefore is not O(1) time

// again a LL implementation of Queue is preferred when performance matters
