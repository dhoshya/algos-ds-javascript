The two kinds of traversal - Breadth First and Depth First.
All the DFS traversals are written in one single file DFSTraversals.js


BFS:
this implementation is using a queue constructed from arrays where we use
shift and pop to emulate a queue.
at each iteration, a parent node is added to the queue - if it has left/right
they are added to the queue and the parent is shifted to the result array
which finally results in a BFS traversal (lists all the parents first
according to the level)


DFS:

Types of DFS: PreOrder, PostOrder, InOrder

PreOrder:
Starting with the root, Traverse the entire left side down the depth of the tree.
Once exhausted, go up the child to the parent, check for right. Keep doing this
till you reach the root. Once the root is reached, again traverse the left side
and the same work around.
Ex: Useful if you want to store the tree / flatten the tree and reconstruct it
later

PostOrder:
In this traversal, all of the children nodes are traversed first and the root is
reached at the end.
Starting from the root, we go all the way through the left to the leaf node and
add it to the visited array. Then we get its sibling, and then finally the parent
node.

InOrder:
In this traversal, we start with the root, visit the entire left side, then
visit the root and then visit the entire right side.
We go down the depth, add the last left leaf like PostOrder, then add it's parent
and then add its right child
Ex: Nodes are in ascending order.
