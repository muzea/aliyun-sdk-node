export interface DescribePreCheckResultResponse {
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `DescribePreCheckResult`
     */
    RequestId: string;
    /**
     * 预检结果。
     */
    PreCheckResult: {
        /**
         * 预检名称。
         * @example `是否有唯一键`
         */
        PreCheckName: string;
        /**
         * 状态。
         * @example `FAIL`
         */
        State: string;
        /**
         * 子预检任务详情。
         */
        SubCheckItems: {
            /**
             * 报错code。
             * @example `1004`
             */
            ErrorMsgCode: string;
            /**
             * 预检名称。
             * @example `唯一键`
             */
            PreCheckItemName: string;
            /**
             * 任务状态。
             * @example `成功`
             */
            State: string;
            ErrorMsgParams: string[];
        }[];
    };
}
