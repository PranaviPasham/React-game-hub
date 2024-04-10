import useData from "./useData";

export interface Platform{
    id:number;
    name:string;
    slung:string;
}

const usePlatforms = () => useData<Platform>("/platforms/lists/parents")

export default usePlatforms;