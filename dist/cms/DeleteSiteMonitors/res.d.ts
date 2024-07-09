export interface DeleteSiteMonitorsResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。当请求成功时，返回成功信息；当请求失败时，返回失败原因，例如：`TaskId not found`。
     * @example `请求成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `123BCC5D-8B63-48EA-B747-9A8995BE7AA6`
     */
    RequestId: string;
    /**
     * 操作是否成功。true表示成功，false表示失败。
     * @example `true`
     */
    Success: string;
    /**
     * 返回受影响的行数。
     */
    Data: {
        /**
         * 受影响的行数。
         * @example `0`
         */
        count: number;
    };
}
