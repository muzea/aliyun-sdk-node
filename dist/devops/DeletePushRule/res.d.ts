export interface DeletePushRuleResponse {
    /**
     * 请求ID
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误码
     * @example `InvalidParam.NotFound`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `”“`
     */
    errorMessage: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    success: string;
    /**
     * 返回结果
     */
    result: {
        /**
         * 删除是否成功
         * @example `true`
         */
        result: boolean;
    };
}
