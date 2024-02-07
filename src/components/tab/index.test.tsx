import React from "react";
import { render } from "@testing-library/react";

import Tab from "./";

describe("Button", () => {
    test("renders the Button component", () => {
        render(<Tab items={[{ title: 'Title', content: 'Content' }]} isLarge={true} />);
    });
});