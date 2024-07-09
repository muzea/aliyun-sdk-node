export interface CreateRouterInterfaceRequest {
    "RegionId": string;
    "Role": string;
    "OppositeRegionId": string;
    "Spec": string;
    "RouterType": string;
    "RouterId": string;
    "OppositeInterfaceId"?: string;
    "OppositeRouterId"?: string;
    "OppositeRouterType"?: string;
    "OppositeInterfaceOwnerId"?: string;
    "HealthCheckSourceIp"?: string;
    "HealthCheckTargetIp"?: string;
    "AccessPointId"?: string;
    "OppositeAccessPointId"?: string;
    "Description"?: string;
    "Name"?: string;
    "Period"?: number;
    "InstanceChargeType"?: string;
    "AutoPay"?: boolean;
    "PricingCycle"?: string;
    "ClientToken"?: string;
    "UserCidr"?: string;
}
