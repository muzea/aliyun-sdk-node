export interface GetFileBlobsResponse {
    /**
     * 请求ID
     * @example `F590C9D8-E908-5B6C-95AC-56B7E8011FFA`
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
         * 文件内容
         * @example `xxxx`
         */
        content: string;
        /**
         * 文件总行数
         * @example `65535`
         */
        totalLines: number;
        /**
         * 文件内容大小，单位：bytes
         * @example `10`
         */
        size: number;
    };
}
