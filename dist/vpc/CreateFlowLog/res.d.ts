export interface CreateFlowLogResponse {
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B457`
     */
    RequestId: string;
    /**
     * 是否调用成功。取值：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: string;
    /**
     * 流日志ID。
     * @example `fl-m5e8vhz2t21sel1nq****`
     */
    FlowLogId: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxazdjdhd****`
     */
    ResourceGroupId: string;
}
