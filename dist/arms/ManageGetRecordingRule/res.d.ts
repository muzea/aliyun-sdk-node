export interface ManageGetRecordingRuleResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `34ED024E-9E31-434A-9E4E-D9D15C3****`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `--- groups: - name: "recording_demo"   rules:   - expr: "sum(jvm_memory_max_bytes)"     record: "rate_coredns_demo"`
     */
    Data: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
}
