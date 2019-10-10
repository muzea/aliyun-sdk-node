interface UpdateGtmMonitorRequest {
    "RegionId"?: string;
    "MonitorConfigId": string;
    "ProtocolType": string;
    "MonitorExtendInfo": string;
    "IspCityNode": string[];
    "UserClientIp"?: string;
    "Lang"?: string;
    "Interval"?: number;
    "EvaluationCount"?: number;
    "Timeout"?: number;
}
export { UpdateGtmMonitorRequest };