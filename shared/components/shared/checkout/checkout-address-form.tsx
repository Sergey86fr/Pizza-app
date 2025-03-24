'use client'

import { FC } from "react";
import { AddressInput, ErrorText, FormTextarea, WhiteBlock } from "..";
// import { Input} from "../../ui";
import { cn } from "@/shared/lib/utils";
import { Controller, useFormContext } from "react-hook-form";


interface Props {
    className?: string;
}

export const CheckoutAddressForm: FC<Props> = ({className}) => {
    const { control }  = useFormContext();

    return (
        <WhiteBlock className={cn(className || "")} title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
              {/* <Input
                name="firstName"
                className="text-base"
                placeholder="Введите адрес"
              /> */}
              <Controller 
              control={control}
              name="address" 
            render={({ field, fieldState }) =>  <>
            <AddressInput onChange={field.onChange} />
            {fieldState.error?.message && <ErrorText text={fieldState.error.message} />}
             </> }
             />
              

              <FormTextarea
            name="comment"             
            className="text-base"
            placeholder="Комментарий к заказу"
            rows={5} 
          />
            </div>
          </WhiteBlock>
    )
}