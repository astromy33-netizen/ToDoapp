document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Функция для добавления новой задачи
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            alert('Пожалуйста, введите задачу');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <button class="check-btn">✓</button>
            <span class="task-text">${taskText}</span>
            <button class="delete-btn">Удалить</button>
        `;
        
        taskList.appendChild(li);
        taskInput.value = '';
        
        // Добавляем обработчик для кнопки выполнения
        const checkBtn = li.querySelector('.check-btn');
        checkBtn.addEventListener('click', function() {
            const taskText = li.querySelector('.task-text');
            taskText.classList.toggle('completed');
            
            // Меняем текст кнопки в зависимости от состояния
            if (taskText.classList.contains('completed')) {
                checkBtn.textContent = '✓';
                checkBtn.style.backgroundColor = '#888';
            } else {
                checkBtn.textContent = '✓';
                checkBtn.style.backgroundColor = '#4CAF50';
            }
        });
        
        // Добавляем обработчик для кнопки удаления
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });
    }

    // Обработчик для кнопки "Добавить"
    addTaskBtn.addEventListener('click', addTask);

    // Обработчик для добавления задачи по нажатию Enter
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});