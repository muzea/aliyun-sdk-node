export interface DeleteProtectedBranchResponse {
    /**
     * 请求ID
     * @example `1F4F342D-493A-5B2C-B133-BA78B30FF834`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `”“`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
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
         * 是否删除成功
         * @example `true`
         */
        result: boolean;
    };
}
