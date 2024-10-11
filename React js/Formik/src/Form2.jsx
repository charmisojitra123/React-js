import React from 'react'
import * as Yup from 'yup'
import { Form , Formik , Field , ErrorMessage } from 'formik'
import { useFormik } from 'formik'

const Form2 = () => {

    const initialValues = {
        fullName:'',
        email:'',
        password:''
    }

    const onSubmit = values => {
        console.log('formValue', values);
    }

    const validationSchema = Yup.object({
        fullName: Yup.string().max(15 , 'Maximum 15 character').required('Required'),
        email: Yup.string().email('Invalid Email Address').required('Required'),
        password: Yup.string().required('Required')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

  return (
    <div>
      <div className='flex h-lvh justify-center items-center'>
                <form className='bg-purple-100 flex flex-col p-12 rounded-lg w-[25%]' onSubmit={formik.handleSubmit} validationSchema={validationSchema}>
                    <label htmlFor="fullName" className='font-semibold mb-1'>FullName</label>
                    <input className='mb-1 p-2 rounded' type="text" name="fullName" id="fullName"  onBlur={formik.handleBlur} onChange={formik.handleChange}/>
                    {formik.touched.fullName && formik.errors.fullName ? <div className='text-red-600 font-semibold'>{formik.errors.fullName}</div>:null}
                    <label htmlFor="email" className='mt-6 mb-1 font-semibold'>Email</label>
                    <input className='mb-1 p-2 rounded' type="email" name="email" id="email" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                    {formik.touched.email && formik.errors.email ? <div className='text-red-600 font-semibold'>{formik.errors.email}</div>:null}

                    <label htmlFor="password" className='mt-6 mb-1 font-semibold'>Password</label>
                    <input className='mb-1 p-2 rounded' type="password" name="password" id="password" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                    {formik.touched.password && formik.errors.password ? <div className='text-red-600 font-semibold'>{formik.errors.password}</div>:null}

                    <button type="submit" className='bg-purple-700 text-white p-2 mt-8 rounded'>Submit</button>
                </form>
            </div>
    </div>
  )
}

export default Form2
