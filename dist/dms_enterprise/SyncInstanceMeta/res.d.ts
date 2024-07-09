export interface SyncInstanceMetaResponse {
    /**
     * 请求ID。
     * @example `A99CD576-1E18-4E86-931E-C3CCE56DC030`
     */
    RequestId: string;
    /**
     * DB拓扑信息。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，取值：
     * - **true**
     * - **false**
     * @example `true`
     */
    Success: boolean;
}
