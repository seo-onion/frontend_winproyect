import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { decodedToken } from "../utils/decodedToken";
import ClientMain from "../components/ClientMain";
import ProviderMain from "../components/ProviderMain";


export default function MainPage() {
    const { token } = useAuth();

    const [payload, setPayload] = useState<string | null>(null);

    useEffect(() => {
        if (token) {
            const decoded = decodedToken(token);
            setPayload(Object(decoded).role);
        }
    }, [token]);

    return (
        <>
            {payload == "CLIENT" && <ClientMain/>}
            {payload == "FREELANCER" && <ProviderMain />}
            {payload == "ENTERPRISE" && <ProviderMain />}
        </>
    );
}
