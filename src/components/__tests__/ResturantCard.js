import "@testing-library/jest-dom";
import ResturantCard, { withOffersLabel } from "../RestaurantCard";
import MOCK_DATA from "../../components/mocks/resCardMock.json";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

describe("ResturantCard Test", () => {
  it("should render ResturantCard component with props Data", () => {
    render(<ResturantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Burger King");
    expect(name).toBeInTheDocument();
  });

  it("should render ResturantCard component with discount label", () => {
    // Create the enhanced component using HOC
    const RestaurantCardWithOffers = withOffersLabel(ResturantCard);

    // Render the enhanced component
    render(<RestaurantCardWithOffers resData={MOCK_DATA} />);

    // Check if both the original content and the offer label are present
    const name = screen.getByText("Burger King");
    const offerText = screen.getByText(/₹166 OFF[\s\n]*ABOVE ₹999/i);

    expect(name).toBeInTheDocument();
    expect(offerText).toBeInTheDocument();
  });

  //   it("should not render discount label when no offer is present", () => {
  //     // Create mock data without discount info
  //     const mockDataWithoutOffer = {
  //       ...MOCK_DATA,
  //       info: {
  //         ...MOCK_DATA.info,
  //         aggregatedDiscountInfoV3: null,
  //       },
  //     };

  //     // Create the enhanced component using HOC
  //     const RestaurantCardWithOffers = withOffersLabel(ResturantCard);

  //     // Render the enhanced component
  //     render(<RestaurantCardWithOffers resData={mockDataWithoutOffer} />);

  //     // Check if the original content is present but offer text is not
  //     const name = screen.getByText("Dunkin' - Donuts & Coffee");
  //     const offerText = screen.queryByText("50% OFF"); // using queryByText as we expect it not to exist

  //     expect(name).toBeInTheDocument();
  //     expect(offerText).not.toBeInTheDocument();
  //   });
});
