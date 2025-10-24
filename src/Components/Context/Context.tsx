import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../firebase";

const Context: React.Context<unknown> = createContext<unknown>();

export function ContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser: User | null) => {
            setUser(firebaseUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <Context.Provider value={{ user, setUser, loading }}>
            {children}
        </Context.Provider>
    );
}

export function useAuth() {
    return useContext(Context);
}
