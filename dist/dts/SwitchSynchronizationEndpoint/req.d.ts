interface SwitchSynchronizationEndpointRequest {
    "RegionId"?: string;
    "SynchronizationJobId": string;
    "Endpoint.Type": string;
    "Endpoint.InstanceType": string;
    "Endpoint.InstanceId": string;
    "Endpoint.Port": string;
    "SynchronizationDirection"?: string;
    "Endpoint.IP"?: string;
    "OwnerId"?: string;
}
export { SwitchSynchronizationEndpointRequest };