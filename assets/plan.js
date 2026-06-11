// Plan generator: defines window.DSA_PLAN_DAYS as an array of 150 day objects
(function(){
  const topics = [
    {topic:'Foundations', title:'Big-O, Data types & Setup', days:3, description:'Big-O analysis, common data structures, setup dev environment and practice flow.' , resources:[{title:'Complexity Cheatsheet (Big-O)', url:'https://www.bigocheatsheet.com'},{title:'CS50 (free intro)', url:'https://cs50.harvard.edu/x/2022/'}]},
    {topic:'Arrays', title:'Arrays — basics to advanced', days:20, description:'Sliding windows, two pointers, partitioning, subarrays, common patterns.' , resources:[{title:'LeetCode Arrays', url:'https://leetcode.com/tag/array/'},{title:'G4G Arrays', url:'https://www.geeksforgeeks.org/array-data-structure/'}]},
    {topic:'Strings', title:'Strings — manipulation & patterns', days:10, description:'Two-pointer string problems, KMP, string matching, parsing.' , resources:[{title:'LeetCode Strings', url:'https://leetcode.com/tag/string/'},{title:'KMP Tutorial', url:'https://cp-algorithms.com/string/kmp.html'}]},
    {topic:'Linked Lists', title:'Singly/doubly lists & problems', days:8, description:'Reverse, detect cycle, merge, pointers, random pointers.' , resources:[{title:'LeetCode Linked List', url:'https://leetcode.com/tag/linked-list/'},{title:'G4G Linked List', url:'https://www.geeksforgeeks.org/linked-list-data-structure/'}]},
    {topic:'Stacks & Queues', title:'Stacks, Queues & Monotonic structures', days:6, description:'Implementations, next greater element, monotonic stacks, deque problems.' , resources:[{title:'LeetCode Stack/Queue', url:'https://leetcode.com/tag/stack/'},{title:'Monotonic Stack guide', url:'https://cp-algorithms.com/data_structures/stack_queue_modification.html'}]},
    {topic:'Hash Tables', title:'Hash maps & hashing patterns', days:7, description:'Frequency maps, anagrams, sliding window with hashmap, set tricks.' , resources:[{title:'LeetCode Hash Table', url:'https://leetcode.com/tag/hash-table/'},{title:'Hashing (G4G)', url:'https://www.geeksforgeeks.org/hashing-data-structure/'}]},
    {topic:'Sorting & Searching', title:'Sort algorithms & binary search', days:8, description:'Quick/merge/heap sorting, binary search on answer and variants.' , resources:[{title:'Sorting Algorithms', url:'https://visualgo.net/en/sorting'},{title:'Binary Search patterns', url:'https://www.geeksforgeeks.org/binary-search/'}]},
    {topic:'Recursion & Backtracking', title:'Recursion patterns & backtracking', days:10, description:'Permutations, subsets, combination sum, DFS template.' , resources:[{title:'Backtracking (G4G)', url:'https://www.geeksforgeeks.org/backtracking-algorithms/'},{title:'Recursion patterns', url:'https://leetcode.com/discuss/general-discussion/460599/recursion-patterns-cheat-sheet'}]},
    {topic:'Trees', title:'Binary trees & BSTs', days:15, description:'Traversals, LCA, serialization, tree DP, balanced trees.' , resources:[{title:'LeetCode Trees', url:'https://leetcode.com/tag/tree/'},{title:'Binary Tree problems (G4G)', url:'https://www.geeksforgeeks.org/binary-tree-data-structure/'}]},
    {topic:'Heaps & PQ', title:'Heaps and priority queues', days:5, description:'Top-k, sliding window median, merge K lists.' , resources:[{title:'Heap (G4G)', url:'https://www.geeksforgeeks.org/heap-data-structure/'},{title:'LeetCode Heap problems', url:'https://leetcode.com/tag/heap/'}]},
    {topic:'Graphs', title:'Graph algorithms & patterns', days:18, description:'BFS/DFS, Dijkstra, topological sort, SCC, MST, graph modeling.' , resources:[{title:'Graph Theory (CP-Algorithms)', url:'https://cp-algorithms.com/graph/'},{title:'LeetCode Graph', url:'https://leetcode.com/tag/graph/'}]},
    {topic:'Dynamic Programming', title:'DP fundamentals to advanced', days:30, description:'1D/2D DP, knapsack, LIS, DP on trees, memorization, tabulation.' , resources:[{title:'DP patterns (LeetCode)', url:'https://leetcode.com/discuss/general-discussion/458695/Dynamic-Programming-Patterns'},{title:'DP tutorials', url:'https://www.geeksforgeeks.org/dynamic-programming/'}]},
    {topic:'Bit Manipulation', title:'Bit tricks & masks', days:4, description:'XOR, bit masks, lowbit, subsets via bits.' , resources:[{title:'Bit Manipulation (G4G)', url:'https://www.geeksforgeeks.org/bitwise-algorithms/'}]},
    {topic:'Math & Number Theory', title:'Primes, modular arithmetic', days:3, description:'Primality, modular inverse, gcd/lcm, combinatorics basics.' , resources:[{title:'Number Theory (CP-Algorithms)', url:'https://cp-algorithms.com/algebra/'}]},
    {topic:'Interview Patterns & System Design', title:'Interview strategies & basics of system design', days:3, description:'Behavior, communication, problem approach + high level system design primer for interviews.' , resources:[{title:'Grokking the System Design Interview (educative)', url:'https://www.educative.io/courses/grokking-the-system-design-interview', note:'paid'},{title:'System design primer (free)', url:'https://github.com/donnemartin/system-design-primer'}]}
  ];

  // expand topics into 150 day objects
  const days = [];
  let dayIndex = 1;
  topics.forEach(t=>{
    for(let i=0;i<t.days;i++){
      days.push({
        day: dayIndex,
        topic: t.topic,
        title: `${t.title} — Day ${i+1} of ${t.days}`,
        description: t.description,
        resources: t.resources
      });
      dayIndex++;
    }
  });

  // safety: if not exactly 150, pad or trim
  if(days.length < 150){
    for(let d=days.length+1; d<=150; d++) days.push({day:d, topic:'Revision & Mock Interviews', title:`Revision & Mocks`, description:'Revision, mixed problem sets, timed mocks and system design practice.', resources:[{title:'Mock interviews (Pramp)', url:'https://www.pramp.com'},{title:'LeetCode mock interviews', url:'https://leetcode.com/contest/'}]});
  } else if(days.length > 150){
    days.splice(150);
  }

  window.DSA_PLAN_DAYS = days;
})();
