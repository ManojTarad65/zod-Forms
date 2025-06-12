"use client"
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card'
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { signUpSchema } from '@/schemas'
import { z } from 'zod'
import { createUser } from '@/actions'
const SignUp = () => {
   const form= useForm<z.infer<typeof signUpSchema>>({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    })
    async function onSubmit (values: z.infer<typeof signUpSchema>) {
        const result = await createUser(values)
        return result.status === "error" ? console.log(result.message): console.log(result.message)
    }
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
        <Card className='w-full max-w-md p-6 shadow-lg'>
            <CardHeader>
                <CardTitle className='text-center text-2xl font-bold'>Sign Up</CardTitle>
            </CardHeader>
            <CardContent>
               <Form {...form}>
                <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-4'>
                    <div>
                        <FormField name='name'
                        control={form.control}
                        render={(filed) =>(

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
                        <FormField name='email' 
                        control={form.control}
                        render={(filed) =>(

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
                        <FormField name='password' 
                        control={form.control}
                        render={(filed) =>(

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
                    <Button className='w-full' type='submit' disabled={form.formState.isSubmitting}>Sign Up</Button>
                </form>
               </Form>
            </CardContent>
        </Card>
    </div>
  )
}

export default SignUp