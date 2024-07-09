export interface ListMqSofamqTraceRequest {
    /**
     * 实例 ID
     * @example `SOFAMQ_INSTANCE_000001`
     */
    "InstanceId": string;
    /**
     * 页码
     * @example `1`
     */
    "PageNum": number;
    /**
     * 每页显示条数
     * @example `20`
     */
    "PageSize": number;
    /**
     * 模糊查询项，可以为 Topic、Message ID 或 Message Key。
     * @example `TP_xx，0BA6EEBD700549C2FAAE076616860003，keyA`
     */
    "QueryItem"?: string;
}
