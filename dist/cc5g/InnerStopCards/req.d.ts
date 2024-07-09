export interface InnerStopCardsRequest {
    "Iccids": string[];
    "RegionId"?: string;
    "ClientToken"?: string;
    "DryRun"?: boolean;
    "InnerApi"?: boolean;
    "Task"?: boolean;
}
