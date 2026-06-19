import { createContext, useState } from "react";
import { characters } from "@/Data/RelationData";
import { AnimatePresence } from "motion/react";

type CharacterKey = keyof typeof characters;

type RelationContextType = {
  catg: CharacterKey;
  setCatg: React.Dispatch<React.SetStateAction<CharacterKey>>;
};

const RelationContext = createContext<RelationContextType | undefined>(
  undefined
);

const RelationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [catg, setCatg] = useState<CharacterKey>("Rintaro");

  return (
    <RelationContext.Provider value={{ catg, setCatg }}>
      <div className="h-full pt-30">

      {children}
      </div>
    </RelationContext.Provider>
  );
};

export { RelationContext };
export default RelationProvider;