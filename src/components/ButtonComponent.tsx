import { useNavigate } from "react-router-dom";

interface ButtonComponentProps {
    goTo: string;
    textContent: string;
}

export default function ButtonComponent({ goTo, textContent }: ButtonComponentProps) {
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate(goTo );
    };

    return (
        <button className="border-solid border-2" onClick={navigateTo}>
            {textContent}
        </button>
    );
}