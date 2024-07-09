export interface DeleteRepositoryResponse {
    /**
     * 请求ID
     * @example `A7586FEB-E48D-5579-983F-74981FBFF627`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `”“`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
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
