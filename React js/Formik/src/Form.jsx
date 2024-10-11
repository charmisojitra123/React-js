import React from 'react'
import { useFormik } from 'formik'

const Form = () => {


    const initialValues = {
        fullName:'',
        email:'',
        password:''
    }

    const onSubmit = values => {
        console.log('formValue', values);
    }

    const validate = values =>{
        const errors = {}
        if(!values.fullName){
            errors.fullName = 'Required'
        }
        if(!values.email){
            errors.email = 'Required'
        }else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
        if(!values.password){
            errors.password = 'Required'
        }
        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    

    return (
        <div>
            <div className='flex h-lvh justify-center items-center'>
                <form className='bg-purple-100 flex flex-col p-12 rounded-lg w-[25%]' onSubmit={formik.handleSubmit}>
                    <label htmlFor="fullName" className='font-semibold mb-1'>FullName</label>
                    <input className='mb-1 p-2 rounded' type="text" name="fullName" id="fullName" onChange={formik.handleChange}/>
                    {formik.errors.fullName ? <div className='text-red-600 font-semibold'>{formik.errors.fullName}</div>:null}
                    <label htmlFor="email" className='mt-6 mb-1 font-semibold'>Email</label>
                    <input className='mb-1 p-2 rounded' type="email" name="email" id="email" onChange={formik.handleChange} />
                    {formik.errors.email ? <div className='text-red-600 font-semibold'>{formik.errors.email}</div>:null}

                    <label htmlFor="password" className='mt-6 mb-1 font-semibold'>Password</label>
                    <input className='mb-1 p-2 rounded' type="password" name="password" id="password" onChange={formik.handleChange} />
                    {formik.errors.password ? <div className='text-red-600 font-semibold'>{formik.errors.password}</div>:null}

                    <button type="submit" className='bg-purple-700 text-white p-2 mt-8 rounded'>Submit</button>
                </form>
            </div> 
        </div>
    )
}

export default Form