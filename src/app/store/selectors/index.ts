import {createFeatureSelector} from "@ngrx/store";
import {ElementsState} from "../reducers";

export const getElementsState = createFeatureSelector<ElementsState>('elements');
