interface BindSlbRequest {
    "RegionId"?: string;
    "AppId": string;
    "SlbId": string;
    "SlbIp": string;
    "Type": string;
    "ListenerPort"?: number;
    "VServerGroupId"?: string;
}
export { BindSlbRequest };