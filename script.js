// Get necessary elements from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Event listener for the Enter key press on the input field
taskInput.addEventListener('keypress', function(event) {
    // Check if the key pressed is the Enter key (key code 13 or 'Enter')
    if (event.key === 'Enter') {
        addTask();
    }
});

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim(); // Get the text, remove leading/trailing whitespace

    // Check if the input is not empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // 1. Create the new list item (li)
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">&times;</button>
    `;

    // 2. Add the list item to the task list (ul)
    taskList.appendChild(listItem);

    // 3. Clear the input field
    taskInput.value = "";

    // 4. Attach event listeners to the new list item

    // **Mark as complete/incomplete**
    // Clicking the list item itself toggles the 'completed' class
    listItem.addEventListener('click', function(event) {
        // Only toggle if the target is NOT the delete button
        if (!event.target.classList.contains('delete-btn')) {
            listItem.classList.toggle('completed');
        }
    });

    // **Delete task**
    // Find the delete button within the new list item
    const deleteBtn = listItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        // Remove the entire list item from its parent (taskList)
        taskList.removeChild(listItem);
    });
}