'use client'



    interface TestProps {
        pet: string; // Assuming pet is a string
    }

    const Test: React.FC<TestProps> = ({ pet }) => {
        return <div>Pet: {pet}</div>;
    };

export default Test;
