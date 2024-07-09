export interface CreateFileResponse {
    /**
     * 请求ID
     * @example `F8053E32-9623-511F-8B46-F0E5FD206524`
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
         * 文件路径
         * @example `/src/main/test.java`
         */
        filePath: string;
        /**
         * 分支名称
         * @example `master`
         */
        branchName: string;
    };
}
