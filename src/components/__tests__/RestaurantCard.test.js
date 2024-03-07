import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render ResCard with props data", () => {
  render(<RestaurantCard resdata={MOCK_DATA} />);

  const name = screen.getByText("McDonald's");

  expect(name).toBeInTheDocument();
});

it("Should render ResCard with Promoted Label", () => {
  // Test Higher order Component
});
