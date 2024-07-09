export interface OpenXtraceDefaultSLRResponse {
    /**
     * 操作是否成功。取值：
     * - `true`：成功。
     * - `false`：失败。
     * @example `true`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `53CACA70-2CF7-490C-BD06-1A2AE4EB****`
     */
    RequestId: string;
}
