export interface GetQualityRuleDetailResponse {
    Code: string;
    Message: string;
    RequestId: string;
    Success: boolean;
    Data: {
        RuleTag: number;
        MatchType: number;
        Name: string;
        RuleCreateTime: string;
        RuleId: number;
        KeyWords: string[];
    };
}
