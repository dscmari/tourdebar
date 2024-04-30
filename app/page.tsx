
import { sql } from '@vercel/postgres';

export default function Home() {


//   const addPet = async () => {
//     try {
//         await sql`
//             INSERT INTO Pets (Name, Owner)
//             VALUES ('sammyyyyy', 'tommyyyyyy');
//         `;
//         console.log('New pet added successfully.');
//         let pets = await sql`SELECT * FROM Pets;`; // Assign the result to the pets variable
//         console.log(pets)
        
//     } catch (error) {
//         console.error('Error adding new pet:', error);
//     }
// };

const logPets = async () => {
     console.log("logPets loaded");
     try {
        let pets = await sql`SELECT * FROM Pets;`; // Assign the result to the pets variable
        console.log(typeof(pets))
        console.log(pets);
         // Process or use the retrieved pets data here
     } catch (error) {
         console.error("Error retrieving pets:", error);
    } };

// You can then call the logPets function elsewhere in your code to populate the pets variable

logPets()


    return (
        <main className=" flex flex-col justify-center text-center text-white h-screen bg-black lg:w-1/2 lg:mx-auto lg:text-left">
            <h1 className="text-2xl font-bold p-4 mb-8 text-center">Tour de Bar</h1>
            <div className="lg:ml-24">
                    <h2 className="p-4 text-xl">Admin Log In</h2>
                    <form action="">
                        <div className="m-4 flex flex-col lg:flex-row justify-center lg:justify-start">
                            <label htmlFor="username">Username</label>
                            <input className="border m-2" type="text" id="username" name="username" required />
                        </div>
                        <div className="m-4 flex flex-col lg:flex-row justify-center lg:justify-start">
                            <label htmlFor="password">Password</label>
                            <input className="border m-2" type="password" id="password" name="password" required />
                        </div>
                        <div className="m-4">
                            <button className="p-2 border" type="submit">Login</button>
                        </div>
                </form>
            </div>
            <div>
                <button className="p-4 border bg-white text-black">Add to test pet database</button>
                <h1>test</h1>
            </div>
        </main>
    );
}
