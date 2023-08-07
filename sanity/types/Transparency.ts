type TransparencyData = {
    _key: string;
    value: number;
    title: string;
}

export type Transparency = {
    font: string;
    description: string;
    transparencies: TransparencyData[];
}