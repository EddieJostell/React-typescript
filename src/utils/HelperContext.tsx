import React, { createContext } from "react";

export interface IContextProps {
  state: IContextState;
  children?: React.ReactNode;
}

export interface IQuoteValues {
  id: number;
  quote: string;
  author: string;
}

export interface IContextState {
  quoteItem?: IQuoteValues | never[];
}

//const quoteInformation: IContextState = {quoteItems: {id: }}

export const QuoteContext = createContext([]);

export const QuoteProvider = QuoteContext.Provider;

export default QuoteContext;
