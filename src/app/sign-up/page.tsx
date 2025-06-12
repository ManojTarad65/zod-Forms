"use client"
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card'
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'


const SignUp = () => {
   const form= useForm({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    })
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
        <Card className='w-full max-w-md p-6 shadow-lg'>
            <CardHeader>
                <CardTitle className='text-center text-2xl font-bold'>Sign Up</CardTitle>
            </CardHeader>
            <CardContent>
               <Form {...form}>
                <form className='space-y-4'>
                    <div>
                        <FormField name='name' render={(filed) =>(

                            <div>
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input 
                                        type='text'
                                        placeholder='Enter your name' {...filed}/>
                                    </FormControl>
                                </FormItem>
                            </div>
                        )} />
                    </div>  
                    <div>
                        <FormField name='email' render={(filed) =>(

                            <div>
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                        type='email'
                                        placeholder='Enter your email' {...filed}/>
                                    </FormControl>
                                </FormItem>
                            </div>
                        )} />
                    </div>
                    <div>
                        <FormField name='password' render={(filed) =>(

                            <div>
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input 
                                        type='password'
                                        placeholder='Enter your password' {...filed}/>
                                    </FormControl>
                                </FormItem>
                            </div>
                        )} />
                    </div>
                    
                </form>
               </Form>
            </CardContent>
        </Card>
    </div>
  )
}

export default SignUp