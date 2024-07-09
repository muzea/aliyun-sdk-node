export interface DeleteTagResponse {
    /**
     * 请求ID
     * @example `60945D4F-CF6D-5CFF-89ED-1D1F6657032C`
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
         * 删除的标签名
         * @example `v1.0`
         */
        tagName: string;
    };
}
