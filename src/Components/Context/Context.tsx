import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../firebase";

interface ContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    loading: boolean;
}

const Context = createContext<ContextType | null>(null);

export function ContextProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
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
