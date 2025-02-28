import { StaticImageData } from "next/image";

export interface FeatureType {
    icon: StaticImageData,
    title: string,
    description: string
}

export interface StepType {
    icon: StaticImageData,
    title: string,
    description: string
}

export interface BlogType {
    id:string,
    img:StaticImageData,
    title:string,
    tag:string,
    summary?:string
}