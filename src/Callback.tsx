import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const useQuery = () => {
    const { search } = useLocation();
  
    return useMemo(() => new URLSearchParams(search), [search]);
};

export const Callback = () => {
    const query = useQuery();
    return (
        <>
            <h1>Callback {query.get("token")}</h1>
        </>
    );
};