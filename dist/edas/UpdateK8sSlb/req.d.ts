interface UpdateK8sSlbRequest {
    "RegionId"?: string;
    "AppId": string;
    "ClusterId": string;
    "Type": string;
    "SlbProtocol": string;
    "TargetPort": string;
    "Port": string;
}
export { UpdateK8sSlbRequest };