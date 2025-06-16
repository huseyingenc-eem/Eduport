import React from "react";
import { Container } from "@/components";

interface QuickQuoteFormProps {
    children?: React.ReactNode;
}

const QuickQuoteForm: React.FC<QuickQuoteFormProps> = ({ children }) => {
    return (
        <div className="mt-8">
            <Container className="px-0" >
                <div className=" rounded-2xl py-2 max-w-6xl mx-auto">
                    <form className="flex flex-col md:flex-row md:items-center gap-4 md:gap-2 w-full">
                        {children}
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default QuickQuoteForm;