export interface GetQualityResultRequest {
    "InstanceId": string;
    "PageNo"?: number;
    "PageSize"?: number;
    "TouchStartTime": string;
    "TouchEndTime": string;
    "ChannelType"?: string;
    "HitStatus"?: number;
    "GroupIds"?: number[];
    "QualityRuleIds"?: number[];
    "ProjectIds"?: number[];
}
