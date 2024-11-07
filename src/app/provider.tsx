import Header from "@/components/header/Header";
import React, { ReactNode } from "react";

interface ProviderProps {
    children: ReactNode;
}

function Provider({children} : ProviderProps) {
    return (
        <div>
            <Header></Header>
            {children}
        </div>
    )
}

export default Provider;