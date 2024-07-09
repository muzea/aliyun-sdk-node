export interface CreateSubTicketRequest {
    "InstanceId": string;
    "CreatorId": number;
    "CreatorName": string;
    "TemplateId": number;
    "FromInfo": string;
    "FormData": string;
    "MemberId": number;
    "MemberName"?: string;
    "Priority"?: number;
    "ParentCaseId"?: number;
    "BizData"?: string;
    "AgentId"?: number;
}
