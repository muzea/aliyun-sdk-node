export interface QueryOutboundTaskRequest {
    "TaskId"?: number;
    "TaskType"?: number;
    "TaskName"?: string;
    "StartDate"?: string;
    "EndDate"?: string;
    "StartTime"?: string;
    "EndTime"?: string;
    "SkillGroup"?: number;
    "Ani"?: string;
    "Status"?: string;
    "GroupName"?: string;
    "DepartmentId"?: string;
    "InstanceId": string;
    "PageSize"?: number;
    "CurrentPage"?: number;
}
