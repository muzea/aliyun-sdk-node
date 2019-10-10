interface UnassociateHaVipRequest {
    "RegionId": string;
    "HaVipId": string;
    "InstanceId": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
    "Force"?: string;
}
export { UnassociateHaVipRequest };