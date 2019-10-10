interface ConfigureSynchronizationJobAlertRequest {
    "RegionId"?: string;
    "SynchronizationJobId": string;
    "SynchronizationDirection"?: string;
    "DelayAlertStatus"?: string;
    "DelayAlertPhone"?: string;
    "ErrorAlertStatus"?: string;
    "ErrorAlertPhone"?: string;
    "DelayOverSeconds"?: string;
    "OwnerId"?: string;
}
export { ConfigureSynchronizationJobAlertRequest };