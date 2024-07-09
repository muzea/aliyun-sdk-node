export interface DisableMetricRulesRequest {
    /**
     * 报警规则ID。N的取值范围：1~20。
     * @example `detect_87****_HTTP_HttpLatency`
     */
    "RuleId": string[];
}
