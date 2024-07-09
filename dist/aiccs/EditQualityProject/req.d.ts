export interface EditQualityProjectRequest {
    "InstanceId": string;
    "ProjectId": number;
    "ProjectName": string;
    "CheckFreqType": number;
    "ProjectVersion": number;
    "ScopeType": number;
    "TimeRangeStart"?: string;
    "TimeRangeEnd"?: string;
    "AnalysisIds": number[];
    "DepList"?: number[];
    "GroupList"?: number[];
    "ServicerList"?: string[];
    "ChannelTouchType": number[];
}
