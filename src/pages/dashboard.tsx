import { ProtectedRoute } from "@/router/ProtectedRoute";
import React from "react";
import styled from "styled-components";

export default function Dashboard() {
  return <ProtectedRoute>dashboard</ProtectedRoute>;
}
