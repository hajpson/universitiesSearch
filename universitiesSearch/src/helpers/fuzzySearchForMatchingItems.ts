import { FuzzySearchProps } from "../types/FuzzySearchProps";
import Fuse from 'fuse.js'
import { University } from "../types/University";

export const fuzzySearchForMatchingItems = ({ items, phrase }: FuzzySearchProps) => {
    const fuseBase = new Fuse<University>(items, { keys: ['name']})
    return fuseBase.search(phrase)
}