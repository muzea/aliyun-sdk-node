export interface RemoveInstanceSDGResponse {
    /**
     * 请求ID。
     * @example `125B04C7-3D0D-4245-AF96-14E3758E3F06`
     */
    RequestId: string;
    /**
     * 返回的业务码，正常成功为0。
     * @example `0`
     */
    Code: number;
    /**
     * 返回Data对象。
     */
    Data: {
        /**
         * 响应消息，若成功请求为success。
         * @example `success`
         */
        Message: string;
        /**
         * 请求是否全部成功。取值说明如下：
         * - **true**：全部成功。
         * - **false**：存在失败任务。
         * @example `true`
         */
        Success: boolean;
        /**
         * 同步请求执行结果。
         */
        Result: {
            /**
             * 失败任务数。
             * @example `0`
             */
            FailedCount: number;
            /**
             * 成功数量。
             * @example `1`
             */
            SuccessCount: number;
            /**
             * 失败详情列表。
             */
            FailedItems: {
                /**
                 * 错误信息。
                 * @example `sdg not found`
                 */
                ErrMessage: string;
                /**
                 * 实例ID。
                 * @example `aic-xxxxx-0`
                 */
                InstanceId: string;
            }[];
        };
    };
}
