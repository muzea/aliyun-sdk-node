interface CreateFlowRequest {
    "RegionId": string;
    "ProjectId": string;
    "Name": string;
    "Description": string;
    "StartSchedule"?: number;
    "EndSchedule"?: number;
    "CronExpr"?: string;
    "CreateCluster"?: boolean;
    "ClusterId"?: string;
    "HostName"?: string;
    "Application"?: string;
    "AlertConf"?: string;
    "AlertUserGroupBizId"?: string;
    "AlertDingDingGroupBizId"?: string;
    "ParentFlowList"?: string;
    "ParentCategory"?: string;
}
export { CreateFlowRequest };