export interface CreateOutboundTaskRequest {
    "TaskType": number;
    "TaskName": string;
    "Description"?: string;
    "StartDate": string;
    "EndDate": string;
    "StartTime": string;
    "EndTime": string;
    "RetryTime"?: number;
    "RetryInterval"?: number;
    "SkillGroup": number;
    "Ani": string;
    "GroupName"?: string;
    "Model"?: number;
    "DepartmentId"?: number;
    "ExtAttrs"?: string;
    "CallInfos"?: string;
    "InstanceId": string;
}
