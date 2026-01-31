import Posts from "@/pages/Posts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Posts />;
}
