export interface ModifySiteMonitorResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `68192f5d-0d45-4b98-9724-892813f86c71`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: string;
    /**
     * 修改任务结果详情。
     */
    Data: {
        /**
         * 监控任务数。
         * @example `1`
         */
        count: number;
    };
}
