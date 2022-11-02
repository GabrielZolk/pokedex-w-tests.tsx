import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import Card from "./CardPokemon";

const wrapper = ({ ...rest }) => {
    return render(
        <MemoryRouter>
            <Card
                id={1}
                name="Foo"
                types={[
                    {
                        type: {
                            name: "grass",
                        },
                    },
                ]}
                { ...rest }
            />
        </MemoryRouter>
    );
};

describe("teste do componente CardPokemon", () => {
    test("verificar renderização", () => {
        wrapper({});

        expect(screen.getByText("Foo")).toBeDefined();

    });

    test('verifica dois digitos no ID', () => {
        wrapper({ id: 11 });

        expect(screen.getByText("#011")).toBeDefined();
    })

    test('verifica outro nome', () => {
        wrapper({ name: "Bar" });

        expect(screen.getByText("Bar")).toBeDefined();
    })
});