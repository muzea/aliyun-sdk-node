export interface QueryTaskDetailRequest {
    "OutboundTaskId"?: string;
    "StatusList"?: string;
    "EndReasonList"?: string;
    "SkillGroup"?: string;
    "ServicerName"?: string;
    "ServicerId"?: string;
    "PriorityList"?: string;
    "TaskId"?: number;
    "Ani"?: string;
    "Dnis"?: string;
    "Sid"?: string;
    "DepartmentIdList"?: string;
    "InstanceId": string;
    "PageSize"?: number;
    "CurrentPage"?: number;
}
