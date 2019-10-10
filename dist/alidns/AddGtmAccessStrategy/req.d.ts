interface AddGtmAccessStrategyRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "StrategyName": string;
    "DefaultAddrPoolId": string;
    "FailoverAddrPoolId": string;
    "AccessLines": string;
    "Lang"?: string;
    "UserClientIp"?: string;
}
export { AddGtmAccessStrategyRequest };