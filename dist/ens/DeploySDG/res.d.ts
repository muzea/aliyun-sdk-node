export interface DeploySDGResponse {
    /**
     * 请求ID。
     * @example `A331CA96-3948-4BD2-B067-F6174F5C17EA`
     */
    RequestId: string;
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
         * 任务结果。
         */
        Result: {
            /**
             * 失败任务数。
             * @example `0`
             */
            FailedCount: number;
            /**
             * 失败任务详情列表
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
            /**
             * 成功数量。
             * @example `1`
             */
            SuccessCount: number;
        };
        /**
         * 请求是否全部成功。取值说明如下：
         * - true：全部成功。
         * - false：存在失败任务。
         * @example `true`
         */
        Success: boolean;
    };
}
