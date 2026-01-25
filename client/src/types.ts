import type React from "react";

export interface SectionTitleProps {
    text1: string;
    text2: string;
    text3: string;
}

export interface TestimonialCardProps {
    testimonial: ITestimonial;
    index: number;
}

export interface ITestimonial {
    image: string;
    name: string;
    handle: string;
    date: string;
    quote: string;
}

export interface IFeature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface IFooter {
    title: string;
    links: IFooterLink[];
}

export interface IFooterLink {
    name: string;
    href: string;
}

export interface NavbarProps {
    navlinks: INavLink[];
}

export interface INavLink {
    name: string;
    href: string;
}

export interface PricingCardProps {
    pricing: IPricing;
    index: number;
}

export interface IPricing {
    name: string;
    price: number;
    period: string;
    features: string[];
    mostPopular: boolean;
}

export interface SectionProps {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
}

export interface UploadProps {
    label: string;
    file: File| null;
    onClear: ()=>void;
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=> void;
}

export interface User {
    id?: string;
    name?: string;
    email?: string
}

export interface Project {
    id: string;
    name?: string;
    userid?: string;
    user?: User;
    productName: string;
    productDescription?: string;
    userPrompt?: string;
    aspectRatio: string;
    targetLength?: number;
    generatedImage?: string;
    generatedVideo?: string;
    isGenerating: boolean;
    isPublished: boolean;
    error?: string;
    createdAt: Date | string;
    updatedAt?: Date | string;
    uploadedImages: string[];
}