interface ModifyFlowRequest {
    "RegionId": string;
    "ProjectId": string;
    "Id": string;
    "Name"?: string;
    "Status"?: string;
    "Description"?: string;
    "Periodic"?: boolean;
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
export { ModifyFlowRequest };