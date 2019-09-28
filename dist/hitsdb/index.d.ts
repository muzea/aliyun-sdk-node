interface HITSDB {
    DeleteHiTSDBInstance(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    DeleteHiTSDBInstanceData(query: {
        "RegionId"?: string;
        "ReverseVpcIp": string;
        "ReverseVpcPort": number;
        "Metric": string;
        "Start": number;
        "End": number;
        "OwnerId"?: number;
        "InstanceId": string;
        "Tags"?: string;
        "UserName"?: string;
        "PassWord"?: string;
    }): Promise<{}>;
    DeleteHiTSDBInstanceMeta(query: {
        "RegionId"?: string;
        "ReverseVpcIp": string;
        "ReverseVpcPort": number;
        "Metric": string;
        "OwnerId"?: number;
        "InstanceId": string;
        "Tags"?: string;
        "UserName"?: string;
        "PassWord"?: string;
    }): Promise<{}>;
    DescribeHiTSDBInstance(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    DescribeHiTSDBInstanceDataTtl(query: {
        "RegionId"?: string;
        "ReverseVpcIp": string;
        "ReverseVpcPort": number;
        "OwnerId"?: number;
        "InstanceId": string;
        "UserName"?: string;
        "PassWord"?: string;
    }): Promise<{}>;
    DescribeRegions(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ZoneId"?: string;
        "AcceptLanguage"?: string;
    }): Promise<{}>;
    DescribeZones(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ExploreHiTSDBInstanceData(query: {
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
    }): Promise<{}>;
    ExploreHiTSDBInstanceDataMetricList(query: {
        "RegionId"?: string;
        "ReverseVpcIp": string;
        "ReverseVpcPort": number;
        "Prefix": string;
        "Max": number;
        "OwnerId"?: number;
        "InstanceId": string;
        "UserName"?: string;
        "PassWord"?: string;
    }): Promise<{}>;
    ExploreHiTSDBInstanceDataTagKeyList(query: {
        "RegionId"?: string;
        "ReverseVpcIp": string;
        "ReverseVpcPort": number;
        "Prefix": string;
        "Max": number;
        "OwnerId"?: number;
        "InstanceId": string;
        "UserName"?: string;
        "PassWord"?: string;
        "Metric"?: string;
    }): Promise<{}>;
    ExploreHiTSDBInstanceDataTagValueList(query: {
        "RegionId"?: string;
        "ReverseVpcIp": string;
        "ReverseVpcPort": number;
        "Prefix": string;
        "TagKey": string;
        "Max": number;
        "OwnerId"?: number;
        "InstanceId": string;
        "UserName"?: string;
        "PassWord"?: string;
    }): Promise<{}>;
    ExploreHiTSDBInstanceDeletionJobList(query: {
        "RegionId"?: string;
        "JobType": string;
        "PageNumber": number;
        "PageSize": number;
        "OwnerId"?: number;
        "InstanceId": string;
        "UserName"?: string;
        "PassWord"?: string;
    }): Promise<{}>;
    ModifyHiTSDBInstanceSecurityIpList(query: {
        "RegionId"?: string;
        "SecurityIpList": string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    RenameHiTSDBInstanceAlias(query: {
        "RegionId"?: string;
        "InstanceAlias": string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    RestartHiTSDBInstance(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    SwitchHiTSDBInstancePublicNet(query: {
        "RegionId"?: string;
        "SwitchAction": number;
        "OwnerId"?: number;
        "InstanceId": string;
    }): Promise<{}>;
    UpdateHiTSDBInstanceDataTtl(query: {
        "RegionId"?: string;
        "ReverseVpcIp": string;
        "ReverseVpcPort": number;
        "Ttl": number;
        "OwnerId"?: number;
        "InstanceId": string;
        "UserName"?: string;
        "PassWord"?: string;
    }): Promise<{}>;
}
export default HITSDB;