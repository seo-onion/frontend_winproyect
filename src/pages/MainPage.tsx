import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { decodedToken } from "../utils/decodedToken";
import ClientMain from "../components/ClientMain";



export default function MainPage() {
    const { token } = useAuth();

    const [payload, setPayload] = useState<string | null>(null);

    useEffect(() => {
        if (token) {
            const decoded = decodedToken(token);
            setPayload(decoded.role);
        }
    }, [token]);

    return (
        <>
            {payload == "CLIENT" && <ClientMain/>}
        </>
    );
}
