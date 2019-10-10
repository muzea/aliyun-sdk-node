interface CreateExecutionPlanRequest {
    "RegionId": string;
    "Name": string;
    "Strategy": string;
    "JobIdList": string[];
    "TimeInterval"?: number;
    "StartTime"?: number;
    "TimeUnit"?: string;
    "DayOfWeek"?: string;
    "DayOfMonth"?: string;
    "ClusterId"?: string;
    "CreateClusterOnDemand"?: boolean;
    "ClusterName"?: string;
    "ZoneId"?: string;
    "LogEnable"?: boolean;
    "LogPath"?: string;
    "SecurityGroupId"?: string;
    "IsOpenPublicIp"?: boolean;
    "EmrVer"?: string;
    "OptionSoftWareList"?: string[];
    "ClusterType"?: string;
    "HighAvailabilityEnable"?: boolean;
    "UseLocalMetaDb"?: boolean;
    "VpcId"?: string;
    "VSwitchId"?: string;
    "NetType"?: string;
    "UserDefinedEmrEcsRole"?: string;
    "IoOptimized"?: boolean;
    "InstanceGeneration"?: string;
    "EcsOrder"?: string[];
    "BootstrapAction"?: string[];
    "UseCustomHiveMetaDB"?: boolean;
    "InitCustomHiveMetaDB"?: boolean;
    "Config"?: string[];
    "Configurations"?: string;
    "EasEnable"?: boolean;
    "WorkflowDefinition"?: string;
}
export { CreateExecutionPlanRequest };