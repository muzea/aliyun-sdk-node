export interface DeleteTargetsResponse {
    /**
     * 错误信息。
     * @example `EventBusNotExist`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `78FA9EAC-F0C0-58B0-871E-9F9756CE1D29`
     */
    RequestId: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 处理失败的事件体数量。取值说明如下：
         * 取值为0：所有事件均正常处理。
         * 取值为除0以外的其他整数：处理失败的事件个数。
         * @example `0`
         */
        ErrorEntriesCount: number;
        /**
         * 处理失败的事件体信息。
         */
        ErrorEntries: {
            /**
             * 错误详细描述。
             * @example `The id of event target is duplicate!`
             */
            ErrorMessage: string;
            /**
             * 错误码
             * @example `EventRuleTargetIdDuplicate`
             */
            ErrorCode: string;
            /**
             * 处理失败的事件体编号。
             * @example `target5`
             */
            EntryId: string;
        }[];
    };
    /**
     * 接口返回码：200：表示成功。                                 其它：表示错误码。错误码详情，请参见错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
}
