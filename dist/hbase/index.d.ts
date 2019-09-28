interface HBASE {
    AllocatePublicNetworkAddress(query: {
        "RegionId"?: string;
        "ClusterId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    CheckVersionsOfComponents(query: {
        "RegionId": string;
        "ClusterId": string;
        "Components": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    CloseBackup(query: {
        "RegionId"?: string;
        "ClusterId": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    CreateCluster(query: {
        "RegionId": string;
        "ZoneId": string;
        "ClusterName": string;
        "NetType": string;
        "MasterInstanceType": string;
        "CoreInstanceType": string;
        "CoreDiskType": string;
        "CoreDiskSize": string;
        "CoreDiskQuantity": string;
        "CoreInstanceQuantity": string;
        "Engine": string;
        "SecurityIPList": string;
        "EngineVersion": string;
        "CloudType": string;
        "ClientToken"?: string;
        "VpcId"?: string;
        "VSwitchId"?: string;
        "PayType"?: string;
        "AutoRenew"?: string;
        "DbInstanceType"?: string;
        "DbInstanceConnType"?: string;
        "BackupId"?: string;
        "SrcDBInstanceId"?: string;
        "RestoreTime"?: string;
        "IsColdStorage"?: string;
        "ColdStorageSize"?: string;
        "DbType"?: string;
        "PricingCycle"?: string;
        "Duration"?: string;
        "DepMode"?: string;
    }): Promise<{}>;
    CreateGlobalResource(query: {
        "RegionId": string;
        "ClusterId": string;
        "ResourceName": string;
        "ResourceType": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    CreateHbaseSlbServer(query: {
        "RegionId": string;
        "ClusterId": string;
        "SlbServer": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    CreateSubscription(query: {
        "RegionId"?: string;
        "SubscriptionType": string;
        "SourceInstanceId": string;
        "SourceInstanceRegionId": string;
        "DestinationInstanceId": string;
        "DestinationInstanceRegionId": string;
        "Mapping": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
        "SlbServer"?: string;
        "SubscriptionDescription"?: string;
        "ExtraContext"?: string;
    }): Promise<{}>;
    DeleteCluster(query: {
        "RegionId": string;
        "ClusterId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "ZoneId"?: string;
    }): Promise<{}>;
    DeleteGlobalResource(query: {
        "RegionId": string;
        "ClusterId": string;
        "ResourceName": string;
        "ResourceType": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    DeleteHbaseSlbServer(query: {
        "RegionId": string;
        "ClusterId": string;
        "SlbServer": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    DescribeBackupPolicy(query: {
        "RegionId"?: string;
        "ClusterId": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    DescribeBackups(query: {
        "RegionId"?: string;
        "ClusterId": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
        "BackupId"?: number;
        "PageNumber"?: number;
        "PageSize"?: number;
        "StartTime"?: string;
        "EndTime"?: string;
    }): Promise<{}>;
    DescribeClusterAttribute(query: {
        "RegionId": string;
        "ClusterId": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    DescribeClusterList(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
        "ClusterId"?: string;
        "ClusterName"?: string;
        "StatusList"?: string[];
        "PageSize"?: number;
        "PageNumber"?: number;
        "DbType"?: string;
        "Tag"?: string[];
    }): Promise<{}>;
    DescribeClusterModel(query: {
        "RegionId": string;
        "ClusterId": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    DescribeClusterWhiteList(query: {
        "RegionId": string;
        "ClusterId": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    DescribeColdStorage(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ClusterId": string;
        "ZoneId"?: string;
    }): Promise<{}>;
    DescribeMultiModDbAttribute(query: {
        "RegionId": string;
        "ClusterId": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    DescribeRdsVSwitchs(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "VpcId"?: string;
        "ZoneId"?: string;
    }): Promise<{}>;
    DescribeRdsVpcs(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    DescribeRegions(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    DescribeSubscriptionInitializeProgress(query: {
        "RegionId"?: string;
        "SubscriptionId": string;
        "OwnerId"?: number;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeSubscriptionPerformance(query: {
        "RegionId"?: string;
        "SubscriptionId": string;
        "SourceInstanceId": string;
        "Key": string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeSubscriptionPermission(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeSubscriptions(query: {
        "RegionId"?: string;
        "SubscriptionId"?: string;
        "OwnerId"?: number;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    ListClusterServiceConfig(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ClusterId"?: string;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    ListClusterServiceConfigHistory(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
        "ClusterId"?: string;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    ModifyBackupPolicy(query: {
        "RegionId"?: string;
        "PreferredBackupTime": string;
        "PreferredBackupPeriod": string;
        "ClusterId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "ZoneId"?: string;
    }): Promise<{}>;
    ModifyClusterName(query: {
        "RegionId": string;
        "ClusterId": string;
        "ClusterName": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    ModifyClusterNetType(query: {
        "RegionId": string;
        "ClusterId": string;
        "NetType": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
        "VpcId"?: string;
        "VSwitchId"?: string;
    }): Promise<{}>;
    ModifyClusterSecurityIpList(query: {
        "RegionId": string;
        "ClusterId": string;
        "SecurityIpList": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    ModifyClusterServiceConfig(query: {
        "RegionId": string;
        "ClusterId": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
        "Restart"?: boolean;
        "Name"?: string;
        "Value"?: string;
        "Parameters"?: string;
    }): Promise<{}>;
    ModifyHasRootPassword(query: {
        "RegionId": string;
        "ClusterId": string;
        "HasPassword": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    ModifyRestartCluster(query: {
        "RegionId": string;
        "ClusterId": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
        "Components"?: string;
    }): Promise<{}>;
    ModifyRollbackHasForHbase(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "ClusterId": string;
        "ZoneId"?: string;
    }): Promise<{}>;
    ModifySubscriptionDescription(query: {
        "RegionId"?: string;
        "SubscriptionId": string;
        "SubscriptionDescription": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifySubscriptionMapping(query: {
        "RegionId"?: string;
        "SubscriptionId": string;
        "Mapping": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifySubscriptionPermission(query: {
        "RegionId"?: string;
        "Status": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifyUIProxyAccountPassword(query: {
        "RegionId": string;
        "ClusterId": string;
        "AccountName": string;
        "AccountPassword": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    ModifyUpgradeToHasForHbase(query: {
        "RegionId"?: string;
        "HasPassword": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "ClusterId": string;
        "ZoneId"?: string;
    }): Promise<{}>;
    MultimodAddComponents(query: {
        "RegionId": string;
        "ClusterId": string;
        "Components": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    OpenBackup(query: {
        "RegionId"?: string;
        "ClusterId": string;
        "ZoneId"?: string;
    }): Promise<{}>;
    QuerySparkRelateHBase(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ClusterId": string;
        "ZoneId"?: string;
    }): Promise<{}>;
    QueryXpackRelatedDB(query: {
        "RegionId"?: string;
        "RelateDbType": string;
        "ClusterId": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    ReleasePublicNetworkAddress(query: {
        "RegionId"?: string;
        "ClusterId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ReleaseSubscription(query: {
        "RegionId"?: string;
        "SubscriptionId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ResizeCluster(query: {
        "RegionId": string;
        "ZoneId": string;
        "CoreInstanceQuantity": string;
        "Engine": string;
        "ClusterId": string;
        "CloudType": string;
        "UpgradeType": string;
        "ClientToken"?: string;
        "CoreInstanceType"?: string;
        "CoreDiskType"?: string;
        "CoreDiskSize"?: string;
        "CoreDiskQuantity"?: string;
        "PayType"?: string;
        "IsColdStorage"?: string;
        "ColdStorageSize"?: string;
    }): Promise<{}>;
    SparkRelateHBase(query: {
        "RegionId"?: string;
        "HBaseClusterIds": string;
        "OwnerId"?: number;
        "ClusterId": string;
        "ZoneId"?: string;
    }): Promise<{}>;
    UpgradeMinorVersion(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "ClusterId": string;
        "ZoneId"?: string;
        "UpgradeVersion"?: string;
        "Components"?: string;
    }): Promise<{}>;
    XpackRelateDB(query: {
        "RegionId"?: string;
        "DbClusterIds": string;
        "RelateDbType": string;
        "ClusterId": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    DescribeClusterConnectAddrs(query: {
        "RegionId": string;
        "ClusterId": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    ConvertCluster(query: {
        "RegionId"?: string;
        "ClusterId": string;
        "PricingCycle": string;
        "Duration": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    RenewCluster(query: {
        "RegionId"?: string;
        "ClusterId": string;
        "PricingCycle": string;
        "Duration": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    ListHbaseInstances(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "VpcId"?: string;
        "ZoneId"?: string;
    }): Promise<{}>;
    TagResources(query: {
        "RegionId": string;
        "ResourceType": string;
        "ResourceId": string[];
        "Tag": string[];
        "OwnerId"?: number;
    }): Promise<{}>;
    UntagResources(query: {
        "RegionId": string;
        "ResourceType": string;
        "ResourceId": string[];
        "OwnerId"?: number;
        "TagKey"?: string[];
        "All"?: boolean;
    }): Promise<{}>;
    ListTagResources(query: {
        "RegionId": string;
        "ResourceType": string;
        "OwnerId"?: number;
        "ResourceId"?: string[];
        "Tag"?: string[];
        "NextToken"?: string;
    }): Promise<{}>;
    DeleteServerlessInstance(query: {
        "RegionId": string;
        "ZoneId": string;
        "InstanceId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{}>;
    DescribeServerlessInstance(query: {
        "RegionId": string;
        "ZoneId": string;
        "InstanceId": string;
        "ClientToken"?: string;
    }): Promise<{}>;
    EnableServerlessPublicConnection(query: {
        "RegionId": string;
        "ZoneId": string;
        "InstanceId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{}>;
    GetMultimodeCmsUrl(query: {
        "RegionId": string;
        "ClusterId": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    QueryHBaseHaDB(query: {
        "RegionId"?: string;
        "ClusterId": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    RelateDbForHBaseHa(query: {
        "RegionId"?: string;
        "HaActive": string;
        "HaStandby": string;
        "HaActiveDBType": string;
        "HaStandbyDBType": string;
        "IsActiveStandard": boolean;
        "IsStandbyStandard": boolean;
        "HaMigrateType": string;
        "ClusterId": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
        "HaTables"?: string;
        "HaActiveHdfsUri"?: string;
        "HaActiveHbaseFsDir"?: string;
        "HaActiveClusterKey"?: string;
        "HaActiveVersion"?: string;
        "HaActiveUser"?: string;
        "HaActivePassword"?: string;
        "HaStandbyHdfsUri"?: string;
        "HaStandbyHbaseFsDir"?: string;
        "HaStandbyClusterKey"?: string;
        "HaStandbyVersion"?: string;
        "HaStandbyUser"?: string;
        "HaStandbyPassword"?: string;
    }): Promise<{}>;
    AddUserHdfsInfo(query: {
        "RegionId": string;
        "ClusterId": string;
        "ExtInfo": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
    DeleteUserHdfsInfo(query: {
        "RegionId": string;
        "ClusterId": string;
        "NameService": string;
        "OwnerId"?: number;
        "ZoneId"?: string;
    }): Promise<{}>;
}
export default HBASE;