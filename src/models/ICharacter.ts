export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: IOrigin;
    location: ILocation;
    image: string;
    episode: string[];
    url: string;
}

interface IOrigin {
    name: string;
    url: string;
}

interface ILocation {
    name: string;
    url: string;

}

interface IInfo {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
}

export interface ICharacterResponse {
    results: ICharacter[];
    info: IInfo;
}
