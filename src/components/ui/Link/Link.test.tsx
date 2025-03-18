import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Link from "./index";

describe("Link Component", () => {
  const defaultProps = {
    href: "https://example.com",
    name: "Test Link",
    imageSrc: "/test-icon.svg",
    imageAlt: "Test Icon",
    openInNewTab: true,
  };

  it("renders with all required props", () => {
    render(<Link {...defaultProps} />);

    const link = screen.getByRole("link", { name: /test link/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", defaultProps.href);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders without openInNewTab", () => {
    render(<Link {...defaultProps} openInNewTab={false} />);

    const link = screen.getByRole("link", { name: /test link/i });
    expect(link).toHaveAttribute("target", "_self");
    expect(link).not.toHaveAttribute("rel");
  });

  it("renders image with correct attributes", () => {
    render(<Link {...defaultProps} />);

    const image = screen.getByAltText(defaultProps.imageAlt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", defaultProps.imageSrc);
  });

  it("maintains required classes for styling", () => {
    render(<Link {...defaultProps} />);

    const link = screen.getByRole("link", { name: /test link/i });
    expect(link).toHaveClass("App-link");
    expect(link).toHaveClass("inline-flex");
    expect(link).toHaveClass("rounded-lg");
  });

  // New test cases for edge cases and accessibility
  it("handles undefined openInNewTab prop", () => {
    render(<Link {...defaultProps} openInNewTab={undefined} />);

    const link = screen.getByRole("link", { name: /test link/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("has proper focus styles", () => {
    render(<Link {...defaultProps} />);

    const link = screen.getByRole("link", { name: /test link/i });
    expect(link).toHaveClass("focus-visible:outline-none");
    expect(link).toHaveClass("focus-visible:ring-1");
    expect(link).toHaveClass("focus-visible:ring-red-600");
  });

  it("has proper hover styles", () => {
    render(<Link {...defaultProps} />);

    const link = screen.getByRole("link", { name: /test link/i });
    expect(link).toHaveClass("hover:bg-green-300");
    expect(link).toHaveClass("hover:text-white");
    expect(link).toHaveClass("hover:underline-offset-2");
  });

  it("has proper underline styles", () => {
    render(<Link {...defaultProps} />);

    const link = screen.getByRole("link", { name: /test link/i });
    expect(link).toHaveClass("underline");
    expect(link).toHaveClass("decoration-red-600");
    expect(link).toHaveClass("decoration-2");
    expect(link).toHaveClass("underline-offset-4");
  });

  it("has proper spacing", () => {
    render(<Link {...defaultProps} />);

    const link = screen.getByRole("link", { name: /test link/i });
    expect(link).toHaveClass("mx-[1.5vw]");
    expect(link).toHaveClass("mt-4");
    expect(link).toHaveClass("px-2");
    expect(link).toHaveClass("py-1");
  });
});
