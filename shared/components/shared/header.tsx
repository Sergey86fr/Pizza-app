"use client";

import { cn } from "@/shared/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./modals";


interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Header: React.FC<Props> = ({
  hasSearch = true,
  hasCart = true,
  className,
}) => {
  const router = useRouter();
  const [ openAuthModal, setOpenAuthModal ] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    let toastMessage = '';

    if (searchParams.has('paid')) {
      toastMessage = 'Заказ успешно оплачен! Информация отправлена на почту.';
    }

    if (searchParams.has('verified')) {
      toastMessage = 'Почта успешно подтверждена!';
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace('/');
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 1000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">New Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className="mx-10  flex-1">
            <SearchInput className={""} />
          </div>
        )}

        <div className="flex items-center gap-3">

          <AuthModal open={openAuthModal} onClose={ () => setOpenAuthModal(false) } />
         
         <ProfileButton onClickSignIn={ () => setOpenAuthModal(true)} />

          {hasCart && <CartButton />}
          {/* не работает cartbutton */}
        </div>
      </Container>
    </header>
  );
};
