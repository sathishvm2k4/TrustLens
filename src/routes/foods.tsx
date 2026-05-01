import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/foods")({
  component: Foods,
});

function Foods() {
  return (
    <Outlet />
  );
}
