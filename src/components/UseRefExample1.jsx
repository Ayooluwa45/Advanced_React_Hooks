import React from 'react'

function UseRefExample1() {
  return (
    <div>
        <form>
            <label htmlFor="name">
                <input type="text" id='name' className='form-control mb-2' />
                <button type='submit' className='btn btn-primary'>
Submit
                </button>
            </label>
        </form>
    </div>
  )
}

export default UseRefExample1