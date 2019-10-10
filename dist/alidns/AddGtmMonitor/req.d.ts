interface AddGtmMonitorRequest {
    "RegionId"?: string;
    "AddrPoolId": string;
    "ProtocolType": string;
    "Interval": number;
    "EvaluationCount": number;
    "Timeout": number;
    "MonitorExtendInfo": string;
    "IspCityNode": string[];
    "UserClientIp"?: string;
    "Lang"?: string;
}
export { AddGtmMonitorRequest };