export interface GroupUpdateNameRequest {
    "domain_id": string;
    "body"?: {
        group_id: string;
        name: string;
    };
}
