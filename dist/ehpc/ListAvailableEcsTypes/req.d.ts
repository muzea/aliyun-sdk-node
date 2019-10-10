interface ListAvailableEcsTypesRequest {
    "RegionId": string;
    "ZoneId": string;
    "SpotStrategy"?: string;
    "InstanceChargeType"?: string;
    "ShowSoldOut"?: boolean;
}
export { ListAvailableEcsTypesRequest };