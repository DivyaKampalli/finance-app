"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import useNewAccount from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const { onOpen, onClose } = useNewAccount();
  return (
    <div>
      <Button onClick={onOpen}>Add an account</Button>
    </div>
  );
}
