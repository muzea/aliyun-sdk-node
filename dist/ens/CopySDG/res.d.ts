export interface CopySDGResponse {
    /**
     * 请求ID。
     * @example `XXX-XXX-XXX`
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
         * 同步请求执行结果。
         */
        Result: {
            /**
             * 失败节点数。
             * @example `0`
             */
            FailedCount: number;
            /**
             * 失败节点详情列表。
             */
            FailedItems: {
                /**
                 * 错误信息。
                 * @example `region not found`
                 */
                ErrorMessage: string;
                /**
                 * 目标节点ID。
                 * @example `cn-hangzhou-xxx`
                 */
                DestinationRegionId: string;
            }[];
            /**
             * 成功数。
             * @example `1`
             */
            SuccessCount: number;
        };
        /**
         * 请求是否全部成功。取值说明如下：
         * - **true**：全部成功。
         * - **false**：存在失败任务。
         * @example `true`
         */
        Success: boolean;
    };
}
