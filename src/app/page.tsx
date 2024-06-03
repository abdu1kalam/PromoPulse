import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      {" "}
      <h1> hello brothers </h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
