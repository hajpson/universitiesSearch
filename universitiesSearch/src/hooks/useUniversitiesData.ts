import { useEffect, useState } from "react";
import axios from "axios";
import { api_base } from "../utils/constants/api";
import { University } from "../types/University";
import { UseUniversitiesDataProps } from "../types/UseUniversitiesDataProps";
import { fuzzySearchForMatchingItems } from "../helpers/fuzzySearchForMatchingItems";

export const useUniversitiesData = ({ phrase, setPage }: UseUniversitiesDataProps) => {
    const [universitiesData, setUniversitiesData] = useState<University[] | null>(null)
    const [error, setError] = useState<unknown>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getData = setTimeout(async () => {
            try {
                setIsLoading(true)
                setError(null)
                setPage(1)

                const response = await axios.get(api_base)
                const fuzzySearchedData = 
                    fuzzySearchForMatchingItems({ items: response.data, phrase: phrase })
                    .map(({ item }) => item)

                setUniversitiesData(fuzzySearchedData)
            } catch (er) {
                console.log(er)
                setError(er)
            } finally {
                setIsLoading(false)
            }
          }, 1000)
      
          return () => clearTimeout(getData)
    }, [phrase])

    return { universitiesData, error, isLoading }
}