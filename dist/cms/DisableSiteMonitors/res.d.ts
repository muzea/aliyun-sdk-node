export interface DisableSiteMonitorsResponse {
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
     * @example `3fcd12e7-d387-42ee-b77e-661c775bb17f`
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
     * 站点监控任务影响探测点的记录数。
     */
    Data: {
        /**
         * 探测点的记录条数。
         * @example `0`
         */
        count: number;
    };
}
