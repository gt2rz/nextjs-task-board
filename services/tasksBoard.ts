import { taskBoardMock } from "@/mocks/taskBoard";

/**
 * Retrieves the task board for a given project.
 * 
 * This function fetches the tasks from the local storage. If no tasks are found,
 * it loads test tasks into the local storage.
 * 
 * @param {number} projectId - The ID of the project for which the task board is being retrieved.
 * @returns {Promise<any[]>} A promise that resolves to an array of tasks.
 */
export const getTaskBoard = async (projectId: string) => {
    console.log('Get task board', projectId);
    
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    console.log('Tasks', tasks);
    
    if(!tasks || tasks.length === 0) {
        console.log('Test tasks have been loaded');
        localStorage.setItem('tasks', JSON.stringify(taskBoardMock));
    }

    const tasksByProject = tasks.filter((pool: Pool) => {
        console.log('Pool', pool);
        console.log('Project ID', projectId);
        
        
        return pool.projectId == projectId
    });

    return tasksByProject;
}



export const saveMoveTask = async (taskId: number, poolIdFrom: number, poolIdTo: number) => {
    console.log('Move task', taskId, poolIdFrom, poolIdTo);
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    // if(!tasks) 
    if(!tasks) {
        console.log(taskBoardMock);
        
        localStorage.setItem('tasks', JSON.stringify(taskBoardMock));
    }

    console.log('Tasks', tasks);
    
    // const task = tasks.find((task: any) => task.id === taskId);
    // console.log('Task', task);
    
}