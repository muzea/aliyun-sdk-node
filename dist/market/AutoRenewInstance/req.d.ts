export interface AutoRenewInstanceRequest {
    "Type": string;
    "OrderBizId": number;
    "AutoRenewCycle"?: string;
    "AutoRenewDuration"?: number;
}
