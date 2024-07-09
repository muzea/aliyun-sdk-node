export interface BatchCreateQualityProjectsRequest {
    "ProjectName": string;
    "CheckFreqType": number;
    "TimeRangeStart"?: string;
    "TimeRangeEnd"?: string;
    "AnalysisIds": number[];
    "InstanceList": string[];
    "ChannelTouchType"?: number[];
}
