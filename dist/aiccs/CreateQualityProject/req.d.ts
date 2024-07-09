export interface CreateQualityProjectRequest {
    "ProjectName": string;
    "CheckFreqType": number;
    "ScopeType": number;
    "TimeRangeStart"?: string;
    "TimeRangeEnd"?: string;
    "InstanceId": string;
    "ChannelTouchType"?: number[];
    "DepList"?: number[];
    "GroupList"?: number[];
    "ServicerList"?: string[];
    "AnalysisIds": number[];
}
