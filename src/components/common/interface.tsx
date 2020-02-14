import { RouteComponentProps } from "react-router";

export interface SectionProps extends RouteComponentProps {
    title: string,
    imageUrl: string,
    id: number,
    linkUrl: string,
    size: string
}
