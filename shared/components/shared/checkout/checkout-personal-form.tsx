import { FC } from "react";
import { FormInput, WhiteBlock } from "..";
import { cn } from "@/shared/lib/utils";




interface Props {
    className?: string;
}

export const CheckoutPersonalForm: FC<Props> = ({className}) => {
    return (
        <WhiteBlock className={cn(className || "")} title="2. Персональные данные">
        <div className="grid grid-cols-2 gap-5">
          <FormInput name="firstName" className="text-base" placeholder="Имя" />
          <FormInput
            name="lastName"
            className="text-base"
            placeholder="Фамилия"
          />
          <FormInput name="email" className="text-base" placeholder="E-Mail" />
          <FormInput
            name="phone"
            className="text-base"
            placeholder="Телефон"
          />
        </div>
      </WhiteBlock>
    )
}