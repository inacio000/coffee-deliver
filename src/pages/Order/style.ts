import styled from "styled-components";

interface FormProps {
    svgColor: string;
}

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
    padding: 10rem 1rem;

    h3 {
        margin-bottom: 0.9rem;
    }

    svg {
        color: var(--yellow-dark);
    }

    input {
        padding: 0.7rem;
        background: var(--base-input);
        border-radius: 0.25rem;
        border: 1px solid var(--base-button);
        
        &:is(:focus) {
            outline: 1px var(--yellow) solid;
        }

        &::placeholder {
            color: var(--base-label);
        }

        & + input {
            margin-top: 1rem;
        }
    }
`

export const LeftContent = styled.div`
    width: 640px;
`;

export const Content = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
`;

export const Form = styled.form`
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    background: var(--base-card);
    border-radius: 0.375rem;
`;

export const FormBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const HeaderForm = styled.div`
    display: flex;
    flex-direction: column;

    p {
        padding-left: 1.5rem;
        font-size: 0.8rem;
    }
`;

export const Address = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
        color: var(--base-subtitle);
    }
`;

export const MethodPayment = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        display: flex;
        align-items: center;
        gap: 0.8125rem;
        background: var(--base-button);
        width: 11.166875rem;
        padding: 1rem;
        border: none;
        border-radius: 0.375rem;

        svg {
            width: 1rem;
            height: 1rem;
            color: var(--purple);
        }
    }
`;

export const HeaderPaymen = styled.div`
    display: flex;
    flex-direction: column;

    p {
        padding-left: 1.5rem;
        font-size: 0.8rem;
    }

    svg {
        color: var(--purple);
    }
`;

export const NavPay = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
        color: var(--base-subtitle);
    }
`;

export const RightContent = styled.div`
    width: 448px;
    height: 498px;
`;

export const Cart = styled.div`
    padding: 2.5rem;
    border-radius: 0.357rem 2.25rem;
    background: var(--base-card);
`

export const CartFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
        display: flex;
        justify-content: space-between;
    }

    a {
        width: 100%;
        text-align: center;
        background: var(--yellow);
        padding: 0.75rem;
        border-radius: 0.25rem;
        color: var(--base-white);
        text-decoration: none;
    }
`;

// Inputs
export const CpfInput = styled.input`
    display: block;
    width: 12.5rem;
`;
export const StreetInput = styled.input`
    display: block;
    width: 100%;
`;
export const NumberInput = styled.input`
    width: 12.5rem;
`;
export const ComplementInput = styled.input`
    width: 21.65rem;
`;

export const Neighborhood = styled.input`
    display: block;
    width: 12.5rem;
`;

export const CityInput = styled.input`
    width: 17.25rem;
`;
export const UfInput = styled.input`
    width: 3.75rem;
`;