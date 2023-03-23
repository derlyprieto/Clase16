import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Loginform from "../components/Loginform";

describe("LoginForm - First input", () => {
    test("First input must be rendered", () => {
        render(<Loginform />)
        const name = screen.getByTestId('name')
        fireEvent.change(name,{target: {value: "Pedro Martinez"}})
        expect(name.value).toMatch(/[a-zA-Z]+$/i)
    })
})