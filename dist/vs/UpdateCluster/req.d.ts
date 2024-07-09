export interface UpdateClusterRequest {
    "ClusterId": string;
    "Name"?: string;
    "Description"?: string;
    "InternalPorts"?: string;
    "EffectiveTime"?: string;
    "MaintainTime"?: string;
    "SecurityGroupId"?: string;
}
