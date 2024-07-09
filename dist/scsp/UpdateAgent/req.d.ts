export interface UpdateAgentRequest {
    "ClientToken"?: string;
    "InstanceId": string;
    "AccountName": string;
    "DisplayName": string;
    "SkillGroupId"?: number[];
    "SkillGroupIdList"?: number[];
}
