import React from 'react'
import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from 'formik'


const TaskForm1 = () => {

    const initialValues = {
        name: '',
        email: '',
        school: '',
        phone: '',
        gender:'',
        course:'',
        location:''
    }

    const onSubmit = values => {
        console.log('formValue', values);
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Email is Invalid').required('Required'),
        school: Yup.string().required('Required'),
        phone: Yup.number().max(15 , 'Phone should contain 10 numbers').required('Required'),
        gender: Yup.string().required('Required'),
        course: Yup.string().required('Required'),
        location: Yup.string().required('Required'),
    })

  return (
    <div className='bg-gradient-to-r from-pink-500 to-purple-500 w-[50%] m-auto p-16'>
        <div className='bg-white w-full p-12 rounded-xl'>
            <h1 className='text-center font-bold text-2xl text-pink-600 mb-4'>Student Details Form</h1>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <div className='grid grid-cols-2 gap-5'>
                        <div>
                            <label htmlFor="name" className='font-semibold'>Name</label><br />
                            <Field className='mt-2 mb-1 p-2 rounded border-2 border-gray-300 w-full' type="text" name="name" id="name" />
                            <div className='h-4'>
                                <ErrorMessage name="name" >
                                    {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                                </ErrorMessage>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className='font-semibold'>Email</label><br />
                            <Field className='mt-2 mb-1 p-2 rounded border-2 border-gray-300 w-full' type="email" name="email" id="email" />
                            <div className='h-4'>
                                <ErrorMessage name="email" >
                                    {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                                </ErrorMessage>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="school" className='font-semibold'>School</label><br />
                            <Field className='mt-2 mb-1 p-2 rounded border-2 border-gray-300 w-full' type="text" name="school" id="school" />
                            <div className='h-4'>
                                <ErrorMessage name="school" >
                                    {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                                </ErrorMessage>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className='font-semibold'>Phone</label><br />
                            <Field className='mt-2 mb-1 p-2 rounded border-2 border-gray-300 w-full' type="number" name="phone" id="phone" />
                            <div className='h-4'>
                                <ErrorMessage name="phone" >
                                    {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                                </ErrorMessage>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <label htmlFor="gender" className='font-semibold'>Gender</label><br />
                            <input type="radio" name="gender" id="gender" className='mt-2 mb-1 me-1 accent-pink-500' />Male <br />
                            <input type="radio" name="gender" id="gender" className='mb-1 me-1 accent-pink-500' />Female
                            <div className='h-4'>
                                <ErrorMessage name="gender" >
                                    {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                                </ErrorMessage>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="course" className='font-semibold'>Course</label><br />
                            <input type="checkbox" name="course" id="course" className='mt-2 mb-1 me-1 accent-pink-500' />It <br />
                            <input type="checkbox" name="course" id="course" className='mb-1 me-1 accent-pink-500' />HRM <br />
                            <input type="checkbox" name="course" id="course" className='mb-1 me-1 accent-pink-500' />English <br />
                            <input type="checkbox" name="course" id="course" className='mb-1 me-1 accent-pink-500' />Grapic Design
                            <div className='h-4'>
                                <ErrorMessage name="course" >
                                    {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                                </ErrorMessage>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="location" className='font-semibold'>Institute Location</label><br />
                            <select name="location" id="location" className='mt-2 mb-1 px-1 rounded me-1 border-2 border-gray-300'>
                                <option value="germany">Germany</option>
                                <option value="usa">U.S.A</option>
                                <option value="dubai">Dubai</option>
                                <option value="canada">Canada</option>
                            </select> 
                            <div className='h-4'>
                                <ErrorMessage name="location" >
                                    {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                                </ErrorMessage>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className='bg-pink-600 text-white p-3 w-full mt-2'>Submit</button>
                </Form>
            </Formik>
        </div>
    </div>
  )
}

export default TaskForm1
