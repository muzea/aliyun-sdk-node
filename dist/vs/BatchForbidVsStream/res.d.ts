export interface BatchForbidVsStreamResponse {
    /**
     * 请求ID。
     * @example `B058D71B-76EA-5DF6-ACAF-A617C1E7937F`
     */
    RequestId: string;
    ForbidResult: {
        /**
         * 断流结果。
         */
        ForbidResultInfo: {
            /**
             * 操作结果。取值范围：
             * - success（成功）
             * - fail（失败）
             * @example `success`
             */
            Result: string;
            /**
             * 成功或者失败的路数。
             * @example `2`
             */
            Count: number;
            /**
             * 错误原因。取值范围：
             * - ok（成功）
             * - exceed-limit（黑名单条数超限）
             * - internal-error（内部错误）
             * @example `ok`
             */
            Detail: string;
            Channels: {
                /**
                 * 流名称列表。
                 */
                Channel: string[];
            };
        }[];
    };
}
