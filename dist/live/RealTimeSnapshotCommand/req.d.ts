interface RealTimeSnapshotCommandRequest {
    "RegionId"?: string;
    "DomainName": string;
    "AppName": string;
    "StreamName": string;
    "OwnerId"?: number;
    "Command": string;
    "Mode"?: number;
    "Interval"?: number;
}
export { RealTimeSnapshotCommandRequest };