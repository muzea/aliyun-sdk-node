export interface GetRecordingRuleResponse {
    /**
     * 请求ID。
     * @example `9FEA6D00-317F-45E3-9004-7FB8B0B7****`
     */
    RequestId: string;
    /**
     * 获取到的集群RecordingRule聚合规则。
     * @example `--- groups: - name: "recording_demo"   rules:   - expr: "sum(jvm_memory_max_bytes)"     record: "rate_coredns_demo"`
     */
    Data: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
}
