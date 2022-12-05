import { FC, useState, useRef } from 'react'

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const [isDrag, setIsDrag] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value)
  }

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {}

  const dragWipPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  }

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
    console.log('drop')
  }

  return (
    <div>
      <input
        value={value}
        onChange={changeHandler}
        type='text'
        placeholder='управляемый'
      />
      <input ref={inputRef} type='text' placeholder='неуправляемый' />
      <button onClick={clickHandler}>click</button>
      <div
        draggable
        onDrag={dragHandler}
        style={{ width: 200, height: 200, background: 'red' }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWipPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? 'green' : 'red',
          marginTop: 15,
        }}
      ></div>
    </div>
  )
}

export default EventsExample
