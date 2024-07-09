export interface AddRecordingRuleRequest {
    /**
     * 集群ID。
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId": string;
    /**
     * 自定义的RecordingRule聚合规则，其设置需要符合YAML格式。
     * @example `groups: - name: "recording_demo"   rules:   - expr: "sum(jvm_memory_max_bytes)"     record: "rate_coredns_demo"`
     */
    "RuleYaml": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
