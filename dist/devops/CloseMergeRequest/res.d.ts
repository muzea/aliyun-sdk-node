export interface CloseMergeRequestResponse {
    /**
     * 请求ID
     * @example `HC93CE1A-8D7A-13A9-8306-7465DE2E5C0F`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `InvalidParam.NoPermission`
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
         * 关闭是否成功
         * @example `true`
         */
        result: boolean;
    };
}
