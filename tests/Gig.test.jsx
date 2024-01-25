import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import "@testing-library/jest-dom";
import Gig from "../src/components/Gig";

describe('test Gig', () => {
    it('renders with correct name, description, dateTime, and location', () => {
        render (
            <Gig
                name="testName"
                description="testDescription"
                dateTime="testDateTime"
                location="testLocation"
                />
        );
        expect(screen.getByRole("heading")).toHaveTextContent("testName")
    })
})