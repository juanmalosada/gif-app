import { fireEvent, render, screen } from '@testing-library/react';
import { GiftExpertApp } from '../src/GiftExpertApp';
import '@testing-library/jest-dom';

describe('Pruebas en <GifExpertApp />', () => {

    const setup = () => {
        render(<GiftExpertApp />);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");
        return {
          input,
          form,
        };
      };

      test("debe de mostrar el loading inicialmente", () => {
        const { input, form } = setup();
        expect(input).toBeInTheDocument();
        expect(form).toBeInTheDocument();
      });

      test("Nombre de la caterogoria en h3", () => {
        const { input, form } = setup();
        fireEvent.input(input, { target: { value: "Saitama" } });
        fireEvent.submit(form);
        expect(screen.getByText("Saitama")).toBeInTheDocument();
      });


    test("tiene que agregar la categoria si no esta repetida", () => {
        const { input, form } = setup();
        fireEvent.input(input, { target: { value: "Saitama" } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: "Goku" } });
        fireEvent.submit(form);
        expect(screen.getByText("Saitama")).toBeInTheDocument();
        expect(screen.getByText("Goku")).toBeInTheDocument();
    });

    test("no debe de agregar la categoria si esta repetida", () => {
        const { input, form } = setup();
        fireEvent.input(input, { target: { value: "Saitama" } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: "Saitama" } });
        fireEvent.submit(form);
        expect(screen.getByText("Saitama")).toBeInTheDocument();
        expect(screen.queryByText("Saitama")).toBeInTheDocument();
        expect(screen.queryAllByText("Saitama")).toHaveLength(1);
    });
});