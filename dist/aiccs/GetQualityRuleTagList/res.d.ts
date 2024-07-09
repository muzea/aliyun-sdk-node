export interface GetQualityRuleTagListResponse {
    Code: string;
    Message: string;
    RequestId: string;
    Success: boolean;
    Data: {
        RuleTagName: string;
        RuleTagId: number;
    }[];
}
