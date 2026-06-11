// DSA Mastery 150-Day Curriculum Data
const CURRICULUM = [
    { day: 1, title: "Big O Notation & Time Complexity", topic: "Fundamentals", difficulty: "Easy", description: "Understand time and space complexity analysis, Big O notation, and how to calculate algorithm efficiency." },
    { day: 2, title: "Arrays: Basic Operations", topic: "Arrays", difficulty: "Easy", description: "Learn array fundamentals, indexing, insertion, deletion, and traversal techniques." },
    { day: 3, title: "Array: Two Sum Problem", topic: "Arrays", difficulty: "Easy", description: "Solve the classic two-sum problem using brute force, sorting, and hash maps." },
    { day: 4, title: "Array: Contains Duplicate", topic: "Arrays", difficulty: "Easy", description: "Detect duplicates in arrays using hash sets and sorting approaches." },
    { day: 5, title: "Array: Best Time to Buy Stock", topic: "Arrays", difficulty: "Easy", description: "Find maximum profit by tracking minimum price and maximum profit simultaneously." },
    { day: 6, title: "Array: Valid Anagram", topic: "Strings", difficulty: "Easy", description: "Check if two strings are anagrams using sorting and frequency counting." },
    { day: 7, title: "String: Reverse String", topic: "Strings", difficulty: "Easy", description: "Reverse a string using two-pointer technique and built-in methods." },
    { day: 8, title: "String: Palindrome Check", topic: "Strings", difficulty: "Easy", description: "Determine if a string is a palindrome using two-pointer approach." },
    { day: 9, title: "Linked List: Introduction", topic: "Linked Lists", difficulty: "Easy", description: "Learn linked list structure, node creation, and basic operations." },
    { day: 10, title: "Linked List: Insert & Delete", topic: "Linked Lists", difficulty: "Easy", description: "Master insertion and deletion operations in linked lists." },
    { day: 11, title: "Linked List: Reverse", topic: "Linked Lists", difficulty: "Medium", description: "Reverse a linked list iteratively and recursively." },
    { day: 12, title: "Linked List: Cycle Detection", topic: "Linked Lists", difficulty: "Medium", description: "Detect cycles using Floyd's cycle detection algorithm." },
    { day: 13, title: "Stack: Basics", topic: "Stacks", difficulty: "Easy", description: "Understand LIFO principle, push, pop operations, and stack applications." },
    { day: 14, title: "Stack: Valid Parentheses", topic: "Stacks", difficulty: "Easy", description: "Use stack to validate balanced parentheses, brackets, and braces." },
    { day: 15, title: "Queue: Basics", topic: "Queues", difficulty: "Easy", description: "Learn FIFO principle, enqueue, dequeue operations, and queue implementations." },
    { day: 16, title: "Hash Map: Design & Usage", topic: "Hashing", difficulty: "Medium", description: "Understand hash functions, collision handling, and hash map operations." },
    { day: 17, title: "Hash Map: Group Anagrams", topic: "Hashing", difficulty: "Medium", description: "Group anagrams together using hash maps efficiently." },
    { day: 18, title: "Sliding Window: Fixed Size", topic: "Arrays", difficulty: "Medium", description: "Apply sliding window technique to fixed-size problems." },
    { day: 19, title: "Sliding Window: Variable Size", topic: "Arrays", difficulty: "Medium", description: "Use sliding window with dynamic window size for optimization." },
    { day: 20, title: "Binary Search: Basics", topic: "Binary Search", difficulty: "Easy", description: "Implement binary search and understand logarithmic time complexity." },
    { day: 21, title: "Binary Search: First & Last Position", topic: "Binary Search", difficulty: "Medium", description: "Find first and last occurrence using binary search variations." },
    { day: 22, title: "Binary Search: Rotated Array", topic: "Binary Search", difficulty: "Medium", description: "Search in rotated sorted array using modified binary search." },
    { day: 23, title: "Two Pointers: Merge Sorted Arrays", topic: "Arrays", difficulty: "Easy", description: "Merge two sorted arrays efficiently using two-pointer technique." },
    { day: 24, title: "Two Pointers: Container With Most Water", topic: "Arrays", difficulty: "Medium", description: "Find maximum water container area using two-pointer approach." },
    { day: 25, title: "Recursion: Basics", topic: "Recursion", difficulty: "Easy", description: "Understand recursion, base cases, and recursive call stack." },
    { day: 26, title: "Recursion: Factorial & Fibonacci", topic: "Recursion", difficulty: "Easy", description: "Implement classic recursive problems with optimization considerations." },
    { day: 27, title: "Tree: Traversal - InOrder", topic: "Trees", difficulty: "Medium", description: "Implement in-order traversal both iteratively and recursively." },
    { day: 28, title: "Tree: Traversal - PreOrder & PostOrder", topic: "Trees", difficulty: "Medium", description: "Master pre-order and post-order traversals with use cases." },
    { day: 29, title: "Tree: Level Order (BFS)", topic: "Trees", difficulty: "Medium", description: "Implement breadth-first search using queue for level-order traversal." },
    { day: 30, title: "Tree: Maximum Path Sum", topic: "Trees", difficulty: "Hard", description: "Find maximum path sum in binary tree using DFS." },
    { day: 31, title: "Binary Search Tree: Basics", topic: "Trees", difficulty: "Medium", description: "Understand BST properties, search, insert, and delete operations." },
    { day: 32, title: "Graph: Representation & DFS", topic: "Graphs", difficulty: "Medium", description: "Learn adjacency list/matrix, implement depth-first search." },
    { day: 33, title: "Graph: BFS & Shortest Path", topic: "Graphs", difficulty: "Medium", description: "Implement breadth-first search and find shortest paths in unweighted graphs." },
    { day: 34, title: "Graph: Dijkstra's Algorithm", topic: "Graphs", difficulty: "Hard", description: "Implement Dijkstra's algorithm for shortest path in weighted graphs." },
    { day: 35, title: "Graph: Union-Find (Disjoint Set)", topic: "Graphs", difficulty: "Hard", description: "Learn union-find data structure for connectivity problems." },
    { day: 36, title: "Dynamic Programming: Fibonacci (Memoization)", topic: "Dynamic Programming", difficulty: "Medium", description: "Optimize recursive Fibonacci using memoization." },
    { day: 37, title: "DP: Climbing Stairs", topic: "Dynamic Programming", difficulty: "Easy", description: "Solve climbing stairs problem with DP optimization." },
    { day: 38, title: "DP: House Robber", topic: "Dynamic Programming", difficulty: "Medium", description: "Maximize robbery with constraint using dynamic programming." },
    { day: 39, title: "DP: Longest Increasing Subsequence", topic: "Dynamic Programming", difficulty: "Medium", description: "Find LIS using DP with O(n²) and O(n log n) approaches." },
    { day: 40, title: "DP: 0/1 Knapsack", topic: "Dynamic Programming", difficulty: "Hard", description: "Classic knapsack problem using 2D DP." },
    { day: 41, title: "Backtracking: Permutations", topic: "Backtracking", difficulty: "Medium", description: "Generate all permutations using backtracking." },
    { day: 42, title: "Backtracking: Combinations", topic: "Backtracking", difficulty: "Medium", description: "Generate all combinations with given parameters." },
    { day: 43, title: "Backtracking: N-Queens", topic: "Backtracking", difficulty: "Hard", description: "Solve N-Queens problem using backtracking with pruning." },
    { day: 44, title: "Backtracking: Word Search", topic: "Backtracking", difficulty: "Medium", description: "Search word in 2D grid using DFS and backtracking." },
    { day: 45, title: "Sorting: Bubble & Insertion Sort", topic: "Sorting", difficulty: "Easy", description: "Implement and understand basic sorting algorithms." },
    { day: 46, title: "Sorting: Merge Sort", topic: "Sorting", difficulty: "Medium", description: "Implement merge sort with O(n log n) complexity." },
    { day: 47, title: "Sorting: Quick Sort", topic: "Sorting", difficulty: "Medium", description: "Implement quick sort with partition strategy." },
    { day: 48, title: "Sorting: Heap Sort", topic: "Sorting", difficulty: "Medium", description: "Use heap data structure for sorting." },
    { day: 49, title: "Heap: Min & Max Heap", topic: "Heaps", difficulty: "Medium", description: "Implement heap operations and heapify algorithms." },
    { day: 50, title: "Heap: Top K Elements", topic: "Heaps", difficulty: "Medium", description: "Find K largest/smallest elements efficiently using heap." },
    { day: 51, title: "Trie: Introduction", topic: "Trie", difficulty: "Medium", description: "Build Trie data structure for prefix-based search." },
    { day: 52, title: "Trie: Word Search II", topic: "Trie", difficulty: "Hard", description: "Search multiple words in 2D grid using Trie and DFS." },
    { day: 53, title: "Segment Tree: Basics", topic: "Advanced Data Structures", difficulty: "Hard", description: "Implement segment tree for range queries." },
    { day: 54, title: "Bit Manipulation: Basics", topic: "Bit Manipulation", difficulty: "Medium", description: "Understand bitwise operations and common tricks." },
    { day: 55, title: "Bit Manipulation: Single Number", topic: "Bit Manipulation", difficulty: "Medium", description: "Find single number using XOR properties." },
    { day: 56, title: "String: KMP Algorithm", topic: "Strings", difficulty: "Hard", description: "Implement Knuth-Morris-Pratt algorithm for pattern matching." },
    { day: 57, title: "String: Longest Palindromic Substring", topic: "Strings", difficulty: "Medium", description: "Find longest palindrome using expansion and DP." },
    { day: 58, title: "Array: Product of Array Except Self", topic: "Arrays", difficulty: "Medium", description: "Calculate products efficiently without division." },
    { day: 59, title: "Array: Subarray Sum Equals K", topic: "Arrays", difficulty: "Medium", description: "Find subarrays with specific sum using prefix sums." },
    { day: 60, title: "Review & Problem Solving Practice Day", topic: "Review", difficulty: "Easy", description: "Review fundamentals and solve mixed problems." }
];

// Generate full 150-day curriculum by extending patterns
function generateFullCurriculum() {
    const days = [...CURRICULUM];
    const topics = ["Arrays", "Strings", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs", "Sorting", "Searching", "Dynamic Programming", "Bit Manipulation", "System Design"];
    
    const descriptions = [
        "Master this topic with practice problems and edge cases",
        "Implement solution and optimize for time and space complexity",
        "Solve multiple variations of this problem type",
        "Practice on LeetCode and understand key patterns",
        "Review and reinforce learning with mock problems"
    ];
    
    // Fill up to 150 days
    while (days.length < 150) {
        const dayNum = days.length + 1;
        const topic = topics[(dayNum - 1) % topics.length];
        const difficulty = ["Easy", "Medium", "Hard"][Math.floor(Math.random() * 3)];
        
        days.push({
            day: dayNum,
            title: `${topic} - Problem Solving Day ${Math.floor(dayNum / 10) + 1}`,
            topic: topic,
            difficulty: difficulty,
            description: descriptions[Math.floor(Math.random() * descriptions.length)]
        });
    }
    
    return days;
}

const curriculum = generateFullCurriculum();

// DOM Elements
const globalSearch = document.getElementById('globalSearch');
const themeBtn = document.getElementById('themeBtn');
const topicFilter = document.getElementById('topicFilter');
const statusFilter = document.getElementById('statusFilter');
const curriculumGrid = document.getElementById('curriculumGrid');
const pagination = document.getElementById('pagination');
const dayModal = document.getElementById('dayModal');
const dayDetail = document.getElementById('dayDetail');
const closeModal = document.getElementById('closeModal');
const exportBtn = document.getElementById('exportBtn');
const startCurriculumBtn = document.getElementById('startCurriculumBtn');
const viewProgressBtn = document.getElementById('viewProgressBtn');

// State
let currentPage = 1;
const itemsPerPage = 12;
let filteredCurriculum = [...curriculum];

// Initialize
function init() {
    populateTopicFilter();
    updateStats();
    renderCurriculum();
    setupEventListeners();
    loadTheme();
}

function populateTopicFilter() {
    const topics = [...new Set(curriculum.map(d => d.topic))].sort();
    topics.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic;
        option.textContent = topic;
        topicFilter.appendChild(option);
    });
}

function setupEventListeners() {
    topicFilter.addEventListener('change', applyFilters);
    statusFilter.addEventListener('change', applyFilters);
    globalSearch.addEventListener('input', applyFilters);
    closeModal.addEventListener('click', closeDay);
    dayModal.addEventListener('click', (e) => {
        if (e.target === dayModal) closeDay();
    });
    themeBtn.addEventListener('click', toggleTheme);
    exportBtn.addEventListener('click', exportProgress);
    startCurriculumBtn.addEventListener('click', () => {
        document.getElementById('curriculum').scrollIntoView({ behavior: 'smooth' });
        openDay(curriculum[0]);
    });
    viewProgressBtn.addEventListener('click', () => {
        document.querySelector('.progress-wrapper').scrollIntoView({ behavior: 'smooth' });
    });
}

function applyFilters() {
    currentPage = 1;
    const topic = topicFilter.value;
    const status = statusFilter.value;
    const searchTerm = globalSearch.value.toLowerCase();

    filteredCurriculum = curriculum.filter(day => {
        const matchesTopic = !topic || day.topic === topic;
        const matchesStatus = !status || (status === 'done' ? isCompleted(day.day) : !isCompleted(day.day));
        const matchesSearch = !searchTerm || 
            day.title.toLowerCase().includes(searchTerm) ||
            day.topic.toLowerCase().includes(searchTerm) ||
            day.description.toLowerCase().includes(searchTerm);
        
        return matchesTopic && matchesStatus && matchesSearch;
    });

    renderCurriculum();
}

function renderCurriculum() {
    curriculumGrid.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = filteredCurriculum.slice(start, end);

    pageItems.forEach(day => {
        const card = createDayCard(day);
        curriculumGrid.appendChild(card);
    });

    renderPagination();
}

function createDayCard(day) {
    const card = document.createElement('div');
    card.className = `day-card ${isCompleted(day.day) ? 'completed' : ''}`;
    card.innerHTML = `
        <div class="day-status">${isCompleted(day.day) ? '✓' : ''}</div>
        <div class="day-number">Day ${day.day}</div>
        <div class="day-title">${day.title}</div>
        <div class="day-topic">${day.topic}</div>
        <div class="difficulty ${day.difficulty.toLowerCase()}">${day.difficulty}</div>
    `;
    card.addEventListener('click', () => openDay(day));
    return card;
}

function openDay(day) {
    dayDetail.innerHTML = `
        <h2>Day ${day.day}: ${day.title}</h2>
        <div style="display: flex; gap: 1rem; margin: 1rem 0; flex-wrap: wrap;">
            <span class="day-topic">${day.topic}</span>
            <span class="difficulty ${day.difficulty.toLowerCase()}">${day.difficulty}</span>
        </div>
        <p style="color: var(--text-secondary); line-height: 1.8;">${day.description}</p>
        <h3 style="margin-top: 1.5rem;">What to Do Today</h3>
        <ol style="color: var(--text-secondary);">
            <li>Read and understand the concept</li>
            <li>Solve 3-5 practice problems on LeetCode</li>
            <li>Review edge cases and optimize solution</li>
            <li>Mark this day as complete when finished</li>
        </ol>
        <div style="display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="window.toggleCompletion(${day.day}, ${!isCompleted(day.day)})">
                ${isCompleted(day.day) ? '✓ Mark as Incomplete' : '✅ Mark as Complete'}
            </button>
            <a href="https://leetcode.com/explore/interview/card/top-interview-questions/" target="_blank" rel="noopener" class="btn btn-secondary">
                Practice Problems →
            </a>
        </div>
    `;
    dayModal.classList.add('active');
    dayModal.setAttribute('aria-hidden', 'false');
}

function closeDay() {
    dayModal.classList.remove('active');
    dayModal.setAttribute('aria-hidden', 'true');
}

function toggleCompletion(dayNum, completed) {
    if (completed) {
        localStorage.setItem(`dsa_day_${dayNum}`, '1');
    } else {
        localStorage.removeItem(`dsa_day_${dayNum}`);
    }
    updateStats();
    renderCurriculum();
    closeDay();
}

function isCompleted(dayNum) {
    return localStorage.getItem(`dsa_day_${dayNum}`) === '1';
}

function updateStats() {
    const completed = curriculum.filter(d => isCompleted(d.day)).length;
    const percent = Math.round((completed / 150) * 100);
    
    document.getElementById('completedCount').textContent = completed;
    document.getElementById('progressPercent').textContent = percent + '%';
    document.getElementById('progressText').textContent = `${completed} of 150 completed`;
    document.getElementById('mainProgressBar').style.width = percent + '%';
    
    // Calculate streak
    let streak = 0;
    for (let i = 1; i <= 150; i++) {
        if (isCompleted(i)) streak++;
        else break;
    }
    document.getElementById('streakCount').textContent = streak;
}

function renderPagination() {
    const totalPages = Math.ceil(filteredCurriculum.length / itemsPerPage);
    pagination.innerHTML = '';
    
    if (totalPages <= 1) return;

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '← Previous';
    prevBtn.className = 'btn btn-small';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        currentPage--;
        renderCurriculum();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    pagination.appendChild(prevBtn);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = `btn btn-small ${i === currentPage ? 'active' : ''}`;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            renderCurriculum();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        pagination.appendChild(pageBtn);
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next →';
    nextBtn.className = 'btn btn-small';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        currentPage++;
        renderCurriculum();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    pagination.appendChild(nextBtn);
}

function exportProgress() {
    let csv = 'Day,Title,Topic,Difficulty,Status\n';
    curriculum.forEach(day => {
        csv += `${day.day},"${day.title}","${day.topic}","${day.difficulty}","${isCompleted(day.day) ? 'Done' : 'Todo'}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dsa-progress-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('dsa_theme', isLight ? 'light' : 'dark');
    themeBtn.textContent = isLight ? '☀️' : '🌙';
}

function loadTheme() {
    const theme = localStorage.getItem('dsa_theme') || 'dark';
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        themeBtn.textContent = '☀️';
    }
}

// Make toggleCompletion globally accessible
window.toggleCompletion = toggleCompletion;

// Initialize app
init();
