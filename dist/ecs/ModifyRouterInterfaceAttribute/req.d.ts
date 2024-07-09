export interface ModifyRouterInterfaceAttributeRequest {
    "RegionId": string;
    "RouterInterfaceId": string;
    "Name"?: string;
    "Description"?: string;
    "OppositeInterfaceId"?: string;
    "OppositeRouterId"?: string;
    "OppositeRouterType"?: string;
    "OppositeInterfaceOwnerId"?: number;
    "HealthCheckSourceIp"?: string;
    "HealthCheckTargetIp"?: string;
}
