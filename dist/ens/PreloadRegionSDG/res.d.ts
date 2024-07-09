export interface PreloadRegionSDGResponse {
    /**
     * 请求ID。
     * @example `C0003E8B-B930-4F59-ADC0-0E209A9012A8`
     */
    RequestId: string;
    /**
     * 返回Data对象。
     */
    Data: {
        /**
         * 响应信息。
         * @example `success`
         */
        Message: string;
        /**
         * 同步请求执行结果。
         */
        Result: {
            /**
             * 失败数量。
             * @example `0`
             */
            FailedCount: number;
            /**
             * 失败详情列表
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
