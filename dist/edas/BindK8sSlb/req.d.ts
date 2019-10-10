interface BindK8sSlbRequest {
    "RegionId"?: string;
    "AppId": string;
    "ClusterId": string;
    "Type": string;
    "SlbProtocol": string;
    "TargetPort": string;
    "Port": string;
    "SlbId"?: string;
}
export { BindK8sSlbRequest };