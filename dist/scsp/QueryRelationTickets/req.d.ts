export interface QueryRelationTicketsRequest {
    "InstanceId": string;
    "CaseId"?: number;
    "CaseType"?: number;
    "SrType"?: number;
    "TaskStatus"?: number;
    "ChannelId"?: string;
    "ChannelType"?: number;
    "TouchId"?: number;
    "DealId"?: number;
    "Extra"?: any;
    "MemberId"?: number;
    "StartCaseGmtCreate"?: number;
    "EndCaseGmtCreate"?: number;
    "PageSize"?: number;
    "CurrentPage"?: number;
}
