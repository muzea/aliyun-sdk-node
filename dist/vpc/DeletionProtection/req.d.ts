interface DeletionProtectionRequest {
    "RegionId": string;
    "Type": string;
    "InstanceId": string;
    "ProtectionEnable": boolean;
    "OwnerId"?: number;
    "ClientToken"?: string;
}
export { DeletionProtectionRequest };