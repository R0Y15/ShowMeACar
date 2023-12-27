import { MouseEventHandler } from "react";

export interface customButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btntype?: "button" | "submit";
    textStyles?: string;
    disabled?: boolean;
    rightIcon?: string;
}

export interface searchByMakerProps {
    maker: string;
    setMaker: (maker: string) => void;
}

export interface carProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps {
    model: string;
    maker: string;
    year: number;
    fuel: string;
    limit: number;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface showMoreProps {
    pageNumber: number;
    isNext: boolean;
}