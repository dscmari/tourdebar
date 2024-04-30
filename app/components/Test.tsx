'use client'



    interface TestProps {
        pet: string; // Assuming pet is a string
    }

    const Test: React.FC<TestProps> = ({ pet }) => {
        console.log(pet)
        return <div>Pet: {pet}</div>;
    };

export default Test;
