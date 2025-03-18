import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner Component", () => {
  it("renders loading spinner", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("has correct styling classes", () => {
    render(<Spinner />);
    const container = screen.getByRole("status");
    expect(container).toHaveClass("flex");
    expect(container).toHaveClass("h-screen");
    expect(container).toHaveClass("items-center");
    expect(container).toHaveClass("justify-center");

    const spinner = container.firstChild;
    expect(spinner).toHaveClass("loading");
    expect(spinner).toHaveClass("h-16");
    expect(spinner).toHaveClass("w-16");
    expect(spinner).toHaveClass("rounded-full");
    expect(spinner).toHaveClass("border-4");
  });
});
