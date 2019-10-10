interface ExploreHiTSDBInstanceDataRequest {
    "RegionId"?: string;
    "ReverseVpcIp": string;
    "ReverseVpcPort": number;
    "Metric": string;
    "Aggregator": string;
    "Start": number;
    "End": number;
    "TagFilter": string;
    "OwnerId"?: number;
    "InstanceId": string;
    "DownSampleTime"?: string;
    "DownSampleAggregator"?: string;
    "UserName"?: string;
    "PassWord"?: string;
}
export { ExploreHiTSDBInstanceDataRequest };