/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Input from '../input'
import Calendar from "./Calendar";

const TodoItem = ({ currentTodo, updateTodo, deleteTodo }) => {
  const [todoTitle, setTodoTitle] = useState(currentTodo.title)
  const [isEditable, setIsEditable] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [expiryDate, setExpiryDate] = useState(currentTodo.expiryDate)
  const [selectedDate, setSelectedDate] = useState(currentTodo.expiryDate)

  console.log(showCalendar)

  const handleEdit = () => {
    setIsEditable(true)
  }

  const handleDelete = () => {
    deleteTodo(currentTodo.id)
  }

  const handleSave = () => {
    setIsEditable(false);
    if (todoTitle === '') {
      updateTodo(currentTodo.id, currentTodo.title)
    } else {
      updateTodo(currentTodo.id, todoTitle)
    }
  }

  const handleCancel = () => {
    setIsEditable(false)
    setTodoTitle(inputRef.current)
  }

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  }

  const handleSetExpiryDate = () => {
    setExpiryDate(selectedDate)
    setShowCalendar(!showCalendar)
  }

  return (
    <div className="w-4/12 flex items-center justify-between px-4 py-3 border border-purple-200 rounded-lg">
      {!isEditable && <p>{currentTodo.title}</p>}
      {isEditable && (
        <form className="w-full mr-3" onSubmit={handleSave}>
          <Input
            name="title"
            placeholder="Todo title"
            value={todoTitle}
            setValue={setTodoTitle}
          />
        </form>
      )}
      <div className="flex gap-2">
        {!isEditable && (
          <>
            <button
              type="button"
              className="bg-purple-600 text-white px-3 py-1 rounded-md text-sm hover:bg-purple-700 active:scale-95"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              type="button"
              className="text-purple-600 border border-purple-600 px-3 py-1 rounded-md text-sm hover:shadow-sm hover:shadow-purple-300 active:scale-95"
              onClick={handleDelete}
            >
              Delete
            </button>
          </>
        )}
        {isEditable && (
          <>
            <button
              type="button"
              className="bg-purple-600 text-white px-3 py-1 rounded-md text-sm hover:bg-purple-700 active:scale-95"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="text-purple-600 border border-purple-600 px-3 py-1 rounded-md text-sm hover:shadow-sm hover:shadow-purple-300 active:scale-95"
              onClick={handleCancel}
            >
              Cancel
            </button>
            {!showCalendar && (
              <button
                type='button'
                className='text-purple-600 border border-purple-600 px-3 py-1 rounded-md text-sm hover:shadow-sm hover:shadow-purple-300 active:scale-95'
                onClick={toggleCalendar}
              >
                Set date
              </button>
            )}
            {showCalendar && (
              <>
                <div className='border border-purple-600 m-auto text-justify'>
                  <Calendar setSelectedDate={setSelectedDate} />
                </div>
                <button onClick={handleSetExpiryDate}>OK</button>
              </>
            )}
            {expiryDate.length !== 0 ? `Deadline: ${expiryDate}` : null}
          </>
        )}
      </div>
    </div>
  )
}

export default TodoItem
