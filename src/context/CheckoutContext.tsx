'use client';
import React, { ReactNode, Reducer, useReducer } from "react";

export const CheckoutContext = React.createContext({});

function reducer(state: any, action: any) {
    if (action.type === 'incremented_age') {
      return {
        age: state.age + 1
      };
    }
    throw Error('Unknown action.');
  }

interface ProviderProps {
    children: ReactNode;
}
export function CheckoutProvider(props: ProviderProps) {
    const {
        children
    } = props;
    const [checkoutState, dispatch] = React.useReducer(checkoutReducer, {products: []});
    return (
        <CheckoutContext.Provider value={{checkoutState, dispatch}} >
            {children}
        </CheckoutContext.Provider>
    );
}

export function useCheckout() {
    const {checkoutState, dispatch} = React.useContext(CheckoutContext);
    
    const addToCart = (productId: number) => {
        dispatch({type: CheckoutActions.AddProduct, payload: {id: productId}});
    }

    const removeFromCart = (productId: number) => {
        dispatch({type: CheckoutActions.RemoveProduct, payload: {id: productId}});
    }

    return {
        checkoutState,
        addToCart,
        removeFromCart
    };

}

export enum CheckoutActions {
    AddProduct = 'ADD_PRODUCT',
    RemoveProduct = 'REMOVE_PRODUCT'
}

export type CheckoutActionType = keyof typeof CheckoutActions | CheckoutActions;

export type CheckoutAction = {
    payload: any;
    type: CheckoutActionType;
}

type CheckoutPayload = {
    id: number;
    name: string;
    price: number;
};

interface CheckoutState {
    products: ProductType[];
}

type ProductType = {
    id: number;
    name: string;
    price: number;
}

const checkoutReducer: Reducer<CheckoutState, CheckoutAction> = (state: CheckoutState, action: CheckoutAction) => {
    switch (action.type) {
        case CheckoutActions.AddProduct:
            console.log('add product');
            const product = SERVICES.find(value => value.id === action.payload.id)!;
            //const updatedProducts = typeof product === undefined ? [...state.products] : [...state.products, product];
            const updatedProducts = [...state.products, product];
            return {...state, products: updatedProducts};
            //return {...state};
        case CheckoutActions.RemoveProduct:
            console.log('remove product');
            const foundProduct = SERVICES.find(value => value.id === action.payload.id);
            const updatedProductsList = state.products.filter(value => value.id !== foundProduct?.id);
            return {...state, products: updatedProductsList};
        default:
            return state;
    }
}

interface Service {
    id: number;
    name: string;
    price: number;
}
const serviceOsint = {
    id: 1,
    name: 'osint_investigation',
    price: 400
}
const serviceAudit = {
    id: 2,
    name: 'security_audit',
    price: 200
}
const serviceObfuscation = {
    id: 3,
    name: 'data_obfuscation',
    price: 180
}
export const SERVICES = [
    serviceOsint, serviceAudit, serviceObfuscation
];