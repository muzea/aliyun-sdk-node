export interface ManageRecordingRuleRequest {
    /**
     * 用户ID。
     * @example `87348589207`
     */
    "QueryUserId": string;
    /**
     * 集群ID。
     * @example `cf09705f5a82f454db0d50420b6b4e904`
     */
    "ClusterId": string;
    /**
     * 自定义的RecordingRule聚合规则。
     * @example `groups:\n- interval: 60s\n  name: auto_analyzer_recording_rule_60s\n  rules:\n  - expr: sum(node_cpu_seconds_total)\n    record: sum:node_cpu_seconds_total:recording_rule_hash_f341458c0f7d\n`
     */
    "RuleYaml": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
