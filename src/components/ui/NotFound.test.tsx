import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./NotFound";

describe("NotFound Component", () => {
  const renderWithRouter = () => {
    return render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );
  };

  it("renders 404 message", () => {
    renderWithRouter();
    expect(screen.getByText("404 not Found")).toBeInTheDocument();
  });

  it("renders back to home link", () => {
    renderWithRouter();
    const link = screen.getByRole("link", { name: /404 Head_Back_Home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });

  it("renders with correct styling classes", () => {
    renderWithRouter();

    // Check container styling
    expect(screen.getByText("404 not Found").closest("div")).toHaveClass(
      "grid",
    );
    expect(screen.getByText("404 not Found").closest("div")).toHaveClass(
      "place-items-center",
    );
  });

  it("renders 404 image", () => {
    renderWithRouter();
    const img = screen.getByRole("img", { name: /404/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveClass("icon");
    expect(img).toHaveClass("h-6");
    expect(img).toHaveClass("w-6");
  });

  it("renders with correct text styling", () => {
    renderWithRouter();

    // Check heading styling
    expect(screen.getByText("404 not Found")).toHaveClass("name");
  });
});
