export interface DeleteRepositoryGroupResponse {
    /**
     * 请求ID
     * @example `30F2DA15-2877-5FC9-BC71-F7F394717907`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
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
