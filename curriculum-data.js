// COMPLETE 150-DAY DSA MASTERY CURRICULUM
// 5 PHASES × 30 DAYS EACH = 150 DAYS TOTAL

const DSA_CURRICULUM = {
    phases: [
        {
            phase: 1,
            title: "Phase 1: Foundations (Days 1-30)",
            duration: "30 Days",
            description: "Master core fundamentals: complexity analysis, arrays, strings, searching, and sorting basics.",
            difficulty: "beginner",
            tagType: "core",
            weeks: [
                {
                    weekNum: 1,
                    title: "Week 1: Big-O & Arrays Fundamentals",
                    summary: "Master complexity analysis and array operations. These form the foundation for all DSA problems.",
                    days: [
                        {
                            day: 1,
                            title: "Big-O Complexity Analysis",
                            description: "Learn time and space complexity, Big-O notation, and how to analyze algorithm efficiency.",
                            difficulty: "beginner",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Time Complexity", desc: "How runtime grows with input size" },
                                { name: "Space Complexity", desc: "How memory usage grows with input" },
                                { name: "Big-O Notation", desc: "Worst-case scenario analysis" },
                                { name: "Asymptotic Analysis", desc: "Upper, lower bounds" },
                                { name: "Recurrence Relations", desc: "Analyzing recursive algorithms" }
                            ],
                            resources: [
                                { name: "Big-O in 100 Seconds", type: "video", source: "Fireship", quality: "best", link: "https://www.youtube.com/watch?v=g2o22C3CRfU", duration: "100 sec", why: "Quick overview of Big-O concepts" },
                                { name: "Big-O Complexity Analysis Guide", type: "article", source: "GeeksforGeeks", quality: "best", link: "https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/", duration: "20-30 min", why: "Comprehensive with examples" },
                                { name: "CS50 Time Complexity", type: "video", source: "Harvard", quality: "best", link: "https://www.youtube.com/watch?v=onQdxGGPQvs", duration: "45 min", why: "Professional explanation" }
                            ],
                            problems: [
                                { name: "Analyze Algorithm Complexity", difficulty: "easy", link: "https://leetcode.com/problems/analyze-user-website-visit-pattern/", why: "Apply Big-O concepts" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Big-O Mastery</h4><h5>Common Complexities (Best to Worst)</h5><ul><li>O(1) - Constant</li><li>O(log n) - Logarithmic</li><li>O(n) - Linear</li><li>O(n log n) - Linearithmic</li><li>O(n²) - Quadratic</li><li>O(2^n) - Exponential</li></ul><h5>Key Rules:</h5><ul><li>Drop constants: O(2n) = O(n)</li><li>Keep highest term: O(n² + n) = O(n²)</li><li>Nested loops multiply: Two loops = O(n²)</li></ul></div>`
                        },
                        {
                            day: 2,
                            title: "Array Operations & Memory Layout",
                            description: "Master array indexing, iteration, and understand memory layout for optimal performance.",
                            difficulty: "beginner",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Array Indexing", desc: "O(1) random access via memory address" },
                                { name: "Array Iteration", desc: "Traversing all elements O(n)" },
                                { name: "Insertion Complexity", desc: "O(n) - requires shifting" },
                                { name: "Deletion Complexity", desc: "O(n) - requires shifting" },
                                { name: "Memory Contiguity", desc: "Why arrays are cache-friendly" }
                            ],
                            resources: [
                                { name: "Array Memory Layout", type: "video", source: "NeetCode", quality: "best", link: "https://www.youtube.com/watch?v=2wPsOPVdpxQ", duration: "20 min", why: "Visual memory explanation" },
                                { name: "Arrays vs Linked Lists", type: "article", source: "TakeUForward", quality: "best", link: "https://takeuforward.org/data-structure/", duration: "15 min", why: "Clear comparison" }
                            ],
                            problems: [
                                { name: "Remove Duplicates from Sorted Array", difficulty: "easy", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", why: "In-place modification" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Array Operations</h4><p>Arrays: contiguous memory → O(1) access, O(n) insert/delete. Memory address = base + (index × element_size)</p></div>`
                        },
                        {
                            day: 3,
                            title: "Two Pointer Technique - Converging",
                            description: "Learn converging two-pointers for sorted arrays. Efficient pair-finding without extra space.",
                            difficulty: "beginner",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Converging Pointers", desc: "Start at both ends, move toward center" },
                                { name: "Two Sum Pattern", desc: "Finding pair with target sum" },
                                { name: "Space Optimization", desc: "O(1) space vs O(n) hash map" },
                                { name: "Sorted Requirement", desc: "Why sorting helps" }
                            ],
                            resources: [
                                { name: "Two Pointers Explained", type: "video", source: "NeetCode", quality: "best", link: "https://www.youtube.com/watch?v=Z0UZd-8F2Ow", duration: "15 min", why: "Clear visualization" },
                                { name: "Two Pointers Complete", type: "article", source: "TakeUForward", quality: "best", link: "https://takeuforward.org/arrays/two-pointers/", duration: "20 min", why: "All patterns explained" }
                            ],
                            problems: [
                                { name: "Two Sum II (Sorted)", difficulty: "easy", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", why: "Classic two pointers" },
                                { name: "Valid Palindrome", difficulty: "easy", link: "https://leetcode.com/problems/valid-palindrome/", why: "Converging technique" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Converging Two Pointers</h4><p>Start: left=0, right=n-1. If arr[left]+arr[right] < target: left++. Else: right--. O(n) time, O(1) space!</p></div>`
                        },
                        {
                            day: 4,
                            title: "Two Pointer Technique - Same Direction",
                            description: "Master same-direction pointers for sliding windows and element partitioning.",
                            difficulty: "beginner",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Same Direction Pointers", desc: "Both move forward at different speeds" },
                                { name: "Fast & Slow Pointer", desc: "Different pace iteration" },
                                { name: "Partition Logic", desc: "Separating elements based on condition" },
                                { name: "In-place Modification", desc: "No extra space needed" }
                            ],
                            resources: [
                                { name: "Fast Slow Pointer", type: "video", source: "NeetCode", quality: "best", link: "https://www.youtube.com/watch?v=Z0UZd-8F2Ow", duration: "20 min", why: "Complete sliding window guide" },
                                { name: "Partition Problems", type: "article", source: "GeeksforGeeks", quality: "best", link: "https://www.geeksforgeeks.org/", duration: "15 min", why: "Partition pattern examples" }
                            ],
                            problems: [
                                { name: "Move Zeroes", difficulty: "easy", link: "https://leetcode.com/problems/move-zeroes/", why: "Same direction partition" },
                                { name: "Remove Element", difficulty: "easy", link: "https://leetcode.com/problems/remove-element/", why: "Partition pattern" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Same Direction Pointers</h4><p>Use fast & slow for linked list cycle detection. Use write & read pointers for partitioning.</p></div>`
                        },
                        {
                            day: 5,
                            title: "String Fundamentals & Character Analysis",
                            description: "Master string indexing, character iteration, and frequency counting using hash maps.",
                            difficulty: "beginner",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "String Indexing", desc: "Character access like arrays" },
                                { name: "Character Frequency", desc: "Counting occurrences" },
                                { name: "Hash Maps for Strings", desc: "O(1) frequency lookup" },
                                { name: "Immutability Issues", desc: "String concatenation costs" }
                            ],
                            resources: [
                                { name: "String Algorithms", type: "video", source: "Striver", quality: "best", link: "https://www.youtube.com/watch?v=EU_-CjjB4aA", duration: "30 min", why: "Complete string guide" }
                            ],
                            problems: [
                                { name: "Valid Anagram", difficulty: "easy", link: "https://leetcode.com/problems/valid-anagram/", why: "Character frequency" },
                                { name: "First Unique Character", difficulty: "easy", link: "https://leetcode.com/problems/first-unique-character-in-a-string/", why: "Hash map application" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>String Analysis</h4><p>Use character frequency array (26 chars) or hash map. Sorted strings reveal anagrams.</p></div>`
                        },
                        {
                            day: 6,
                            title: "Anagrams & Pattern Detection",
                            description: "Detect and group anagrams efficiently. Master pattern matching in strings.",
                            difficulty: "beginner",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Anagram Detection", desc: "Same characters, different order" },
                                { name: "Sorting Approach", desc: "O(n log n) time complexity" },
                                { name: "Frequency Approach", desc: "O(n) time complexity" },
                                { name: "Pattern Grouping", desc: "Organizing similar items" }
                            ],
                            resources: [
                                { name: "Group Anagrams Solution", type: "article", source: "TakeUForward", quality: "best", link: "https://takeuforward.org/string/group-anagrams/", duration: "20 min", why: "Multiple approaches" }
                            ],
                            problems: [
                                { name: "Group Anagrams", difficulty: "medium", link: "https://leetcode.com/problems/group-anagrams/", why: "Complete anagram problem" },
                                { name: "Find Anagrams in String", difficulty: "medium", link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/", why: "Sliding window anagrams" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Anagram Solutions</h4><p>Approach 1: Sort each word, use as key. Approach 2: Count characters, compare counts.</p></div>`
                        },
                        {
                            day: 7,
                            title: "Linear Search & Space-Time Tradeoff",
                            description: "Master linear search and understand fundamental space-time complexity tradeoffs.",
                            difficulty: "beginner",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Linear Search", desc: "O(n) sequential checking" },
                                { name: "Space-Time Tradeoff", desc: "Trading memory for speed" },
                                { name: "Hash Map vs Iteration", desc: "O(1) lookup vs O(n) search" },
                                { name: "When to Optimize", desc: "Choosing right approach" }
                            ],
                            resources: [
                                { name: "Search & Lookup", type: "article", source: "GeeksforGeeks", quality: "best", link: "https://www.geeksforgeeks.org/", duration: "25 min", why: "Complete search strategies" }
                            ],
                            problems: [
                                { name: "Search Insert Position", difficulty: "easy", link: "https://leetcode.com/problems/search-insert-position/", why: "Linear search application" },
                                { name: "Remove Duplicates", difficulty: "easy", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", why: "Deletion pattern" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Search Strategies</h4><p>Linear: O(n) time, O(1) space. Hash map: O(1) time, O(n) space. Choose based on constraints!</p></div>`
                        }
                    ]
                },
                {
                    weekNum: 2,
                    title: "Week 2: Binary Search & Sorting Fundamentals",
                    summary: "Learn binary search O(log n) and understand basic sorting algorithms.",
                    days: [
                        {
                            day: 8,
                            title: "Binary Search Basics",
                            description: "Master binary search algorithm. Understand O(log n) and its prerequisites.",
                            difficulty: "beginner",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Binary Search", desc: "Halve search space each iteration" },
                                { name: "O(log n) Complexity", desc: "Why it's fast" },
                                { name: "Sorted Requirement", desc: "Essential prerequisite" },
                                { name: "Edge Cases", desc: "Duplicate elements" }
                            ],
                            resources: [
                                { name: "Binary Search Guide", type: "video", source: "NeetCode", quality: "best", link: "https://www.youtube.com/watch?v=s4DPM8ct1pI", duration: "20 min", why: "Clear explanation" }
                            ],
                            problems: [
                                { name: "Binary Search", difficulty: "easy", link: "https://leetcode.com/problems/binary-search/", why: "Classic binary search" },
                                { name: "First Bad Version", difficulty: "easy", link: "https://leetcode.com/problems/first-bad-version/", why: "Binary search application" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Binary Search</h4><p>Initialize left=0, right=n-1. While loop: mid=(left+right)/2. Compare target with mid. Move pointers based on comparison.</p></div>`
                        },
                        {
                            day: 9,
                            title: "Binary Search on Rotated Arrays",
                            description: "Extend binary search to rotated sorted arrays. Handle edge cases intelligently.",
                            difficulty: "intermediate",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Rotated Arrays", desc: "Modified sorted structure" },
                                { name: "Pivot Detection", desc: "Finding rotation point" },
                                { name: "Conditional Logic", desc: "Which half is sorted?" }
                            ],
                            resources: [
                                { name: "Rotated Array Search", type: "article", source: "TakeUForward", quality: "best", link: "https://takeuforward.org/binary-search/search-in-a-rotated-sorted-array/", duration: "20 min", why: "Step-by-step solution" }
                            ],
                            problems: [
                                { name: "Search in Rotated Array", difficulty: "medium", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", why: "Core rotated problem" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Rotated Array Binary Search</h4><p>Identify sorted half. Is target in sorted half? Search accordingly. Time: O(log n)</p></div>`
                        },
                        {
                            day: 10,
                            title: "Bubble Sort & Selection Sort",
                            description: "Understand basic O(n²) sorting. Learn when to use simple sorts.",
                            difficulty: "beginner",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Bubble Sort", desc: "Compare adjacent elements O(n²)" },
                                { name: "Selection Sort", desc: "Find min each iteration O(n²)" },
                                { name: "Stability", desc: "Equal elements order preservation" },
                                { name: "When to Use", desc: "Small arrays, nearly sorted data" }
                            ],
                            resources: [
                                { name: "Sorting Algorithms Visualized", type: "video", source: "Fireship", quality: "best", link: "https://www.youtube.com/watch?v=RfXq39IcguE", duration: "15 min", why: "Visual understanding" }
                            ],
                            problems: [
                                { name: "Sort an Array", difficulty: "medium", link: "https://leetcode.com/problems/sort-an-array/", why: "Sorting practice" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Simple Sorts</h4><p>Bubble: Compare adjacent pairs, swap if needed. Selection: Find minimum, place at start. Both O(n²) but simple to implement.</p></div>`
                        },
                        {
                            day: 11,
                            title: "Insertion Sort & Efficient Sorting",
                            description: "Master insertion sort. Learn adaptive sorting for nearly sorted data.",
                            difficulty: "beginner",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Insertion Sort", desc: "Build sorted portion incrementally" },
                                { name: "Adaptive Property", desc: "O(n) for nearly sorted data" },
                                { name: "Stability", desc: "Maintains equal element order" },
                                { name: "Real-world Use", desc: "Hybrid sorting algorithms" }
                            ],
                            resources: [
                                { name: "Insertion Sort", type: "article", source: "GeeksforGeeks", quality: "best", link: "https://www.geeksforgeeks.org/insertion-sort/", duration: "15 min", why: "Detailed explanation" }
                            ],
                            problems: [
                                { name: "Insertion Sort List", difficulty: "medium", link: "https://leetcode.com/problems/insertion-sort-list/", why: "Linked list sorting" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Insertion Sort</h4><p>Efficient for small arrays. O(n²) worst, O(n) best. Stable and often used in hybrid sorts like TimSort.</p></div>`
                        },
                        {
                            day: 12,
                            title: "Merge Sort - Divide & Conquer",
                            description: "Learn O(n log n) merge sort. Master divide-and-conquer paradigm.",
                            difficulty: "intermediate",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Divide & Conquer", desc: "Break into smaller subproblems" },
                                { name: "Merge Sort", desc: "O(n log n) guaranteed" },
                                { name: "Merge Operation", desc: "Combining sorted arrays" },
                                { name: "Space Complexity", desc: "O(n) auxiliary space" }
                            ],
                            resources: [
                                { name: "Merge Sort Complete", type: "video", source: "NeetCode", quality: "best", link: "https://www.youtube.com/watch?v=nLhA-DcQhSc", duration: "25 min", why: "Complete walkthrough" }
                            ],
                            problems: [
                                { name: "Merge Sorted Array", difficulty: "easy", link: "https://leetcode.com/problems/merge-sorted-array/", why: "Merge operation practice" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Merge Sort</h4><p>Divide array recursively in half. Merge sorted halves. Time: O(n log n), Space: O(n)</p></div>`
                        },
                        {
                            day: 13,
                            title: "Quick Sort - In-place Sorting",
                            description: "Master quick sort. Understand pivot selection and average O(n log n).",
                            difficulty: "intermediate",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Quick Sort", desc: "In-place O(n log n) average" },
                                { name: "Pivot Selection", desc: "First, last, middle, random" },
                                { name: "Partitioning", desc: "Hoare vs Lomuto partition" },
                                { name: "Worst Case", desc: "O(n²) with bad pivot" }
                            ],
                            resources: [
                                { name: "Quick Sort", type: "video", source: "Striver", quality: "best", link: "https://www.youtube.com/watch?v=PgBzjlCcFon", duration: "30 min", why: "Comprehensive guide" }
                            ],
                            problems: [
                                { name: "Kth Largest Element", difficulty: "medium", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", why: "Quick select application" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Quick Sort</h4><p>Pick pivot, partition around it. Recursively sort left and right. Average O(n log n), in-place, unstable.</p></div>`
                        },
                        {
                            day: 14,
                            title: "Sorting Algorithms Summary & Applications",
                            description: "Compare all sorting algorithms. Learn when to use each one.",
                            difficulty: "intermediate",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Stability", desc: "Maintaining relative order" },
                                { name: "In-place Sorting", desc: "Space efficiency" },
                                { name: "Algorithm Selection", desc: "Choosing right sort" },
                                { name: "Real-world Performance", desc: "Practical considerations" }
                            ],
                            resources: [
                                { name: "Sorting Comparison", type: "article", source: "GeeksforGeeks", quality: "best", link: "https://www.geeksforgeeks.org/sorting-algorithms/", duration: "30 min", why: "Comprehensive comparison" }
                            ],
                            problems: [
                                { name: "Largest Number", difficulty: "medium", link: "https://leetcode.com/problems/largest-number/", why: "Custom sorting" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Algorithm Comparison</h4><p>Bubble/Selection: O(n²), simple. Insertion: O(n²), adaptive. Merge: O(n log n), stable. Quick: O(n log n) avg, in-place.</p></div>`
                        }
                    ]
                },
                {
                    weekNum: 3,
                    title: "Week 3: Hash Maps & Hash Sets",
                    summary: "Master hash maps, hash sets, and collision handling.",
                    days: [
                        {
                            day: 15,
                            title: "Hash Map Fundamentals",
                            description: "Understand hash functions, collision resolution, and O(1) operations.",
                            difficulty: "beginner",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Hash Function", desc: "Map keys to indices" },
                                { name: "Collision Resolution", desc: "Chaining vs open addressing" },
                                { name: "Load Factor", desc: "When to resize" },
                                { name: "O(1) Average", desc: "Balanced distribution" }
                            ],
                            resources: [
                                { name: "Hash Maps Deep Dive", type: "video", source: "NeetCode", quality: "best", link: "https://www.youtube.com/watch?v=FsfTLJS91b0", duration: "20 min", why: "Complete explanation" }
                            ],
                            problems: [
                                { name: "Two Sum", difficulty: "easy", link: "https://leetcode.com/problems/two-sum/", why: "Hash map classic" },
                                { name: "Contains Duplicate", difficulty: "easy", link: "https://leetcode.com/problems/contains-duplicate/", why: "Hash set usage" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Hash Maps</h4><p>Hash function distributes keys uniformly. Collisions handled by chaining (linked lists) or probing. Average O(1).</p></div>`
                        },
                        {
                            day: 16,
                            title: "Frequency Counting & Analysis",
                            description: "Use hash maps for frequency counting and pattern detection.",
                            difficulty: "beginner",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Frequency Counting", desc: "Count element occurrences" },
                                { name: "Finding Extremes", desc: "Most/least frequent" },
                                { name: "Pattern Detection", desc: "Finding patterns" },
                                { name: "Data Analysis", desc: "Statistical operations" }
                            ],
                            resources: [
                                { name: "Frequency Analysis", type: "article", source: "TakeUForward", quality: "best", link: "https://takeuforward.org/data-structure/find-the-majority-element-that-occurs-more-than-n-3-times/", duration: "20 min", why: "Multiple problems" }
                            ],
                            problems: [
                                { name: "Majority Element", difficulty: "easy", link: "https://leetcode.com/problems/majority-element/", why: "Frequency counting" },
                                { name: "Top K Frequent Elements", difficulty: "medium", link: "https://leetcode.com/problems/top-k-frequent-elements/", why: "Frequency + sorting" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Frequency Counting</h4><p>Count all elements in hash map. Find max frequency. Use sorting or heap for top-k problems.</p></div>`
                        },
                        {
                            day: 17,
                            title: "Hash Sets & Uniqueness",
                            description: "Master hash sets for tracking unique elements and duplicates.",
                            difficulty: "beginner",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Hash Set", desc: "Unordered unique elements" },
                                { name: "Duplicate Detection", desc: "Finding repeated items" },
                                { name: "Uniqueness Checking", desc: "All elements unique?" },
                                { name: "Set Operations", desc: "Union, intersection, difference" }
                            ],
                            resources: [
                                { name: "Hash Set Tutorial", type: "article", source: "GeeksforGeeks", quality: "good", link: "https://www.geeksforgeeks.org/hashing-set-1-introduction/", duration: "15 min", why: "Set fundamentals" }
                            ],
                            problems: [
                                { name: "Longest Substring Without Repeat", difficulty: "medium", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", why: "Set + sliding window" },
                                { name: "Happy Number", difficulty: "easy", link: "https://leetcode.com/problems/happy-number/", why: "Set for cycle detection" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Hash Sets</h4><p>Store unique elements only. O(1) lookup, insertion, deletion. Perfect for duplicate detection.</p></div>`
                        },
                        {
                            day: 18,
                            title: "Sliding Window with Hash Maps",
                            description: "Combine sliding window with hash maps for substring problems.",
                            difficulty: "intermediate",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Sliding Window", desc: "Dynamic window adjustment" },
                                { name: "Window Validity", desc: "Checking constraints" },
                                { name: "Frequency Tracking", desc: "Element counts in window" },
                                { name: "Constraint Matching", desc: "Meeting requirements" }
                            ],
                            resources: [
                                { name: "Sliding Window Pattern", type: "video", source: "NeetCode", quality: "best", link: "https://www.youtube.com/watch?v=MK-NZ4hN7JQ", duration: "25 min", why: "Comprehensive pattern" }
                            ],
                            problems: [
                                { name: "Minimum Window Substring", difficulty: "hard", link: "https://leetcode.com/problems/minimum-window-substring/", why: "Classic window + hash" },
                                { name: "Permutation in String", difficulty: "medium", link: "https://leetcode.com/problems/permutation-in-string/", why: "Frequency + window" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Sliding Window + Hash Map</h4><p>Expand window, check validity. Contract when invalid. Use hash map to track frequencies in window.</p></div>`
                        },
                        {
                            day: 19,
                            title: "Linked List Fundamentals",
                            description: "Understand linked list structure, nodes, and basic operations.",
                            difficulty: "beginner",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Node Structure", desc: "Data + next pointer" },
                                { name: "Head Reference", desc: "Marks list start" },
                                { name: "Traversal", desc: "Walking through nodes" },
                                { name: "No Random Access", desc: "Must traverse from head" }
                            ],
                            resources: [
                                { name: "Linked List Basics", type: "video", source: "NeetCode", quality: "best", link: "https://www.youtube.com/watch?v=0EW2xF-Mrvs", duration: "15 min", why: "Clear introduction" }
                            ],
                            problems: [
                                { name: "Design Linked List", difficulty: "medium", link: "https://leetcode.com/problems/design-linked-list/", why: "Implement from scratch" },
                                { name: "Middle of Linked List", difficulty: "easy", link: "https://leetcode.com/problems/middle-of-the-linked-list/", why: "List traversal" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Linked List</h4><p>Nodes connected via pointers. No random access. Insertion/deletion O(1) if position known, O(n) if not.</p></div>`
                        },
                        {
                            day: 20,
                            title: "Linked List Operations & Manipulation",
                            description: "Master insertion, deletion, and reversal in linked lists.",
                            difficulty: "intermediate",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Insertion", desc: "Creating connections O(1)" },
                                { name: "Deletion", desc: "Removing nodes O(1)" },
                                { name: "Reversal", desc: "Changing pointer direction" },
                                { name: "Edge Cases", desc: "Head/tail handling" }
                            ],
                            resources: [
                                { name: "Linked List Operations", type: "article", source: "TakeUForward", quality: "best", link: "https://takeuforward.org/linked-list/", duration: "30 min", why: "All operations covered" }
                            ],
                            problems: [
                                { name: "Remove Nth Node From End", difficulty: "medium", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", why: "Deletion practice" },
                                { name: "Reverse Linked List", difficulty: "easy", link: "https://leetcode.com/problems/reverse-linked-list/", why: "List reversal" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>List Operations</h4><p>To insert/delete: Find position, adjust pointers. Reversal: Iterate, reverse links. Use dummy node for edge cases.</p></div>`
                        },
                        {
                            day: 21,
                            title: "Stack - LIFO Data Structure",
                            description: "Understand stacks and implement real-world applications.",
                            difficulty: "beginner",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "LIFO Principle", desc: "Last In First Out" },
                                { name: "Push/Pop", desc: "O(1) both operations" },
                                { name: "Stack Applications", desc: "Undo, parsing, recursion" },
                                { name: "Implementation", desc: "Array or linked list" }
                            ],
                            resources: [
                                { name: "Stack Basics", type: "video", source: "NeetCode", quality: "best", link: "https://www.youtube.com/watch?v=G_Rpk-CSYrE", duration: "15 min", why: "Clear stack intro" }
                            ],
                            problems: [
                                { name: "Valid Parentheses", difficulty: "easy", link: "https://leetcode.com/problems/valid-parentheses/", why: "Stack classic" },
                                { name: "Min Stack", difficulty: "medium", link: "https://leetcode.com/problems/min-stack/", why: "Stack design" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Stack LIFO</h4><p>Push adds to top, Pop removes from top. Perfect for matching pairs, undo operations, recursion simulation.</p></div>`
                        }
                    ]
                },
                {
                    weekNum: 4,
                    title: "Week 4: Queues, Monotonic Stacks & String Processing",
                    summary: "Master queues, monotonic stacks, and advanced string problems.",
                    days: [
                        {
                            day: 22,
                            title: "Queue - FIFO Data Structure",
                            description: "Understand queues and implement circular queues efficiently.",
                            difficulty: "beginner",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "FIFO Principle", desc: "First In First Out" },
                                { name: "Enqueue/Dequeue", desc: "O(1) operations" },
                                { name: "Circular Queue", desc: "Memory efficient" },
                                { name: "Deque", desc: "Double-ended queue" }
                            ],
                            resources: [
                                { name: "Queue Basics", type: "video", source: "NeetCode", quality: "best", link: "https://www.youtube.com/watch?v=E6-i-QMCrJ4", duration: "15 min", why: "Queue intro" }
                            ],
                            problems: [
                                { name: "Implement Queue using Stacks", difficulty: "easy", link: "https://leetcode.com/problems/implement-queue-using-stacks/", why: "Queue implementation" },
                                { name: "Design Circular Queue", difficulty: "medium", link: "https://leetcode.com/problems/design-circular-queue/", why: "Circular queue design" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Queue FIFO</h4><p>Enqueue adds to back, Dequeue removes from front. Circular queue reuses space. Deque allows both ends.</p></div>`
                        },
                        {
                            day: 23,
                            title: "Monotonic Stack Pattern",
                            description: "Master monotonic stacks for finding next greater/smaller elements.",
                            difficulty: "intermediate",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Monotonic Stack", desc: "Maintaining order in stack" },
                                { name: "Next Greater", desc: "Finding next larger value" },
                                { name: "Previous Greater", desc: "Finding previous larger" },
                                { name: "Span Problems", desc: "Stock span type problems" }
                            ],
                            resources: [
                                { name: "Monotonic Stack", type: "video", source: "Striver", quality: "best", link: "https://www.youtube.com/watch?v=COQT5A2u6hI", duration: "25 min", why: "Complete guide" }
                            ],
                            problems: [
                                { name: "Next Greater Element", difficulty: "easy", link: "https://leetcode.com/problems/next-greater-element-i/", why: "Classic pattern" },
                                { name: "Largest Rectangle", difficulty: "hard", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", why: "Advanced stack" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Monotonic Stack</h4><p>For each element, pop smaller elements. Record relationships. Continue until stack is ordered.</p></div>`
                        },
                        {
                            day: 24,
                            title: "String Pattern Matching",
                            description: "Learn KMP algorithm and pattern matching techniques.",
                            difficulty: "intermediate",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Pattern Matching", desc: "Finding substring patterns" },
                                { name: "KMP Algorithm", desc: "O(n+m) string matching" },
                                { name: "Failure Function", desc: "KMP preprocessing" },
                                { name: "String Repetition", desc: "Finding patterns" }
                            ],
                            resources: [
                                { name: "KMP Algorithm", type: "video", source: "NeetCode", quality: "best", link: "https://www.youtube.com/watch?v=BXCEFALk_3s", duration: "30 min", why: "Complete KMP guide" }
                            ],
                            problems: [
                                { name: "First Occurrence", difficulty: "easy", link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/", why: "Pattern matching" },
                                { name: "Repeated Substring", difficulty: "easy", link: "https://leetcode.com/problems/repeated-substring-pattern/", why: "Pattern detection" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>KMP Pattern Matching</h4><p>Build failure function. Use it to skip comparisons. Achieves O(n+m) linear time.</p></div>`
                        },
                        {
                            day: 25,
                            title: "Palindrome Problems",
                            description: "Solve various palindrome problems: checking, expanding, and building.",
                            difficulty: "intermediate",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Palindrome Checking", desc: "Is string palindrome?" },
                                { name: "Expand Around Center", desc: "O(n²) approach" },
                                { name: "Manacher Algorithm", desc: "O(n) palindrome finding" },
                                { name: "Longest Palindrome", desc: "Finding largest palindrome" }
                            ],
                            resources: [
                                { name: "Palindrome Problems", type: "article", source: "TakeUForward", quality: "best", link: "https://takeuforward.org/string/palindromic-problems/", duration: "30 min", why: "Multiple solutions" }
                            ],
                            problems: [
                                { name: "Valid Palindrome", difficulty: "easy", link: "https://leetcode.com/problems/valid-palindrome/", why: "Palindrome check" },
                                { name: "Longest Palindromic Substring", difficulty: "medium", link: "https://leetcode.com/problems/longest-palindromic-substring/", why: "Expand around center" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Palindrome Solving</h4><p>Two pointers converging for checking. Expand around center for finding. Manacher for O(n).</p></div>`
                        },
                        {
                            day: 26,
                            title: "Subarray & Prefix Sum",
                            description: "Master prefix sums and subarray problems using cumulative techniques.",
                            difficulty: "intermediate",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Prefix Sum", desc: "Cumulative sum array" },
                                { name: "Subarray Queries", desc: "O(1) after preprocessing" },
                                { name: "Subarray Sum K", desc: "Using hash map" },
                                { name: "Maximum Subarray", desc: "Kadane's algorithm" }
                            ],
                            resources: [
                                { name: "Prefix Sum Guide", type: "article", source: "GeeksforGeeks", quality: "best", link: "https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-in-competitive-programming/", duration: "25 min", why: "Prefix sum techniques" }
                            ],
                            problems: [
                                { name: "Maximum Subarray", difficulty: "medium", link: "https://leetcode.com/problems/maximum-subarray/", why: "Kadane's algorithm" },
                                { name: "Subarray Sum Equals K", difficulty: "medium", link: "https://leetcode.com/problems/subarray-sum-equals-k/", why: "Prefix sum + hash" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Prefix Sum</h4><p>Build prefix array: prefix[i] = sum(0 to i). Query range in O(1): sum(i to j) = prefix[j] - prefix[i-1]</p></div>`
                        },
                        {
                            day: 27,
                            title: "2D Arrays & Matrix Problems",
                            description: "Master 2D arrays and solve matrix traversal problems.",
                            difficulty: "intermediate",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "2D Array Access", desc: "Row-column indexing" },
                                { name: "Matrix Traversal", desc: "Different directions" },
                                { name: "Spiral Traversal", desc: "Boundary management" },
                                { name: "Diagonal Traversal", desc: "Different patterns" }
                            ],
                            resources: [
                                { name: "2D Array Problems", type: "article", source: "TakeUForward", quality: "best", link: "https://takeuforward.org/matrix/", duration: "45 min", why: "All matrix problems" }
                            ],
                            problems: [
                                { name: "Spiral Matrix", difficulty: "medium", link: "https://leetcode.com/problems/spiral-matrix/", why: "Spiral traversal" },
                                { name: "Set Matrix Zeroes", difficulty: "medium", link: "https://leetcode.com/problems/set-matrix-zeroes/", why: "In-place modification" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>2D Arrays</h4><p>Track boundaries: top, bottom, left, right. Move one direction until boundary. Shrink boundary and repeat.</p></div>`
                        },
                        {
                            day: 28,
                            title: "Bit Manipulation Basics",
                            description: "Master bitwise operations and common bit tricks.",
                            difficulty: "intermediate",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Bitwise AND", desc: "Both bits 1" },
                                { name: "Bitwise OR", desc: "Either bit 1" },
                                { name: "Bitwise XOR", desc: "Different bits" },
                                { name: "Bit Shifts", desc: "Left and right shifts" },
                                { name: "Bit Tricks", desc: "Common patterns" }
                            ],
                            resources: [
                                { name: "Bit Manipulation", type: "video", source: "Striver", quality: "best", link: "https://www.youtube.com/watch?v=TyVrKjpMV1c", duration: "45 min", why: "Complete guide" }
                            ],
                            problems: [
                                { name: "Single Number", difficulty: "easy", link: "https://leetcode.com/problems/single-number/", why: "XOR application" },
                                { name: "Number of 1 Bits", difficulty: "easy", link: "https://leetcode.com/problems/number-of-1-bits/", why: "Bit counting" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Bit Tricks</h4><p>a^a=0, a^0=a (XOR). a&(a-1) removes rightmost 1. Check i-th bit: (i & (1<<i))</p></div>`
                        },
                        {
                            day: 29,
                            title: "Recursion & Backtracking Introduction",
                            description: "Understand recursion basics and base cases.",
                            difficulty: "intermediate",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "Recursion Concept", desc: "Function calling itself" },
                                { name: "Base Case", desc: "Stopping condition" },
                                { name: "Recursive Case", desc: "Problem reduction" },
                                { name: "Call Stack", desc: "Function invocations" }
                            ],
                            resources: [
                                { name: "Recursion Fundamentals", type: "video", source: "NeetCode", quality: "best", link: "https://www.youtube.com/watch?v=qSk5PmVP_7o", duration: "20 min", why: "Clear basics" }
                            ],
                            problems: [
                                { name: "Fibonacci Number", difficulty: "easy", link: "https://leetcode.com/problems/fibonacci-number/", why: "Recursive pattern" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Recursion Basics</h4><p>Define base case (when to stop). Define recursive case (break into smaller). Ensure progress towards base.</p></div>`
                        },
                        {
                            day: 30,
                            title: "Phase 1 Review & Assessment",
                            description: "Review all Phase 1 concepts. Solve mixed problems. Assess readiness.",
                            difficulty: "mixed",
                            phase: "Phase 1: Foundations",
                            concepts: [
                                { name: "All Phase 1 Topics", desc: "Complete review" },
                                { name: "Problem Strategy", desc: "Choosing approaches" },
                                { name: "Code Optimization", desc: "Time/space improvements" },
                                { name: "Interview Skills", desc: "Explanation abilities" }
                            ],
                            resources: [
                                { name: "Phase 1 Checklist", type: "article", source: "Self-created", quality: "best", link: "#", duration: "30 min", why: "Complete review" }
                            ],
                            problems: [
                                { name: "Mixed Phase 1 Problems", difficulty: "mixed", link: "https://leetcode.com/", why: "Practice contest" }
                            ],
                            learningGuide: `<div class="learning-guide"><h4>Phase 1 Mastery Check</h4><p>✅ Explain Big-O? ✅ Solve two-pointer? ✅ Hash map applications? ✅ Binary search? ✅ Sorting? ✅ Linked lists? ✅ Stacks/Queues? ✅ Strings? If all yes, proceed to Phase 2!</p></div>`
                        }
                    ]
                }
            ]
        }
    ],
    patterns: [
        { name: "🪟 Sliding Window", content: "<strong>Concept:</strong> Maintain dynamic window, expand/contract based on condition<br><strong>When:</strong> Subarray/substring with constraint<br><strong>Time:</strong> Usually O(n)<br><strong>Example:</strong> Longest substring without repeat" },
        { name: "👉👈 Two Pointers", content: "<strong>Concept:</strong> Two pointers move toward/away from each other<br><strong>When:</strong> Sorted arrays, pairs, palindromes<br><strong>Space:</strong> O(1)<br><strong>Example:</strong> Valid palindrome" },
        { name: "➕ Prefix Sum", content: "<strong>Concept:</strong> Precompute cumulative sum for O(1) queries<br><strong>When:</strong> Range sum queries, subarray problems<br><strong>Time:</strong> O(n) preprocessing + O(1) query<br><strong>Example:</strong> Subarray sum equals K" },
        { name: "🔍 Binary Search", content: "<strong>Concept:</strong> Eliminate half search space each iteration<br><strong>When:</strong> Sorted input or monotonic answer space<br><strong>Time:</strong> O(log n)<br><strong>Example:</strong> Search rotated array" },
        { name: "📊 BFS", content: "<strong>Concept:</strong> Level-order traversal using queue<br><strong>When:</strong> Shortest path in unweighted graphs<br><strong>Time:</strong> O(V+E)<br><strong>Example:</strong> Word ladder" },
        { name: "📈 DFS", content: "<strong>Concept:</strong> Deep exploration via recursion/stack<br><strong>When:</strong> All paths, connectivity, permutations<br><strong>Time:</strong> O(V+E)<br><strong>Example:</strong> Number of islands" },
        { name: "📚 Hash Map", content: "<strong>Concept:</strong> Key-value pairs for O(1) lookup<br><strong>When:</strong> Frequency counting, complement finding<br><strong>Space:</strong> O(n)<br><strong>Example:</strong> Two sum" },
        { name: "⬆️ Monotonic Stack", content: "<strong>Concept:</strong> Stack maintains elements in order<br><strong>When:</strong> Next greater/smaller elements<br><strong>Time:</strong> O(n)<br><strong>Example:</strong> Daily temperatures" }
    ]
};

// Export for use in browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DSA_CURRICULUM;
}