export interface InnerLimitRateCardsRequest {
    "Iccids": string[];
    "RegionId"?: string;
    "ClientToken"?: string;
    "InnerApi"?: boolean;
    "DryRun"?: boolean;
    "Task"?: boolean;
}
