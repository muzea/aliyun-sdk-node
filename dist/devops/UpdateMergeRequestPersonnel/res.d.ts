export interface UpdateMergeRequestPersonnelResponse {
    /**
     * 请求ID
     * @example `4D6AF7CC-B43B-5454-86AB-023D25E44868`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
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
         * 修改干系人是否成功
         * @example `true`
         */
        result: boolean;
    };
}
