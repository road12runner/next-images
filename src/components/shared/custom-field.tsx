import {formSchema}  from './transformation-form';
import {Control} from "react-hook-form";
import React from "react";
import {z} from 'zod';
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";

type CustomFieldProps = {
  control: Control<z.infer<typeof  formSchema>> | undefined,
  render: (props: {field: any}) => React.ReactNode,
  name: keyof  z.infer<typeof formSchema>;
  formLabel?: string;
  className?: string;
}

const CustomField = ({control, render, name, formLabel, className}: CustomFieldProps) => {
  return (
    <FormField
      control={control}
      render={({field}) => (
        <FormItem  className={className}>
          {formLabel && <FormLabel>{formLabel}</FormLabel>}
          <FormControl>{render({field})}</FormControl>
          <FormMessage/>
        </FormItem>
      )} name={name} />
  )
}

export default CustomField;
