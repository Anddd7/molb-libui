/// <reference types="react" />
export declare const tableColumns: ({
    title: string;
    key: string;
    hiddenInlineTitle?: undefined;
} | {
    title: string;
    key: string;
    hiddenInlineTitle: boolean;
})[];
export declare const dataSource: ({
    key: string;
    name: string;
    age: number;
    address: JSX.Element;
    tags: JSX.Element;
} | {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: JSX.Element;
})[];
export declare const rfaDataSource: {
    name: string;
    age: number;
    address: string;
    tags: JSX.Element;
    onRowClickHandler: () => void;
}[];
