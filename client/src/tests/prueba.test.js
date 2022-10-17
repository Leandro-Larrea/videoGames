import React from "react";
import {screen, render} from "@testing-library/react"
import {Prueba} from "../components/Prueba.jsx"
import { configure, shallow } from "enzyme";

let n;
beforeEach(()=>{
    n = shallow(<Prueba/>);
    expect(isReact.classComponent(Nav)).toBeFalsy();
})

describe("Prueba", ()=>{
    it("Must display a title", ()=>{
        expect(screen.queryByText(/prueba/i)).toBeInTheDocument();
    });
});

it("must display the prueba name ASD", ()=>{ 
    expect(screen.queryByText(/asd/i)).toBeInTheDocument();
})