import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from "phosphor-react";

import styles from "./CheckList.module.css";
import { VoidList } from "./VoidList";
import { ToDo } from "./toDo";

export function CheckList() {
    const [tasks, setTasks] = useState([
        {
            id: uuidv4(),
            content: 'Terminar o desafio',
            isComplete: false
        },
        {
            id: uuidv4(),
            content: 'Importar projeto no Git',
            isComplete: false
        },
    ])

    const [newTaskText, setNewTaskText] = useState([])

    const [markedTaskCount, setMarkedTaskCount] = useState(0);

    const taskQuantity = tasks.length;
    
    // Problemas para verificar se input está vazio
    const isNewTaskEmpty = newTaskText.length === 0;

    function handleCreateNewTask() {
        event.preventDefault()

        setTasks([...tasks,
        {
            id: uuidv4(),
            content: newTaskText,
            isComplete: false
        }
        ])

        setNewTaskText([])
    }

    function handleNewTaskChange() {
        event.target.setCustomValidity('');

        setNewTaskText(event.target.value);
    }

    function handleNewTaskInvalid() {
        event.target.setCustomValidity('Esse Campo é obrigatório!');
    }

    function markTask(taskToMark, taskState) {
        const addMarkedTaskCount = markedTaskCount + 1;
        const removeMarkedTaskCount = markedTaskCount - 1;

        if (taskState === "true") {
            setMarkedTaskCount(addMarkedTaskCount)
        } else if (taskState === "false") {
            setMarkedTaskCount(removeMarkedTaskCount)
        }
    }

    // Problemas para deletar a task, mas os componentes se comunicam pelas propriedades
    function deleteTask(taskToDelete) {
        console.log(`Deletar atividade ${taskToDelete}`)

        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task != {
                id: taskToDelete,
                content: newTaskText,
                isComplete: false
            }
        })

        setTasks(tasksWithoutDeletedOne)
    }

    function EmptyList() {
        const isEmptyList = taskQuantity;
    
        if (isEmptyList === 0) {
          return <VoidList />;
        }
      }

    return (
        <div>
            <form onSubmit={handleCreateNewTask} className={styles.searchForm}>
                <input
                    name="content"
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleNewTaskChange}
                    value={newTaskText}
                    onInvalid={handleNewTaskInvalid}
                    required
                />

                <button type="submit">
                    Criar
                    <PlusCircle size={16} className={styles.plusCircle} disabled={isNewTaskEmpty} />
                </button>
            </form>

            <div className={styles.taskList}>
                <div className={styles.checkList}>
                    <header>
                        <div>
                            <strong className={styles.checkListTitle}>Tarefas criadas</strong>
                            <span>{taskQuantity}</span>
                        </div>

                        <div>
                            <strong className={styles.checkListTitle2}>Concluidas</strong>
                            <span>
                                {markedTaskCount} de {taskQuantity}
                            </span>
                        </div>
                    </header>

                    <main>
                        <EmptyList isEmptyList={taskQuantity} />

                        {tasks.map(task => {
                            return (
                                <ToDo
                                    key={task.id}
                                    id={task.id}
                                    content={task.content}
                                    onDeleteTask={deleteTask}
                                    onMarkTask={markTask}
                                />
                            )
                        })}
                    </main>
                </div>
            </div>

        </div>
    )
}