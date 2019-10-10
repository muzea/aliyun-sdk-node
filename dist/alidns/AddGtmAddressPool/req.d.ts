interface AddGtmAddressPoolRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "Name": string;
    "Type": string;
    "MinAvailableAddrNum": number;
    "Addr": string[];
    "UserClientIp"?: string;
    "Lang"?: string;
    "MonitorStatus"?: string;
    "ProtocolType"?: string;
    "Interval"?: number;
    "EvaluationCount"?: number;
    "Timeout"?: number;
    "MonitorExtendInfo"?: string;
    "IspCityNode"?: string[];
}
export { AddGtmAddressPoolRequest };