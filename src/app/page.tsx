"use client";
import Link from "next/link";
import { Button } from "@mantine/core";

export default function Demo() {
  return (
    <Link href="/hello" passHref>
      <Button>Next link button</Button>
    </Link>
  );
}
