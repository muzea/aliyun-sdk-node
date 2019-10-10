interface CreateSynchronizationJobRequest {
    "RegionId"?: string;
    "SourceRegion": string;
    "DestRegion": string;
    "SynchronizationJobClass": string;
    "PayType": string;
    "Topology"?: string;
    "Period"?: string;
    "UsedTime"?: number;
    "ClientToken"?: string;
    "SourceEndpoint.InstanceType"?: string;
    "DestinationEndpoint.InstanceType"?: string;
    "networkType"?: string;
    "OwnerId"?: string;
}
export { CreateSynchronizationJobRequest };