export interface CancelSparkStatementResponse {
    /**
     * 是否终止成功，取值说明：
     * - **true**：终止成功。
     * - **false**：终止失败。
     * @example `true`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `341ADFA1-4A68-4707-9CA7-FA86523A5F14`
     */
    RequestId: string;
}
