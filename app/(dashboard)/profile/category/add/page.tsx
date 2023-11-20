"use client";

import Button from "@/components/button";
import DashboardTitle from "@/components/dashboard-title";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  category: z.string().min(1),
  categoryDescription: z.string().min(1),
});

const AddCategory = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
      categoryDescription: "",
    },
  });

  const submit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await fetch("/api/categories/create", {
        method: "POST",
        body: JSON.stringify({
          title: values.category,
          description: values.categoryDescription,
        }),
      });

      if (res.ok) {
        console.log("Succesfull");
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        return console.log("Error ", e.message);
      }

      if (typeof e === "string") {
        return console.log(e);
      }

      console.log("Internal Server Error");
    }
  };

  return (
    <main>
      <DashboardTitle sub1='Admin' sub2='Category' title='Add Category' />
      <section className='p-6'>
        <div className='border-[2px] border-zinc-100 py-4 px-6'>
          <p className='font-bold tracking-[0.05rem] text-zinc-700 mb-4'>
            Add Category
          </p>
          <div className='border-b-[1px] border-zinc-200 mb-4' />

          <div className='flex w-[45%] gap-x-3 items-center m-4'>
            <label className='text-[14px] text-zinc-500 font-bold tracking-[0.04rem]'>
              Category
            </label>
            <input
              {...form.register("category")}
              className='border-zinc-200 border-[1px] w-full p-[6px] rounded-md focus:outline-none text-[14px] text-zinc-500 focus:border-zinc-400'
            />
          </div>

          <div className='flex w-[49.8%] items-start -ml-[30px] gap-x-3'>
            <label className='text-[14px] text-zinc-500 font-bold tracking-[0.04rem] text-end mt-2'>
              Category Description
            </label>
            <textarea
              {...form.register("categoryDescription")}
              className='border-zinc-200 border-[1px] w-full p-[6px] rounded-md focus:outline-none text-[14px] text-zinc-500 focus:border-zinc-400 h-[125px]'
            />
          </div>

          <div className='w-[100px] mt-4 ml-[85px] scale-[.90]'>
            <Button
              value='Submit'
              bgcolor='#C8500B'
              textcolor='white'
              submit={form.handleSubmit(submit)}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddCategory;
