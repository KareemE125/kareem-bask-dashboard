import { Button } from "@/components/ui/button";


export default async function Home() {

  return (
    <main>

      <h1 className="text-3xl">Hello World</h1>
      <Button variant="outline">Hello</Button>
      <Button variant="destructive">Hello</Button>
      <Button variant="ghost">Hello</Button>
      <Button variant="secondary">Hello</Button>
    </main>
  );
}
