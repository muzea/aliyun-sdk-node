export interface CreateFlowlogResponse {
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B457`
     */
    RequestId: string;
    /**
     * 当前接口调用是否成功。
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: string;
    /**
     * 流日志ID。
     * @example `flowlog-m5evbtbpt****`
     */
    FlowLogId: string;
}
