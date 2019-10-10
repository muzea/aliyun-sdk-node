interface ModifyAutoRenewAttributeRequest {
    "RegionId": string;
    "DBClusterIds": string;
    "OwnerId"?: number;
    "RenewalStatus"?: string;
    "Duration"?: string;
    "PeriodUnit"?: string;
}
export { ModifyAutoRenewAttributeRequest };