export interface GetQualityRuleListResponse {
    Code: string;
    Message: string;
    RequestId: string;
    Success: boolean;
    Data: {
        PageNo: number;
        PageSize: number;
        Total: number;
        QualityRuleList: {
            RuleTag: number;
            MatchType: number;
            Name: string;
            RuleCreateTime: string;
            RuleId: number;
            KeyWords: string[];
        }[];
    };
}
