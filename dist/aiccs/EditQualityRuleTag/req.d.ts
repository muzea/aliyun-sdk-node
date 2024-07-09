export interface EditQualityRuleTagRequest {
    "InstanceId": string;
    "AnalysisTypes": {
        Name: string;
        Id: number;
    }[];
}
