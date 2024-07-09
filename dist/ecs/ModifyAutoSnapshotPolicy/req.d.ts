export interface ModifyAutoSnapshotPolicyRequest {
    "SystemDiskPolicyEnabled"?: boolean;
    "SystemDiskPolicyTimePeriod"?: number;
    "SystemDiskPolicyRetentionDays"?: number;
    "SystemDiskPolicyRetentionLastWeek"?: boolean;
    "DataDiskPolicyEnabled"?: boolean;
    "DataDiskPolicyTimePeriod"?: number;
    "DataDiskPolicyRetentionDays"?: number;
    "DataDiskPolicyRetentionLastWeek"?: boolean;
}
