interface DescribeReplicaPerformanceRequest {
    "RegionId"?: string;
    "SourceDBInstanceId": string;
    "Key": string;
    "StartTime": string;
    "EndTime": string;
    "OwnerId"?: number;
    "ReplicaId": string;
    "DestinationDBInstanceId"?: string;
}
export { DescribeReplicaPerformanceRequest };