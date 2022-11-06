import { it } from "vitest";
import Badge from "./Badge"; 
import "../../workaround-cypress-10-0-2-process-issue";


describe("Badge test", () => {
    it("test of Badge component with Cypress tester", () => {
        cy.mount(<Badge name="Grass" />);
        cy.get("span").contains("Grass");

    });
});
