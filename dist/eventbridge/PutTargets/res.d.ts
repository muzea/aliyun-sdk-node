export interface PutTargetsResponse {
    /**
     * 错误信息。
     * @example `The event rule not existed!`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `6FB52207-7621-5292-BDF2-A17E2E984160
    `
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 处理失败的事件目标数量。取值说明如下：
         * - 取值为0：所有事件目标均正常处理。
         * - 取值为除0以外的其他整数：处理失败的事件目标个数。
         * @example `0`
         */
        ErrorEntriesCount: number;
        /**
         * 处理失败的事件目标信息。
         */
        ErrorEntries: {
            /**
             * 错误详细描述。
             * @example `The id of event target is duplicate!`
             */
            ErrorMessage: string;
            /**
             * 错误码。
             * @example `EventRuleTargetIdDuplicate`
             */
            ErrorCode: string;
            /**
             * 处理失败的事件目标Id。
             * @example `Mlm123456JHd2RsRoKw`
             */
            EntryId: string;
        }[];
    };
    /**
     * 接口返回码：
     * - Success：表示成功。
     *
     * - 其它：表示错误码。错误码详情，请参见错误码。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
}
