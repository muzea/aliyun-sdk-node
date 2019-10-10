interface ModifyAutoSnapshotPolicyRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "SystemDiskPolicyEnabled"?: boolean;
    "SystemDiskPolicyTimePeriod"?: number;
    "SystemDiskPolicyRetentionDays"?: number;
    "SystemDiskPolicyRetentionLastWeek"?: boolean;
    "DataDiskPolicyEnabled"?: boolean;
    "DataDiskPolicyTimePeriod"?: number;
    "DataDiskPolicyRetentionDays"?: number;
    "DataDiskPolicyRetentionLastWeek"?: boolean;
}
export { ModifyAutoSnapshotPolicyRequest };