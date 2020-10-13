export interface Data2 {
    title : string;
    thumbnail : string;
    permalink : string;
}

export interface Data {
    modhash: string;
    dist: number;
    children: Child[];
    after: string;
}

export interface Child {
    kind: string;
    data: Data2;
}

export interface Parent {
    kind: string;
    data: Data;
}

